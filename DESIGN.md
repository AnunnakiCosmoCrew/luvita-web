# Design brief for the luvita.tr rebuild

Status: decided by the founder on 2026-11-16 ("round 2"); built in LW-67. The
"Design brief" section of `CLAUDE.md` summarises it and `src/styles/tokens.css`
holds the values. The open points in section 12 still stand.

Sources: the company constitution (`luvita-docs/strategy/constitution.md`,
"Brand identity", private) and `adr/0007`. Where this file and the hard rules in
`CLAUDE.md` disagree, the hard rules win.

## 1. Who reads the page, and what they should believe

Two readers: a CEO with a problem, and a grant or programme evaluator. Both have
little time and often do not scroll.

After the first screen they should believe: **these people make a few serious
products with unusual care, and they will still be here in ten years.**

Three rules for the first screen:

1. Products first, each named by the problem it solves.
2. Proof is shown, not claimed: real screens, the true state of each product,
   and only numbers that were measured. Umay and Nesili are never shown as
   having customers they do not have.
3. Nothing on the screen could belong to any other company.

## 2. What stays from the current rules

All hard rules in `CLAUDE.md` stay, and they bind the design:

- No address and no city in visible copy. Company identity on the page is the
  short name and a link to the registry details on the root page.
- No script in the browser beyond the root redirect. So there is **no theme
  switch**: both themes ship and follow `prefers-color-scheme`.
- No request to any outside server: no font CDN, no embeds, no remote images.
- Product status is truthful and comes from `src/data/products.ts`.
- No services or consultancy surface. No solar content.
- Both locales for every page; links through `withBase()` / `localizedPath()`.
- WCAG 2.2 Level AA; responsive down to 390 px with no horizontal scroll.

## 3. What changes

| | Live site | Rebuild |
| --- | --- | --- |
| Accent | deep teal | moss green |
| Background | warm off-white | white (light), near-black green (dark) |
| Type | system stacks, serif headings | one self-hosted family, plus a mono for state lines |
| Home page | hero, then cards | all three products on the first screen, then one section per product |
| Proof of upkeep | none | a state and date line beside each product name |
| Product picture | icon tile | a real screen, plus one small drawn mark per product |

The font change replaces the "no web fonts" rule with "self-hosted fonts only"
(`adr/0007`).

## 4. Home page structure

The structure is the one a visitor expects from a company page. It is kept
simple on purpose: research on first impressions finds that familiar, simple
pages are trusted more at first sight than unusual ones. What is Luvita's own
sits in the content and in a few owned marks, not in an unusual layout.

In order:

1. **Header.** Wordmark left; Products, Company, Contact and the language link
   right. No button-styled link.
2. **No heading sentence** (founder, 2026-11-17). The page opens on the board.
   The `h1` is a label for screen readers and search only, never shown:
   "Luvita products" / "Luvita ürünleri". It is a label, not a headline, so
   the `BRAND.md` rule that a headline needs a verb does not apply to it.
3. **The board.** Three columns under one 2 px rule, separated by 1 px vertical
   rules, with no boxes, shadows or rounded panels. Each column, top to bottom:
   - the product's drawn mark (40 px) and its name. The name is a link to the
     product's own site (umayconnect.org, nesili.com, cosmocrew.dev; founder,
     2026-11-20, LW-86);
   - the state line, in the mono face, muted;
   - the product's line, about 20 px, medium weight. CosmoCrew has no line:
     the three app names stand there, each a link to its app;
   - a real screen, 16:10, cropped from the top left. A click on it, or
     anywhere in the column outside its other links, follows the name's link
     (one link per product, stretched over the column);
   - one text link.
   At 1280 × 720 the whole board is visible without scrolling. On a phone the
   columns stack; the three product names must still be reachable on the first
   screen (a plain list of three links above the first column is enough).
4. **One section per product**, all aligned the same way: name and state in a
   narrow left column, content on the right. No alternating left and right.
   - Umay: the description, then three plain rows on what the service includes.
   - Nesili: the description, then one Turkish sentence before and after
     masking, as static text.
   - CosmoCrew: one sentence, then the three apps as rows (icon, name, one
     line, state line), then the link to cosmocrew.dev.
