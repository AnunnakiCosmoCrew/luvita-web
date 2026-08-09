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
