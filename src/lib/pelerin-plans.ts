/**
 * Pelerin Desktop price list: the founder's WORKING prices, accepted
 * 2026-10-07 and not published (Pelerin-docs#251, luvita-web#39). Nothing here
 * is a published price until the founder confirms the figures in chat, the
 * pilot answers are in, and `PLANS_DRAFT` below is set to false.
 *
 * Source of the figures: Pelerin-docs `spikes/commercial/pricing-v1/FINDINGS.md`.
 * KDV is shown both ways on purpose (counsel has not said which the page needs).
 */
import type { Locale } from '../i18n';

/**
 * While true, the plans pages carry a visible "draft" banner and say so in
 * their <title>. Flip to false in the same PR that releases the page, and not
 * before the founder says so in chat.
 */
export const PLANS_DRAFT = true;

/** KDV rate used for the "including KDV" columns. */
export const VAT_RATE = 0.2;

export const TRIAL_DAYS = 14;
export const FREE_DAILY_CAP = 15;

export interface PlanRow {
  /** Yearly price, excluding KDV, in whole lira. */
  yearlyNet: number;
  /** Monthly price, excluding KDV, in whole lira (+25% on the yearly equivalent). */
  monthlyNet: number;
}

/** 1 user, up to 5 users, up to 20 users. */
export const PLAN_ROWS: readonly PlanRow[] = [
  { yearlyNet: 7200, monthlyNet: 750 },
  { yearlyNet: 21600, monthlyNet: 2250 },
  { yearlyNet: 72000, monthlyNet: 7500 },
];

/** ₺8.640 in Turkish, ₺8,640 in English. */
export function formatLira(amount: number, locale: Locale): string {
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, locale === 'tr' ? '.' : ',');
  return `₺${grouped}`;
}