5. **Company.** A heading and a paragraph in English; one sentence and no
   visible heading in Turkish. Nothing else: the company's legal details
   (trade name, contact address, MERSİS and trade registry numbers) are in the
   footer just below, so the block does not repeat them (founder, 2026-11-17).
6. **Footer.** As today (legal block, privacy, company details).

Order of products: Umay, Nesili, CosmoCrew. If Umay still has no real screen
when the rebuild ships, Nesili goes first and Umay shows its mark large in
place of a screen. An empty frame never ships. Since LW-82 (founder,
2026-11-17) Umay's frame shows the sample call from umayconnect.org, a test
call with fictional data labelled as such, so Umay is first again; a recorded
call replaces it when one exists (section 12, open point 2).

## 5. How a product is shown

- **Real screens only.** No stock pictures, no generated pictures, no device
  frames drawn around a screen, no invented interface. The one stand-in is a
  product's own sample that says on its face it uses fictional data: Umay's
  sample call from umayconnect.org (LW-82), until a recorded call exists.
- **One mark per product.** Nesili has a drawn mark from the simplest true
  form of what it does, a line of text with two parts covered, as inline SVG
  using `currentColor` in the accent colour. Umay and CosmoCrew show their
  brand marks instead (founder, 2026-11-17): Umay's icon "Two voices", filled
  in ink and moss (LW-80; it replaced a drawing of two speech bubbles), and
  CosmoCrew's raven "Glide", in CosmoCrew's own ink and lamp colours (LW-84;
  it replaced a circle cut into slices). Their shapes, colours and rules are in
  `luvita-docs/brand/README.md`. Marks identify the product; they never
  replace the screen.
- The philosophy behind the forms is never named or illustrated on the page.
- Images live in the repository and are served by the site. Every image has
  alt text that says what the screen shows.

## 6. Proof of upkeep: the state line

Format: `<state> · <where> · improved <month year>`, for example
"In pilot on Windows · improved Nov 2026" (Turkish: "güncellendi Kasım 2026").
The day is never shown; the full date stays in the data file and the
120-day rule is computed from it.

- The state comes from `src/data/products.ts`. The date comes from a small data
  file that the product's release process updates. Nobody types a date by hand.
- A date older than 120 days is not shown; the line then carries the state
  only. A stale date costs as much trust as a fresh one earns.
- **How the 120-day rule is enforced.** The site is static and ships no script,
  so the age of a date can only be judged when the site is built. The rebuild
  therefore adds a scheduled daily build and deploy (a `schedule` trigger in
  `deploy.yml`, next to the push trigger), so a date outlives the limit by at
  most a day while the schedule runs. The build reads "today" from one place,
  so a test can fix it. The workflow change is a founder-tier change
  (`security`).
- **GitHub pauses the schedule in a quiet repository.** In a public repository
  GitHub disables scheduled workflows after 60 days with no activity
  ([GitHub docs](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-workflow-runs/disabling-and-enabling-a-workflow)).
  The founder chose to document this rather than add a keep-alive job
  (2026-11-17). If it happens, a date can stay on the page past 120 days until
  the schedule is switched back on. To switch it on: the repository's
  **Actions** tab → **Deploy to GitHub Pages** in the left sidebar →
  **Enable workflow**, then **Run workflow** once so the page is rebuilt that
  day.
- A version number appears only for a product the reader can install.
- No log of releases on the home page. The reader values "alive and stable",
  not how often something ships.

## 7. Type

- One family for headings and text, one mono for state lines, dates and the
  masked example. Round 2 uses Bricolage Grotesque and IBM Plex Mono.
- **Open:** the final typeface. A free family can be used by anyone, so it
  cannot be Luvita's alone; a drawn wordmark carries more of the identity than
  the font does. Until that is settled, build so the family is one token.
- Font files are self-hosted WOFF2 in the repository, subset to Latin and Latin
  Extended, with `font-display: swap` and a system fallback of similar width.
  Confirm each font's licence in its own repository before adding the files.
- The privacy pages need no change for this. Checked on 2026-11-16: the English
  privacy page, the Turkish privacy page and the KVKK notice promise no cookies,
  no tracking scripts and no third-party embeds, and say nothing about fonts. A
  font file served by the site itself is not a third-party embed. Re-check the
  three pages in the rebuild.
