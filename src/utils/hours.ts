// Weekly opening hours stored per weekday (0 = Sun ... 6 = Sat) in the restaurant's local time.
// A close time at or before the open time means the restaurant closes after midnight.

export type DayHours = { open: string; close: string } | null;
export type WeeklyHours = DayHours[];

const DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Build a week from readable ranges, e.g. weekly({ 'sun-thu': '11:00-22:00', 'fri-sat': '11:00-22:30' }).
 * Keys can be single days, ranges (wrapping allowed) or comma lists; days not listed are closed.
 */
export function weekly(spec: Record<string, string>): WeeklyHours {
  const week: WeeklyHours = Array(7).fill(null);
  for (const [days, range] of Object.entries(spec)) {
    const [open, close] = range.split('-');
    for (const part of days.split(',')) {
      const [from, to = from] = part.split('-').map((d) => DAY_KEYS.indexOf(d.trim()));
      if (from < 0 || to < 0) throw new Error(`Bad day key: ${part}`);
      for (let d = from; ; d = (d + 1) % 7) {
        week[d] = { open, close };
        if (d === to) break;
      }
    }
  }
  return week;
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const formatTime = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 && h < 24 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`;
};

/** Groups consecutive days with identical hours, starting the week on Monday. */
export function formatWeeklyHours(week: WeeklyHours): { days: string; hours: string }[] {
  const order = [1, 2, 3, 4, 5, 6, 0];
  const label = (d: DayHours) => (d ? `${formatTime(d.open)} – ${formatTime(d.close)}` : 'Closed');
  const rows: { days: string; hours: string }[] = [];
  let start = 0;
  for (let i = 1; i <= order.length; i++) {
    if (i < order.length && label(week[order[i]]) === label(week[order[start]])) continue;
    const first = DAY_LABELS[order[start]];
    const last = DAY_LABELS[order[i - 1]];
    rows.push({ days: first === last ? first : `${first}–${last}`, hours: label(week[order[start]]) });
    start = i;
  }
  return rows;
}

/** Current weekday and minutes-since-midnight in the given IANA time zone. */
function localNow(timeZone: string, now: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)!.value;
  return {
    day: DAY_LABELS.indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
}

export function isOpenNow(week: WeeklyHours, timeZone: string, now = new Date()): boolean {
  const { day, minutes } = localNow(timeZone, now);
  const today = week[day];
  if (today) {
    const open = toMinutes(today.open);
    const close = toMinutes(today.close);
    if (close > open ? minutes >= open && minutes < close : minutes >= open) return true;
  }
  // Still inside yesterday's after-midnight window?
  const yesterday = week[(day + 6) % 7];
  if (yesterday) {
    const open = toMinutes(yesterday.open);
    const close = toMinutes(yesterday.close);
    if (close <= open && minutes < close) return true;
  }
  return false;
}

const STATE_TIME_ZONES: Record<string, string> = {
  Texas: 'America/Chicago',
  Tennessee: 'America/Chicago',
  Nevada: 'America/Los_Angeles',
  California: 'America/Los_Angeles',
  'New York': 'America/New_York',
  'New Jersey': 'America/New_York',
  Virginia: 'America/New_York',
  Florida: 'America/New_York',
  Delaware: 'America/New_York',
  Connecticut: 'America/New_York',
};

export const timeZoneForState = (state: string) => STATE_TIME_ZONES[state] ?? 'America/Chicago';
