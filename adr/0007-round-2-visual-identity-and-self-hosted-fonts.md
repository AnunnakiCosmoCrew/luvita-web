# ADR 0007: Round 2 visual identity, and self-hosted fonts instead of system fonts only

- Status: accepted (applies to the rebuild; the live site is unchanged until it lands)
- Date: 2026-11-16

## Context

The founder judged the live site generic: near-monochrome, a serif system
heading over cards, the same skeleton as its sibling sites. The company
constitution (Brand identity, locked 2026-11-16) sets what the site must do
instead: products first, each named by its problem; proof shown, not claimed;
nothing that could belong to another company.

Two rounds of mock-ups followed. Before the second, the choices were checked
against published research and established usability practice. The findings
that shaped the decision:

- Simple pages with the structure visitors expect are trusted more at first
  sight than unusual ones, so the distinctive part belongs in content and in a
  few owned marks, not in page structure.
- Most attention stays on the first screen.
- Visible recency raises credibility, and visible staleness lowers it by about
  as much.
- Shapes identify a brand far better than colour does.
- Typeface choice cannot be decided on reading speed among well-made faces.

Two existing rules were in the way. "System fonts only" makes the type differ
on every device, so it can never be the company's own. And the constitution
first asked for a theme switch, which needs a script that the site promises
not to ship.

## Decision

1. The rebuild follows `DESIGN.md` ("round 2"): all three products on the first
   screen, real screens as the picture, one drawn mark per product, a state and
   date line beside each product name, white and moss green, light by default
   and dark by system setting.
2. **Fonts are self-hosted.** The rule "no web fonts" becomes "self-hosted
   fonts only": font files live in the repository and are served by the site.
   No request leaves for another host, so the privacy pages stay true.
3. **No theme switch.** Both themes ship and follow `prefers-color-scheme`. The
   zero-script rule keeps its single exception (adr/0006).
4. The address rule (LW-17) is unchanged: no address or city in visible copy,
   although a physical address is a known credibility signal. The registry
   details on the root page carry that weight.

## Consequences

- The site gains font files to maintain (subsetting, licence, fallbacks) and a
  few tens of kilobytes on first load.
- The date lines need a data source that releases update; a hand-typed date is
  not allowed, and a date older than 120 days is hidden.
- The accent changes from teal to moss, so every token in `tokens.css` is
  revisited in the rebuild.
- The final typeface and a drawn wordmark are still open; the family must be a
  single token so it can change without a redesign.
- A visitor cannot override the theme on the page. Accepted.

## Alternatives considered

- **Keep system fonts.** No new files, but the type cannot be owned and differs
  per device. Rejected by the founder.
- **A font CDN.** Breaks the no-external-request promise. Rejected.
- **A theme switch with a small script and stored preference.** Needs a privacy
  copy change and a second script exception for little gain. Rejected by the
  founder.
- **An unusual page structure** (a list with a stage, or the whole site as one
  table). Hides two of three products and reads as less trustworthy at first
  sight. Rejected on the evidence.
