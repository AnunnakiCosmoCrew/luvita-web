# ADR 0005: The root URL answers for itself — a real page, not a redirect stub

- Status: accepted
- Date: 2026-09-24

## Context

`https://luvita.tr/` was a 272-byte meta-refresh stub. It came from Astro's
i18n `redirectToDefaultLocale: true` (adr/0002): with `prefixDefaultLocale`
on, Astro generates the root route itself, emits `<meta http-equiv="refresh"
content="2;url=/tr/">` plus `<meta name="robots" content="noindex">`, and
silently ignores whatever `src/pages/index.astro` contains — that file had sat
there for a month rendering nothing.

A browser followed the refresh and nobody noticed. Everything else did not.
A `curl`, a view-source, a crawler that stops at the root, an application
reviewer pasting the domain into a verification tool — all of them saw a page
whose entire body was "Redirecting from `/` to `/tr/`": no company name, no
contact address, no structured data, and `noindex` on the one URL the company
hands out.

This is the failure that cost the Google for Startups Start round on
`umayconnect.org` on 2026-09-15 — "could not verify the company website",
against a site that loaded fine for a human. The fix there was to name the
company in the head, the hero, the About intro and the footer, and to add
JSON-LD. `LUVITA.md` had absorbed the same problem here as a workaround: hand
verifiers `https://luvita.tr/en/`, never the bare domain. A workaround that
depends on remembering it is not a fix, and the bare domain is what goes on
applications, invoices and business cards.

## Decision

The root URL serves a real page: the company's identity card, in both
languages. `redirectToDefaultLocale` is set to `false`, which is precisely
what lets `src/pages/index.astro` exist as a home page outside the locale
structure, and the page carries — in the HTML the server sends, not in
anything a script draws — the brand, the full registered trade name, what the
company does in Turkish and English, `contact@luvita.tr`, the city, the
MERSİS and trade-registry numbers, and `Organization` JSON-LD with
`legalName`, `url` and `contactPoint`.

Choosing a language stays, demoted from an automatic bounce to a visible
click: two entry cards to `/tr/` and `/en/`. The root is therefore its own
canonical and carries `hreflang="x-default"`, which is what x-default is for
— the URL that serves no single language. All three pages of the home cluster
(`/`, `/tr/`, `/en/`) name the same x-default, or the annotations contradict
each other and are ignored; `BaseHead` derives that from the page's own
`paths` pair rather than leaving it to each page.

The JSON-LD renders on **every** page, from `BaseHead`, because we do not get
to choose which URL a verifier lands on.

The street address stays off the page. The registered office is the founder's
home; `address` in the JSON-LD carries locality, region and country and no
`streetAddress`. City level is what verifies a company without publishing
where someone lives.

## Consequences

- `/` is indexable and in the sitemap as a real destination. It was already in
  the sitemap, pointing at a `noindex` stub.
- Turkish visitors reach the Turkish site in one extra click. That is the
  price of a root that answers for itself, and it is worth paying: the
  alternative failed the only readers who could not click.
- `LUVITA.md` → "Domains, DNS and email" no longer needs its "give them
  `/en/`, not the bare domain" note; the bare domain is now the best URL to
  hand out.
- This amends adr/0002, whose routing decision included
  `redirectToDefaultLocale: true` so that `/` redirects to `/tr/`. The rest of
  adr/0002 — parallel page trees, localized slugs, the `paths` pair driving
  hreflang and the language switcher — stands unchanged.
- The root page is the one page outside `BaseLayout`: it has no `Nav` and no
  shared `Footer`, because it belongs to neither locale. Its identity block
  therefore repeats what `Footer.astro` shows. Only the labels repeat — the
  values come from `src/lib/site.ts`, which stays the single source of truth.
- A new page still inherits everything through `BaseLayout`. Only the root is
  special, and it says so at the top of the file.