- Mono is never used for running text; it reads more slowly.
- Turkish: every Turkish page sets `lang="tr"`. Before release, check words
  with "fi" (for example "fiyat") and upper-cased headings with İ and ı in the
  chosen family.
- Text lines stay between 55 and 75 characters. Text survives 200 % zoom.

## 8. Colour

Light is the default; dark follows the system. Neither theme is the lesser one.

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#FFFFFF` | `#101312` |
| Ink | `#111413` | `#ECEDE9` |
| Soft text | `#2B3230` | `#C9CEC9` |
| Muted text | `#4D5552` | `#9BA39F` |
| Rule | `#CFD4D1` | `#2A302D` |
| Accent | `#3C5A45` | `#9CC0A6` |
| Well (quiet surface) | `#F3F5F3` | `#181C1A` |

Measured contrast: ink on background 18.5:1 (light) and 15.9:1 (dark); accent
on background 7.7:1 and 9.4:1. Re-measure soft and muted text when the tokens
go into `tokens.css`; body text must reach 4.5:1.

One accent only. It appears on the marks and on link underlines. No gradients,
no glow, no tinted section backgrounds.

## 9. Voice and copy

"We" is the workshop. Plain, specific, calm. No founder story and no founder
photo. Never "studio". "Laboratory" is retired for new copy.

Rules the founder set while settling the copy (2026-11-17):

- **The two languages are written separately.** The Turkish is not a
  translation of the English, and they may say different things. A line that
  sounds translated is rewritten in Turkish.
- No sentence counts the products ("three products"); the number will change.
- No industry label: the page title is "Luvita" alone.
- No sentence criticises what a company does today.
- No sentence says that we use the apps ourselves.

The site does not describe how Luvita builds. AI is named only where it is what
a product is or does (Umay is an AI agent; Nesili protects data sent to AI).
No copy claims "hand-made", "no AI" or a team that does not exist.

Read `project-templates/brand/BRAND.md` live before changing copy. For Nesili,
read `Pelerin-docs/CLAUDE.md` first: no sentence may state or imply that no
personal data crosses a border or that the customer's KVKK Article 9 duties go
away. Never write ® next to Nesili. No speed figures. Examples use invented
data only.

### Home page copy

Settled by the founder, line by line, on 2026-11-17. The source of truth is
`src/data/home.ts` and `src/data/products.ts`; this table is a reading copy.

