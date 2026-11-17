/**
 * The state line beside each product name (DESIGN.md section 6):
 * `<state> · <where> · improved <month year>`.
 *
 * The state comes from `src/data/products.ts`; the date comes from
 * `src/data/releases.json`, which each product's release pull request updates.
 * Nobody types a date into a page.
 *
 * A date older than MAX_DATE_AGE_DAYS is not shown: the line then carries the
 * state only, because a stale date costs as much trust as a fresh one earns.
 * The site is static and script-free, so the age is judged at build time
 * against one "today" (`buildToday()`), which a test or a build can fix with
 * the LUVITA_TODAY environment variable (YYYY-MM-DD).
 *
 * This module has no imports on purpose: `node --test` runs its tests without
 * the Astro toolchain (`npm test`).
 */

export const MAX_DATE_AGE_DAYS = 120;

export type StateLocale = 'tr' | 'en';

const DAY_MS = 24 * 60 * 60 * 1000;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Parse a YYYY-MM-DD date as a UTC calendar day; throws on anything else. */
export function parseIsoDate(value: string): Date {
  if (!ISO_DATE.test(value)) {
    throw new Error(`Expected a YYYY-MM-DD date, got "${value}"`);
  }
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) {
    throw new Error(`Not a calendar date: "${value}"`);
  }
  return date;
}

/** The calendar day of `date` in UTC, as a UTC-midnight Date. */
function utcDay(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
}

/**
 * The one "today" every build reads. LUVITA_TODAY=YYYY-MM-DD fixes it (tests,
 * reproducible builds); otherwise it is the day the build runs, in UTC.
 */
export function buildToday(
  env: Record<string, string | undefined> = process.env
): Date {
  const fixed = env.LUVITA_TODAY?.trim();
  return fixed ? parseIsoDate(fixed) : utcDay(new Date());
}

/** Whole days from `date` to `today`; negative when the date is in the future. */
export function ageInDays(date: Date, today: Date): number {
  return Math.round((utcDay(today).getTime() - utcDay(date).getTime()) / DAY_MS);
}

/**
 * True when a release date may be shown: not in the future and at most
 * MAX_DATE_AGE_DAYS old. A missing date is never shown.
 */
export function isDateShown(
  isoDate: string | null | undefined,
  today: Date
): boolean {
  if (!isoDate) return false;
  const age = ageInDays(parseIsoDate(isoDate), today);
  return age >= 0 && age <= MAX_DATE_AGE_DAYS;
}

const MONTHS: Record<StateLocale, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
};

const IMPROVED: Record<StateLocale, string> = {
  en: 'improved',
  tr: 'güncellendi',
};

/**
 * "Nov 2026" / "Kasım 2026". The page never shows the day (founder, LW-67);
 * the full date stays in the data and drives the 120-day rule.
 */
export function formatMonth(isoDate: string, locale: StateLocale): string {
  const d = parseIsoDate(isoDate);
  return `${MONTHS[locale][d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** The parts of a state line, ready to join with " · ". */
export function stateLineParts(
  state: string,
  isoDate: string | null | undefined,
  today: Date,
  locale: StateLocale
): string[] {
  const parts = [state];
  if (isoDate && isDateShown(isoDate, today)) {
    parts.push(`${IMPROVED[locale]} ${formatMonth(isoDate, locale)}`);
  }
  return parts;
}

/** The full state line as one string. */
export function stateLine(
  state: string,
  isoDate: string | null | undefined,
  today: Date,
  locale: StateLocale
): string {
  return stateLineParts(state, isoDate, today, locale).join(' · ');
}
