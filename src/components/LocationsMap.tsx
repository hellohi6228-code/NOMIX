import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RestaurantLocation } from '../types';
import { formatWeeklyHours, isOpenNow, timeZoneForState } from '../utils/hours';

export const BRAND_PIN_COLORS: Record<string, string> = {
  umiya: '#F87171',
  'surfing-crab': '#38BDF8',
  'hibachi-buffet': '#FBBF24',
  'matcha-zen': '#4D7C0F',
  chilin: '#78350F',
  'viva-refresh': '#DB2777',
};

export const directionsUrl = (loc: RestaurantLocation) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${loc.brandName}, ${loc.address}, ${loc.city}, ${loc.state} ${loc.zip ?? ''}`
  )}`;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function popupHtml(loc: RestaurantLocation) {
  const open = loc.hours ? isOpenNow(loc.hours, timeZoneForState(loc.state)) : null;
  const badge =
    open === null
      ? ''
      : `<span class="nomix-pop-badge ${open ? 'is-open' : 'is-closed'}">${open ? 'Open now' : 'Closed'}</span>`;
  const hours = loc.hours
    ? `<table class="nomix-pop-hours">${formatWeeklyHours(loc.hours)
        .map((r) => `<tr><td>${r.days}</td><td>${r.hours}</td></tr>`)
        .join('')}</table>`
    : '';
  return `
    <div class="nomix-pop">
      <div class="nomix-pop-brand" style="color:${BRAND_PIN_COLORS[loc.brandId]}">${escapeHtml(loc.brandName)}</div>
      <div class="nomix-pop-title">${escapeHtml(loc.name)} ${badge}</div>
      <div class="nomix-pop-line">${escapeHtml(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip ?? ''}`)}</div>
      ${loc.phone ? `<div class="nomix-pop-line"><a href="tel:${escapeHtml(loc.phone)}">${escapeHtml(loc.phone)}</a></div>` : ''}
      ${hours}
      <div class="nomix-pop-actions">
        <a href="${directionsUrl(loc)}" target="_blank" rel="noopener noreferrer">Get Directions</a>
        ${loc.website ? `<a href="${escapeHtml(loc.website)}" target="_blank" rel="noopener noreferrer">Website</a>` : ''}
      </div>
    </div>`;
}

interface LocationsMapProps {
  locations: RestaurantLocation[];
  // key changes on every click so re-selecting the same card re-opens its pin
  focus: { id: string; key: number } | null;
}

export const LocationsMap: React.FC<LocationsMapProps> = ({ locations, focus }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.CircleMarker>>(new Map());
  // Frames the current pins; re-run after resizes because Leaflet can't fit bounds into a 0-size box
  const frameRef = useRef<() => void>(() => {});
  const userMovedRef = useRef(false);
  const hasViewRef = useRef(false);

  useEffect(() => {
    const map = L.map(containerRef.current!, { scrollWheelZoom: false, zoomControl: true, zoomSnap: 0.5 });
    // OpenStreetMap's own tiles need no API key (CARTO watermarks unregistered domains).
    // The .nomix-dark-tiles filter in index.css turns them into a dark basemap.
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      className: 'nomix-dark-tiles',
    }).addTo(map);
    mapRef.current = map;
    // Once someone pans, zooms or taps the map, stop auto-reframing it on resize
    map.getContainer().addEventListener('pointerdown', () => (userMovedRef.current = true));
    // The page fades/slides in, so Leaflet's first size read can be stale; re-measure on any resize.
    const observer = new ResizeObserver(() => {
      map.invalidateSize();
      if (!userMovedRef.current) frameRef.current();
    });
    observer.observe(containerRef.current!);
    return () => {
      observer.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Re-draw pins whenever the filtered set changes, and frame them
  useEffect(() => {
    const map = mapRef.current!;
    markersRef.current.forEach((m) => m.remove());
    markersRef.current.clear();

    const pinned = locations.filter((l) => l.lat !== undefined && l.lng !== undefined);
    for (const loc of pinned) {
      const marker = L.circleMarker([loc.lat!, loc.lng!], {
        radius: 8,
        color: '#0A0908',
        weight: 2,
        fillColor: BRAND_PIN_COLORS[loc.brandId],
        fillOpacity: 1,
      })
        .bindPopup(() => popupHtml(loc), { maxWidth: 280 })
        .bindTooltip(loc.name, { direction: 'top', offset: [0, -8] })
        .addTo(map);
      markersRef.current.set(loc.id, marker);
    }

    let retry: ReturnType<typeof setTimeout> | undefined;
    frameRef.current = () => {
      clearTimeout(retry);
      map.invalidateSize();
      if (map.getSize().x > 0) hasViewRef.current = true;
      if (map.getSize().x === 0) {
        // Not laid out yet (hidden tab, entrance animation): show the US and try again shortly
        if (!hasViewRef.current) map.setView([37.5, -96], 4);
        hasViewRef.current = true;
        retry = setTimeout(() => frameRef.current(), 250);
        return;
      }
      if (pinned.length === 1) {
        map.setView([pinned[0].lat!, pinned[0].lng!], 13);
      } else if (pinned.length > 1) {
        map.fitBounds(L.latLngBounds(pinned.map((l) => [l.lat!, l.lng!] as [number, number])), {
          padding: [40, 40],
          maxZoom: 12,
        });
      } else {
        map.setView([37.5, -96], 4);
      }
    };
    userMovedRef.current = false;
    frameRef.current();
    return () => clearTimeout(retry);
  }, [locations]);

  useEffect(() => {
    if (!focus) return;
    const marker = markersRef.current.get(focus.id);
    if (!marker) return;
    userMovedRef.current = true;
    mapRef.current!.flyTo(marker.getLatLng(), 14, { duration: 0.8 });
    marker.openPopup();
  }, [focus]);

  return <div ref={containerRef} className="w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#CBB48B]/25 z-0 bg-[#0A0908]" />;
};
