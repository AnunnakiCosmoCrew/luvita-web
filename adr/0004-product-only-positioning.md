# ADR 0004: Product-only positioning — no services surface on this site

- Status: accepted
- Date: 2026-09-03

## Context

The site presented a Services page: a four-item menu whose cards were
"Custom Software Development", "System Integration", "Technical Consulting"
and SLA-backed support, followed by a Discovery → Design → Development →
Delivery engagement process and a "Let's talk about your project" call to
action. The homepage carried a matching services band ("The same practice,
for your project"), and the same framing ran through the hero, the contact
page, the footer tagline and the meta descriptions.

On 2026-09-03 the Google for Startups Cloud Program's initial review
classified Luvita as a "consultancy/agency/services company — not eligible."
That is a fair reading of what the site said: to a reviewer, a service menu
with a consulting card is indistinguishable from a dev shop.

The company has no consultancy work and none is planned. The services surface
described an option, not a business.

## Decision

This site presents Luvita **exclusively as a product company**. The Services
page is removed, along with its navigation and footer entries, the homepage
services band, and the `ServiceCard` component and `services` data that fed
them. Every remaining surface that solicited client projects — the hero, the
homepage call-to-action band, the contact page heading, the footer tagline,
the about page and the meta descriptions — is rewritten in product terms.

The word "studio" is retired as a self-description; it reads as an agency or
design shop. Luvita is a *yazılım ürünleri şirketi* / *software product
company*.

Removing the page removes the **solicitation**, not the capability. A walk-in
turnkey project can still be accepted on its merits. It is simply never
advertised here.

This supersedes the services-surface aspect of
`luvita-docs/strategy/2026-08-positioning-memo.md`, whose scope table said
"Services | Keep, reframe" and whose rollout line called for "services
reframed turnkey with the new hero". It does not touch adr/0003, which is
about solar content and stands unchanged.

## Consequences

- The old URLs `/en/services/` and `/tr/hizmetler/` redirect to the products
  pages via the `redirects` key in `astro.config.mjs`, so links carried in the
  Google appeal (or anywhere else) do not 404. In `output: 'static'` these are
  no-JS meta-refresh stubs, which keeps the zero-client-JS rule intact, and
  `@astrojs/sitemap` drops redirect routes automatically.
- The services-band copy patterns are retired: no service menu, no engagement
  process, no "have a project in mind?" call to action. Recorded as a hard
  rule in CLAUDE.md.
- The site no longer names a second revenue line. If turnkey work later
  becomes a business the company actually wants to grow, that is a new
  decision and a new ADR — not a quiet re-addition of the page.
- The appeal to Google is sent after this deploys, so the re-reviewer sees the
  product-only site. Sending it is the founder's step and outside this repo.
