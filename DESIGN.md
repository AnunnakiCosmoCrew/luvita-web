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
2. **One sentence** (the `h1`), at most two lines at desktop width, about 34 px.
   It says what the company is. It is not a slogan block and has no button.
3. **The board.** Three columns under one 2 px rule, separated by 1 px vertical
   rules, with no boxes, shadows or rounded panels. Each column, top to bottom:
   - the product's drawn mark (40 px) and its name;
   - the state line, in the mono face, muted;
   - the problem sentence, about 20 px, medium weight;
   - a real screen, 16:10, cropped from the top left;
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
5. **Company.** The closing line, one paragraph, and the identity block: short
   company name, founding year, contact address, link to registry details.
6. **Footer.** As today (legal block, privacy, company details).

Order of products: Umay, Nesili, CosmoCrew. If Umay still has no real screen
when the rebuild ships, Nesili goes first and Umay shows its mark large in
place of a screen. An empty frame never ships.

## 5. How a product is shown

- **Real screens only.** No stock pictures, no generated pictures, no device
  frames drawn around a screen, no invented interface.
- **One drawn mark per product**, all in the same line weight, drawn from the
  simplest true form of what the product does: two voices taking turns (Umay),
  a line of text with two parts covered (Nesili), a day as a circle cut into
  slices (CosmoCrew). Marks are inline SVG using `currentColor`, shown in the
  accent colour. They identify the product; they never replace the screen.
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
  `deploy.yml`, next to the push trigger), so a date can never outlive the
  limit by more than a day. The build reads "today" from one place, so a test
  can fix it. The workflow change is a founder-tier change (`security`).
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
photo. The line that carries the company: "Made, tested and kept running by the
same workshop." Never "studio". "Laboratory" is retired for new copy.

The site does not describe how Luvita builds. AI is named only where it is what
a product is or does (Umay is an AI agent; Nesili protects data sent to AI).
No copy claims "hand-made", "no AI" or a team that does not exist.

Read `project-templates/brand/BRAND.md` live before changing copy. For Nesili,
read `Pelerin-docs/CLAUDE.md` first: no sentence may state or imply that no
personal data crosses a border or that the customer's KVKK Article 9 duties go
away. Never write ® next to Nesili. No speed figures. Examples use invented
data only.

### Home page copy

English is settled wording from the constitution and round 2. **Turkish is a
draft for the founder to correct**; "atölye" is the proposed word for
"workshop".