| Place | English | Turkish |
| --- | --- | --- |
| Page title | Luvita | Luvita |
| Search description | Luvita makes Umay, Nesili and the CosmoCrew apps, and stays with them for years. | Luvita; Umay'ı, Nesili'yi ve CosmoCrew uygulamalarını geliştiriyor ve yıllarca arkasında duruyor. |
| `h1` (not shown) | Luvita products | Luvita ürünleri |
| Nesili, state | In pilot on Windows and Mac | Windows ve Mac'te pilot aşamasında |
| Nesili, line | Protect your customers' details when your team uses AI. | Ekibiniz yapay zekâ kullanırken müşteri bilgilerini koruyun. |
| Nesili, link | Ask about the pilot | Pilot hakkında sorun |
| Nesili, description | Nesili runs on your own computer and masks TC Kimlik numbers, IBANs, phone numbers and addresses in Turkish text before it reaches the AI model. The raw personal identifiers stay with you. Your legal duties for sending data abroad remain, and Nesili makes them easier to meet. | Nesili kendi bilgisayarınızda çalışır; Türkçe metindeki TC Kimlik numaralarını, IBAN'ları, telefon numaralarını ve adresleri, metin yapay zekâ modeline ulaşmadan önce maskeler. Ham kimlik bilgileri bilgisayarınızda kalır. Yurt dışına veri aktarımına ilişkin yasal yükümlülükleriniz devam eder; Nesili bunları yerine getirmeyi kolaylaştırır. |
| Nesili, example labels | What your team writes / What the AI model receives | Ekibinizin yazdığı metin / Yapay zekâ modeline giden metin |
| Umay, state | In development · demo on request | Geliştirme aşamasında · demo istenebilir |
| Umay, line | Give every caller an answer on the first call, at any hour. | Her çağrı günün her saatinde, doğal bir Türkçeyle yanıtlansın. |
| Umay, link | Ask for a demo (to `umayconnect.org/en/#slotReq`) | Demo isteyin (to `umayconnect.org/#slotReq`) |
| Umay, description | Umay is in development: AI customer service built to be ready on day one. It is being built to answer every call, speak natural Turkish, and settle the caller's request in the same call. When you need it changed, you will call us. It will never pretend to be a person. You can try the demo in your own time. | Umay geliştirme aşamasında: ilk günden hazır olacak biçimde tasarlanan yapay zekâ müşteri hizmeti. Her çağrıyı yanıtlamak, doğal Türkçe konuşmak ve arayanın işini aynı görüşmede sonuçlandırmak üzere geliştiriliyor. Bir şeyin değişmesi gerektiğinde bizi arayacaksınız. Kendini hiçbir zaman insan olarak tanıtmayacak. Demoyu kendi zamanınızda deneyebilirsiniz. |
| Umay, rows heading | What the service will include | Hizmet neleri kapsayacak |
| Umay, fixes | Always free. If Umay gets something wrong, we will find the cause and correct it. | Her zaman ücretsiz. Umay bir şeyi yanlış yaparsa nedenini bulup düzelteceğiz. |
| Umay, changes | Changes to what Umay already handles will be included in your plan, up to its limit. | Umay'ın zaten yaptığı işlerdeki değişiklikler planınıza dahil olacak; üst sınırı planınız belirleyecek. |
| Umay, new work | A new department, language or system connection will be priced separately, before we start. | Yeni bir bölüm, dil ya da sistem bağlantısı ayrıca fiyatlandırılacak; fiyatı işe başlamadan önce söyleyeceğiz. |
| CosmoCrew, state | Three apps live | Üç uygulama yayında |
| CosmoCrew, line | (none: the three app names) | (none: the three app names) |
| CosmoCrew, link | Visit cosmocrew.dev | cosmocrew.dev'e gidin |
| CosmoCrew, description | Our apps for people working on themselves. | Kendini geliştirmek isteyenler için uygulamalarımız. |
| SliceFocus | A 24-hour radial planner with a focus timer. | Odak sayaçlı, 24 saatlik dairesel planlayıcı. |
| LexiPower | A vocabulary notebook with spaced repetition. | Aralıklı tekrarla çalışan kelime defteri. |
| With Handlebars | A fretboard explorer for guitar chords and scales. | Gitar perdelerinde akorları ve gamları gösteren uygulama. |
| Company, heading | Software built to run for decades. | (none) |
| Company, text | We make software for real problems, and we stay with it for years. Each product is built for a problem someone has today, and each one is still looked after long after the day it ships. | Ürünlerin her biri gerçek bir ihtiyaçtan doğdu; hepsinin yıllarca arkasındayız. |

Notes on this copy:

- Nesili's line is about safe use, not about being told no. The claim floor is
  unchanged: no promise that nothing leaks, and the description's last
  sentence stays in every version.
- The masked example uses the app's own label form (`[TCKN_6197]`,
  `[IBAN_3736]`, `[PHONE_5846]`), as in its screenshot on the board.
