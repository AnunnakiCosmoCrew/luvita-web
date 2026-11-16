/**
 * The 120-day rule (DESIGN.md sections 6 and 11): with a fixed "today", a
 * date 119 days old is shown and one 121 days old is hidden. Run: npm test.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_DATE_AGE_DAYS,
  buildToday,
  isDateShown,
  stateLine,
} from './state-line.ts';

const today = buildToday({ LUVITA_TODAY: '2026-11-16' });

test('the limit is 120 days', () => {
  assert.equal(MAX_DATE_AGE_DAYS, 120);
});

test('a date 119 days old is shown', () => {
  // 2026-07-20 + 119 days = 2026-11-16
  assert.equal(isDateShown('2026-07-20', today), true);
  assert.equal(
    stateLine('In pilot on Windows', '2026-07-20', today, 'en'),
    'In pilot on Windows · improved 20 Jul 2026'
  );
});

test('a date 121 days old is hidden and the line keeps the state only', () => {
  // 2026-07-18 + 121 days = 2026-11-16
  assert.equal(isDateShown('2026-07-18', today), false);
  assert.equal(
    stateLine('In pilot on Windows', '2026-07-18', today, 'en'),
    'In pilot on Windows'
  );
});

test('exactly 120 days is still shown', () => {
  assert.equal(isDateShown('2026-07-19', today), true);
});

test('a missing date shows the state only', () => {
  assert.equal(stateLine('Three apps live', null, today, 'en'), 'Three apps live');
});

test('a future date is not shown', () => {
  assert.equal(isDateShown('2026-11-17', today), false);
});

test('Turkish month names', () => {
  assert.equal(
    stateLine("Windows'ta pilot aşamasında", '2026-11-09', today, 'tr'),
    "Windows'ta pilot aşamasında · güncellendi 9 Kas 2026"
  );
});

test('"today" is read from LUVITA_TODAY, and a bad value fails the build', () => {
  assert.equal(buildToday({ LUVITA_TODAY: '2027-03-01' }).toISOString(), '2027-03-01T00:00:00.000Z');
  assert.throws(() => buildToday({ LUVITA_TODAY: '1 March 2027' }));
  assert.throws(() => buildToday({ LUVITA_TODAY: '2027-02-30' }));
});