| Place | English | Turkish (draft) |
| --- | --- | --- |
| Heading | Three products, made, tested and kept running by the same workshop. | Üç ürün. Hepsini aynı atölye yapıyor, sınıyor ve çalışır durumda tutuyor. |
| Umay, problem | Your callers wait for a person, because the bot cannot finish the job. | Arayan müşteriniz yine bir insanı bekliyor, çünkü bot işi bitiremiyor. |
| Umay, state | In development · demo on request | Geliştirme aşamasında · demo istenebilir |
| Umay, description | Umay is in development: AI customer service built to be ready on day one. It is being built to answer every call, speak natural Turkish, and resolve what your current bot hands to a person. When you need it changed, you will call us. It will never pretend to be a person. A demo is available on request. | Umay geliştirme aşamasında: ilk günden hazır olacak biçimde tasarlanan yapay zekâ müşteri hizmeti. Her çağrıyı yanıtlamak, doğal Türkçe konuşmak ve bugünkü botunuzun insana devrettiği işi kendisi sonuçlandırmak üzere geliştiriliyor. Bir şeyin değişmesi gerektiğinde bizi arayacaksınız. Kendini asla insan gibi tanıtmayacak. Demo talep edebilirsiniz. |
| Umay, rows heading | What the service will include | Hizmet neleri kapsayacak |
| Umay, fixes | Always free. If Umay gets something wrong, we will find the cause and correct it. | Her zaman ücretsiz. Umay bir şeyi yanlış yaparsa nedenini bulup düzelteceğiz. |
| Umay, changes | Changes to what Umay already handles will be included in your plan, up to its limit. | Umay'ın yürüttüğü işlerdeki değişiklikler, planınızın sınırı içinde ücrete dahil olacak. |
| Umay, new work | A new department, language or system connection will be priced separately, before we start. | Yeni bir bölüm, dil ya da sistem bağlantısı ayrıca fiyatlandırılacak; fiyatı işe başlamadan önce söyleyeceğiz. |
| Umay, link | Ask for a demo | Demo isteyin |
| Nesili, problem | You want to use AI on customer data, and you were told no. | Müşteri verisiyle yapay zekâ kullanmak istediniz, size "olmaz" dendi. |
| Nesili, state | In pilot on Windows | Windows'ta pilot aşamasında |
| Nesili, description | Nesili runs inside your company and replaces names, ID numbers, IBANs and addresses in Turkish text before it reaches the AI model. The raw personal identifiers stay with you. Your legal duties for sending data abroad remain, and Nesili makes them easier to meet. | Nesili şirketinizin içinde çalışır; Türkçe metindeki adları, kimlik numaralarını, IBAN'ları ve adresleri, metin yapay zekâ modeline ulaşmadan önce değiştirir. Ham kişisel bilgiler sizde kalır. Yurt dışına veri aktarımına ilişkin yasal yükümlülükleriniz sürer; Nesili bunları yerine getirmeyi kolaylaştırır. |
| Nesili, example labels | What your colleague writes / What the AI model receives | Çalışanınızın yazdığı / Yapay zekâ modeline giden |
| Nesili, link | Start a trial | Denemeye başlayın |
| CosmoCrew, problem | You open your phone without deciding to, and the day is gone. | Telefonu, karar vermeden elinize alıyorsunuz; gün de öyle geçip gidiyor. |
| CosmoCrew, state | Three apps live | Üç uygulama yayında |
| CosmoCrew, description | Our apps for people working on themselves. | Kendileri üzerinde çalışan insanlar için uygulamalarımız. |
| CosmoCrew, link | Visit cosmocrew.dev | cosmocrew.dev'e gidin |
| Closing line | Software for the next decade. | Sıradaki on yıl için yazılım. |
| Closing paragraph | We make a few products and stay with them. Each one is built for a problem someone has today, and each one is still looked after long after the day it ships. | Az sayıda ürün yapıyor ve onların başında kalıyoruz. Her biri, birinin bugün yaşadığı bir sorun için yapıldı; her birine, yayınlandığı günden çok sonra da bakılıyor. |

Notes on this copy:

- The Nesili description here says "inside your company"; the live card says
  "on your own computer", which is what the pilot does today. Use whichever is
  true of the product on the day the page ships.
- The Nesili card and the plans page are held together (luvita-web#39). The
  rebuild does not release either.
- "priced separately, before we start" is proposed wording; the constitution
  says only that new work is priced separately.
- **Umay is written as a product in development**, in the description itself
  and in the rows, not only in the state line: the hard rule on truthful
  product status asks for that, and this page is read by banks. When Umay
  ships, the copy moves to the present tense together with its `status` in
  `src/data/products.ts`, in the same change.
- No sentence says that we use the apps ourselves; the founder dropped that
  claim (LW-67).
- `BRAND.md` says a heading needs a verb, with one approved exception. The
  heading here has participles only ("made, tested and kept running"). Either
  `BRAND.md` records it as the new approved line when it is brought in line
  with the constitution, or the heading is reworded. Founder's call.

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
2. A real Umay screen (a recorded call).
3. The Turkish copy, to be corrected by the founder.
4. Where the release dates come from for each product, and who updates them;
   and the founder's approval of the scheduled daily build.
5. (Closed, LW-67: the "made by people who use them every day" claim is dropped.)
6. The heading and the "a heading needs a verb" rule in `BRAND.md`.
7. The other pages (products, plans, about, contact) follow these rules; their
   structure is not designed yet.
