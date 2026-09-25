import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RestaurantLocation } from '../types';
import { formatWeeklyHours, isOpenNow, timeZoneForState } from '../utils/hours';

export const BRAND_PIN_COLORS: Record<string, string> = {
  umiya: '#B91C1C',
  'surfing-crab': '#0369A1',
  'hibachi-buffet': '#D97706',
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

  useEffect(() => {
    const map = L.map(containerRef.current!, { scrollWheelZoom: false, zoomControl: true });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      maxZoom: 19,
    }).addTo(map);
    mapRef.current = map;
    return () => {
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
        color: '#FFFFFF',
        weight: 2,
        fillColor: BRAND_PIN_COLORS[loc.brandId],
        fillOpacity: 1,
      })
        .bindPopup(() => popupHtml(loc), { maxWidth: 280 })
        .bindTooltip(loc.name, { direction: 'top', offset: [0, -8] })
        .addTo(map);
      markersRef.current.set(loc.id, marker);
    }

    if (pinned.length === 1) {
      map.setView([pinned[0].lat!, pinned[0].lng!], 13);
    } else if (pinned.length > 1) {
      map.fitBounds(L.latLngBounds(pinned.map((l) => [l.lat!, l.lng!] as [number, number])), { padding: [40, 40] });
    } else {
      map.setView([37.5, -96], 4);
    }
  }, [locations]);

  useEffect(() => {
    if (!focus) return;
    const marker = markersRef.current.get(focus.id);
    if (!marker) return;
    mapRef.current!.flyTo(marker.getLatLng(), 14, { duration: 0.8 });
    marker.openPopup();
  }, [focus]);

  return <div ref={containerRef} className="w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#E7E3DC] z-0" />;
};
