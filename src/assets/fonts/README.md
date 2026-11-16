# Self-hosted fonts (adr/0007)

Served by the site itself; no font CDN and no request to another host.

| File | Family | Subset | Source |
| --- | --- | --- | --- |
| `bricolage-grotesque-latin-wght.woff2` | Bricolage Grotesque, variable weight 200–800 | Latin | `@fontsource-variable/bricolage-grotesque` 5.3.0 (Google Fonts build, unmodified) |
| `bricolage-grotesque-latin-ext-wght.woff2` | same | Latin Extended (Turkish ğ ı İ ş) | same |
| `ibm-plex-mono-latin-400.woff2` | IBM Plex Mono, 400 | Latin | `@fontsource/ibm-plex-mono` 5.3.0 (Google Fonts build, unmodified) |
| `ibm-plex-mono-latin-ext-400.woff2` | same | Latin Extended | same |

Licences, checked in each font's own repository on 2026-11-16:

- Bricolage Grotesque: SIL Open Font License 1.1,
  https://github.com/ateliertriay/bricolage (`OFL-bricolage-grotesque.txt`).
- IBM Plex Mono: SIL Open Font License 1.1 with Reserved Font Name "Plex",
  https://github.com/IBM/plex (`OFL-ibm-plex-mono.txt`). The files are
  redistributed unmodified; do not re-subset or edit them under the Plex name.

The `@font-face` rules are in `src/styles/fonts.css`. The family names are one
token each in `src/styles/tokens.css` (`--font-sans`, `--font-mono`): changing
the typeface means replacing these files, the `@font-face` rules and those two
tokens, nothing else.