- The Nesili card and the plans page are held together (luvita-web#39). The
  rebuild does not release either.
- "priced separately, before we start" is proposed wording; the constitution
  says only that new work is priced separately.
- **Umay is written as a product in development**, in the description itself
  and in the rows, not only in the state line: the hard rule on truthful
  product status asks for that, and this page is read by banks. When Umay
  ships, the copy moves to the present tense together with its `status` in
  `src/data/products.ts`, in the same change.
- "Kendini geliştirmek" was on the `BRAND.md` list of Turkish words we do not
  use; the founder lifted that rule (project-templates#76).
- The root identity page (`/`) keeps its own title and wording: it is written
  for a verifier, not for a visitor (adr/0005).

### Company page

The page behind "About" / "Hakkında" in the header and the footer (LW-74; the
label changed from "Company" / "Şirket" in LW-78; wording approved by
the founder on 2026-11-17; the two languages are written separately). Source
of truth: `src/pages/en/about.astro` and `src/pages/tr/hakkimizda.astro`.

- **Heading:** the mission in plain words. No "Mission" or "Vision" labels.
  The Turkish heading says it the founder's way: products that solve real
  problems, built with technology that already exists, rather than inventing
  the technology. In Turkish a product is "geliştirilir", not "yapılır", and
  it is "supported with updates and cloud services", not "kept running".
- **Summary:** what Luvita makes, naming Umay (as in development), Nesili (as
  in pilot) and the CosmoCrew apps. Nesili's sentence may say it masks what a
  team does not want to send out, with examples (personal details, customer
  and file numbers); it never says "any" or "all" information, because the
  product masks the kinds it detects and the formats a team defines, and its
  own page says masking lowers the risk and does not remove it. It may say "makes software products" here; the home
  page does not.
- **Vision:** one sentence.
- **Founder:** named, in two factual sentences, on this page only. No photo,
  no story, no employer names, no "founder-led" and no "by the same hands".
  His name links to his LinkedIn profile, so a reader can verify the
  sentence (founder, 2026-11-17). It is the site's only link to a person.
  Every other page keeps speaking as "we".
- **Not on this page:** a list of technologies or skills (it reads as a
  services offer, adr/0004) and anything on how Luvita builds.
- Why this shape: visitors look for a plain summary at the top of a company
  page and for who is behind the company (research note
  `notes/luvita/2026-11-17-mission-and-vision-on-the-company-site.md`).

## 10. Template signs to avoid

A page fails review if it shows any of these. The first four are the defaults
that page generators are documented to fall back on; the rest are our own list.

Look:

- A default face as the brand type: Inter, Roboto, Arial, Open Sans, Lato, or
  the bare system stack. Also the fonts that became the fashionable way out of
  those.
- Purple or violet gradients, gradient text, glow, glass panels, floating blobs.
- A centred opening block with a slogan, a sub-line and two buttons.
- A grid of boxes, each with an icon, a heading and two lines.
- A small coloured or upper-cased label above a heading.
- Pill badges; rounded panels with soft shadows used as the default container.
- Picture and text rows that alternate left and right down the page.
- An arrow after link text; emoji used as icons.
- Elements that fade or slide in while scrolling.
- A strip of logos, a wall of testimonials, or counters that nobody measured.
- Stock or generated illustrations; device frames around screens.

Words:

- "Seamless", "empower", "unlock", "elevate", "cutting-edge", "next-generation",
  "revolutionary", "AI-powered" used as decoration.
- Three-beat slogans ("Fast. Simple. Secure.").
- "Get started" and "Learn more" as link text. A link says what happens.
- Any sentence that would be equally true on another company's site.

## 11. Before the rebuild is accepted

- `npm run check` and `npm run build` pass; the brand check passes.
- Zero failed requests, zero requests to another host, no `<script>` outside the
  root page.
- Keyboard walk of the home page in both locales; visible focus everywhere.
- Both themes checked at 390 px, 768 px and 1280 px.
- The date lines are filled from data. The 120-day rule is tested with a fixed
  "today": one build with a date 119 days old shows it, one with a date 121
  days old hides it.
- The scheduled daily build exists and has run at least once, so the rule also
  holds when nothing is merged for months.
- **The blind check.** Two or three people who do not know the company see the
  home page for five seconds, without the founder in the room, and answer:
  "What does this company do?", "Who do you think made this page, and what
  makes you say that?", "Which parts have you seen somewhere before?" If they
  name it a template, the page goes back to design.

## 12. Open points

1. The final typeface and a drawn wordmark.
2. A real Umay screen (a recorded call). Until then the board shows the
   sample call from umayconnect.org (LW-82).
3. (Closed, LW-67: the founder settled the copy in both languages.)
4. Where the release dates come from for each product, and who updates them;
   and the founder's approval of the scheduled daily build.
5. (Closed, LW-67: the "made by people who use them every day" claim is dropped.)
6. (Closed, LW-67: the page has no heading sentence.)
7. The other pages (products, plans, about, contact) follow these rules; their
   structure is not designed yet.
