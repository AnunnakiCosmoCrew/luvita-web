# ADR 0003: Software-only positioning — no GES/solar content on this site

- Status: accepted
- Date: 2026-08-09

## Context

The company's registered scope covers both software and renewable-energy
(GES/rooftop-solar) activities, and its trade name contains "Enerji". The
solar business is local and consumer-facing (Bodrum peninsula, separate
working brand "Luvi Energy"); the software business targets banks and
enterprise clients. Presenting both on one corporate site would read as an
unfocused generalist and hurt enterprise credibility.

## Decision

This site presents Luvita **exclusively as a software company**. No solar
services, references, imagery, or copy anywhere in the body. The full trade
name (which contains "Enerji") appears only in the footer legal-identity
block, where Turkish practice requires the registered name — trade names are
customarily broad and this is unremarkable. The solar business gets its own
separate web presence under its own brand.

## Consequences

- Enterprise visitors see a focused software house; the legal footer stays
  compliant.
- A future Luvi Energy site must NOT link here as "our software division" in
  a way that back-links this site into the solar brand; keep the vitrines
  separate.
- Guard in place: a grep check (`GES|güneş|solar` outside `site.ts` legal
  constants) belongs in the pre-push routine; documented in CLAUDE.md as a
  hard rule.

## Update 2026-08-09 — Luvi Engine listed as a software product

The estimation-engine app is listed among our products as **"Luvi Engine"**,
described as an offline-first field survey and quoting app "for teams that
install energy systems". This stays inside the decision above:

- The product name used is the engine's, not the consumer solar brand
  ("Luvi Energy" never appears on this site).
- The sector is named in the third person — the site never says Luvita
  performs installations. What it claims is true: we build the software.
- No solar hardware, panel, or installation-service copy anywhere.

## Update 2026-09-24 — the trade name is legal identity, not a footer-only string

The original decision said the full trade name appears "only in the footer
legal-identity block". The constraint it was really drawing is about
*function*, not location: the name that contains "Enerji" may identify the
legal entity, and may never position the company.

Two surfaces added in adr/0005 need it under that test, and now carry it:

- the root entry page's identity block — the same legal block the footer
  shows, on the one URL that has to answer for itself;
- `legalName` in the Organization JSON-LD, whose entire purpose is to let a
  verifier match the site against a registered company. It renders on every
  page, and is machine-readable data, not display copy.

What stays out, unchanged: headlines, leads, product and service copy, and
`<meta name="description">` — the snippet a search result shows is how the
company reads at a glance, which is exactly what this ADR protects. The short
brand "Luvita" carries all of those.

No solar services, imagery or copy anywhere; that part of the decision is
untouched.

