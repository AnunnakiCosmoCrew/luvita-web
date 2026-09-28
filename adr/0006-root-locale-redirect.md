# ADR 0006: The root forwards JS browsers to their language, over a page that still answers for itself

- Status: accepted
- Date: 2026-09-28

## Context

adr/0005 made `https://luvita.tr/` a real page — the company's identity card
in both languages — instead of a redirect stub, so that a bank, a crawler or a
credit-programme verifier fetching the bare domain gets the company's name,
contact and JSON-LD rather than a blank "redirecting…" body. Choosing a
language was demoted from an automatic bounce to a visible click on one of two
entry cards.

For a human visitor that extra click is friction the founder did not want: a
Turkish visitor should land on `/tr/` and everyone else on `/en/` without
picking a language by hand. But the site also carries a hard "zero client-side
JS, no tracking, no external requests" rule, and true IP-based geo needs edge
compute the stack does not have (static GitHub Pages behind Cloudflare with the
proxy off, grey-cloud, so Pages can hold its own TLS). The two ways to
auto-route both have a cost: a Cloudflare edge redirect means turning the proxy
on and hands crawlers a 302 instead of content, softening adr/0005; a
client-side script breaks the zero-JS rule.

## Decision

The root keeps the adr/0005 identity card as the HTML the server sends, and
adds **one** inline script that forwards JS-capable browsers to their language:
`navigator.languages` starting with `tr` → `/tr/`, everything else → `/en/`,
via `location.replace` so no history entry is left (the back button does not
trap the visitor on a bouncing root).

This is the single sanctioned exception to the site's zero-JS rule. The script
sets no cookie, makes no external request and loads no library, so the privacy
promise on the KVKK/privacy pages ("no cookies, no tracking") stays true. It is
progressive enhancement: a client with JS disabled, or a crawler or verifier
that fetches the URL without running scripts, never executes it and still
receives the full identity card and the `Organization` JSON-LD. adr/0005's
verification guarantee therefore holds by construction — the served bytes are
unchanged; only a scripted browser acts on them.

The routing is by **browser language**, not IP geography. A Turkish speaker
abroad still gets `/tr/`; a foreign-language browser inside Turkey gets `/en/`.
This is the standard, privacy-preserving signal for a bilingual site and the
only one available without edge compute or an IP lookup.

The redirect targets come from `localizedPath('tr')` / `localizedPath('en')`
in the page frontmatter and are passed into the script with Astro's
`define:vars`, so they stay base-aware and there is no hardcoded `/tr/` or
`/en/` string in the script.

## Consequences

- A visitor with JavaScript reaches their language automatically; the two entry
  cards remain as the visible, no-JS fallback and for anyone who wants the other
  language from the root.
- The zero-JS rule now has exactly one exception, the root redirect, documented
  here and in the repo `CLAUDE.md`. Every other page stays zero-JS; a build that
  emits a `<script>` on any other page is a regression.
- adr/0005 is amended, not superseded: the root still serves its identity card
  and JSON-LD, and remains its own canonical with `hreflang="x-default"`.
- Language, not geography, drives the choice — accepted as the price of staying
  on the static stack. If true geo is ever wanted, it moves to a Cloudflare
  redirect rule (proxy on, TLS in Full mode), which is an infrastructure change,
  not a code one, and would re-open the adr/0005 crawler question.

## Related

This ADR ships with LW-17, which also removed the city from all visible copy
(root eyebrow and identity block, KVKK/privacy "data controller" line). The
city is retained only in the JSON-LD `addressLocality` for verification; see
`LOCATION` in `src/lib/site.ts` and adr/0005.
