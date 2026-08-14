# Positioning memo: what is Luvita, and what does the site say?

- Type: internal decision memo (not an ADR — company positioning, not architecture)
- Date: 2026-08-14
- Status: proposed

## Summary

Four decisions, options with trade-offs, and a recommendation for each. The
hero-copy problem is Decision 2 — but it can't be answered before Decision 1,
because a hero is just the identity compressed into one sentence.

**The actual problem, named.** The current hero — "Dependable software for
enterprise systems" — describes the company Luvita wants to become, not the
company it verifiably is. It speaks to banks, the one audience that audits
its vendors, while the company's real, checkable assets today are shipped
products and the founder's engineering background. The site is selling the
aspiration and hiding the evidence. Every downstream question ("what do we
put on the website?") is this one question in disguise: **do we present
Luvita as an enterprise services house, or as a product-led software studio
that also takes client work?**

**Recommendation in one line:** product-led studio identity, enterprise-grade
practice as the differentiator, services offered — not begged for — and a
hero that only claims what a stranger can verify in two clicks.

## Decision 1 — What business is Luvita in?

Revenue focus is genuinely undecided, so the honest frame is: which identity
keeps the most doors open *while being true today*? Reality check first —
Luvita today is: one senior engineer with deep banking/enterprise experience,
two live App Store products, two serious platforms in development, zero
client engagements, zero references. Each option below is graded against
that reality.

### A — Enterprise & banking services house (status quo)

The current site. Custom dev, integration, SLA maintenance for banks and
enterprises.

- **For:** highest ticket size; matches the founder's actual expertise; the
  copy is already written.
- **Against:** claims an identity the company can't evidence yet — no
  references, no verifiable entity, no team. Banks buy from vendors they can
  audit; today's Luvita fails the audit not on skill but on paperwork and
  proof. Long sales cycles mean this identity produces *no feedback* for
  months. Worst case: the site reads as aspiration to exactly the audience
  most trained to detect it.

### B — Product-led software studio (recommended)

"We design, ship, and run software products — and we do the same for
clients." Products lead the story; services are the same practice, offered
outward. Banking-grade rigor becomes the *how*, not the *who for*.

- **For:** every claim is verifiable today (App Store links, GitHub, working
  software); serves all three possible revenue futures without rework — if
  enterprise services win, the products are the credibility; if products
  win, they were already the headline; if SME work appears, the story still
  fits. It is also the only identity that matches the CosmoCrew voice: indie
  and ambitious, not a supplicant vendor.
- **Against:** slightly weaker signal to a bank procurement officer than a
  pure services pitch — mitigated by keeping a hard-edged "enterprise
  engineering" section with the Java/Spring/GCP/banking-experience story
  intact.

### C — Regional / SME software partner

Software partner for Turkish SMEs, possibly with a Bodrum/Muğla angle.

- **For:** reachable buyers, short cycles, first revenue fastest; no
  reference barrier.
- **Against:** caps positioning and pricing; hard to walk upmarket later
  ("the Bodrum web-yazılım firm" is a sticky label); wastes the banking
  background, which is the rarest asset in the deck. Fine as quiet
  opportunistic revenue — wrong as the public identity.

### D — Product company, services as runway

Umay / Luvi Engine are the business; client work is unadvertised runway.

- **For:** cleanest story if a product takes off.
- **Against:** premature — Umay is Stage 0, Luvi Engine pre-launch; betting
  the public identity on unshipped products violates the company's own
  "banks read this page" truthfulness rule. Becomes the right identity
  *later*, if earned. Option B degrades gracefully into D; A does not.

**Why B:** it is the only option where nothing on the site needs to be taken
on faith, and the only one that doesn't require re-deciding when the revenue
question resolves itself. It converts the current site's smartest idea —
products as proof — from a supporting section into the actual identity.

## Decision 2 — What does the first sentence say?

Diagnosis of the current hero: "Kurumsal sistemler için güvenilir yazılım" is
generic (any of a thousand vendors could run it), unverifiable (dependable —
says who?), and aimed at the hardest audience. A hero should pass three
tests: **only claims a stranger can verify**, **couldn't be another
company's hero**, and **tells the visitor what to do next**. Drafts, in
preference order:

### Draft 1 — recommended: the practice as identity

> **TR:** Yazılımı tasarlıyor, yayınlıyor, yaşatıyoruz. Sizinkini de.
> **EN:** We design, ship, and run software. Yours too.

Lead TR: "İki ürünümüz App Store'da yayında, ikisi geliştirmede. Aynı uçtan
uca mühendislik pratiğini — bankacılık düzeyinde arka uçlardan mobil
uygulamalara — kendi işiniz için de sunuyoruz."

Lead EN: "Two of our products are live on the App Store; two more are in
development. We bring the same end-to-end engineering practice —
banking-grade backends to mobile — to your business."

CTAs: **Ürünlerimizi görün** (proof first) · **Projenizi konuşalım**
(conversion second). Note the CTA order flip: lead with the verifiable
thing.

### Draft 2 — the longevity claim (strongest single line, weaker proof)

> **TR:** Teslim tarihini aşan yazılımlar.
> **EN:** Software built to outlive its delivery date.

Distinctive and true to the craft/ownership principles, and it names the
real differentiator (lifecycle ownership). Weakness: it's a promise, not
evidence — best used as the *services page* hero under identity B, where the
home hero has already established proof.

### Draft 3 — if Decision 1 lands on A anyway: sharpened enterprise hero

> **TR:** Bankacılık titizliğinde yazılım — kapsamı, riski, takvimi açık.
> **EN:** Banking-rigor software. Scope, risk, and timeline in the open.

Keeps the enterprise aim but replaces the unverifiable "dependable" with the
transparency principle, which is at least a testable behavior. Still
inherits all of option A's proof problem.

## Decision 3 — The founder-led question

Two viable framings — the memo's call:

| Framing | What it buys | What it costs |
|---|---|---|
| Own it openly | Honesty as positioning: "founder-led, senior engineering only, no juniors on your project." Premium-boutique signal; pre-empts the discovery-call surprise; converts key-person risk into a promise of principal attention. Consistent with the truthfulness hard rule and the indie-ambitious voice. | Some enterprise buyers filter out sub-N-headcount vendors at the RFP stage regardless of framing. (They would discover it anyway — this cost is mostly unavoidable, only its timing changes.) |
| Neutral "we" | Doesn't volunteer the size question; standard practice; keeps RFP doors nominally open. | The About page already names one person and no team — the "we" is a single click from being decoded, and a bank that decodes it after the copy implied otherwise has learned something worse than headcount: that the site shades the truth. That's fatal to a brand whose stated principle is transparency. |

**Call: own it** — under identity B it's not even a confession, it's
coherent: a product studio run by its principal engineer is a normal,
respectable shape. Suggested About line: "Luvita is founder-led. Every
engagement is engineered by the principal — no handoffs, no juniors, no
account layer." Revisit only if a genuine bank RFP pipeline materializes and
demands otherwise; by then there may be a team to describe.

## Decision 4 — What goes on the site, and what stays off

Under identity B, the site restructures around proof → practice →
invitation:

| Section | Call | Notes |
|---|---|---|
| Home | Rework | Draft-1 hero; then products strip (live ones first, honest status chips as-is); then a compact "for your business" services band; closing CTA unchanged. |
| Products | Promote | Moves to first position in nav. Each product gets one line on what building it proved (real-time sync, offline-first, voice infra) — engineering evidence, not app marketing. |
| Services | Keep, reframe | Same four offerings; new frame: "the practice behind our products, for your systems." Draft-2 line as its hero. Add one sentence on engagement shape (fixed-scope / retainer / maintenance partnership) to pre-qualify inbound. |
| About | Rework | Founder-led statement (Decision 3), principles trio stays verbatim — it's the best copy on the site — plus one vision line: where this is headed (own platforms, starting with Umay). |
| Contact / legal | Keep | Structure fine. The blockers are off-site: `info@luvita.tr` mailbox, MERSİS/registry numbers when issued, a Luvita-branded (or no) GitHub link. |
| Solar / Luvi Energy | Stays off | ADR-0003 holds. Luvi Engine remains a product with the sector in third person. |
| Pricing, blog, careers, case studies | Stays off | No pricing (enterprise-normal), no empty blog, no careers page for a company of one. Exception: one deep engineering write-up of an own product is worth adding *when written* — it's the only proof-of-work asset that needs no client's permission. |

### Explicitly deferred — revisit triggers

- **Revenue focus (A vs C vs D):** don't force it now; identity B is the
  position that doesn't require the answer. Revisit when the first real
  engagement closes — its shape is the market's vote.
- **Umay on the homepage:** stays a status-chipped product card until a demo
  exists; the moment it does, it earns a hero moment of its own.
- **Brand architecture (Luvita / CosmoCrew / Luvi Energy):** separate
  decision, separate ADR — but the interim rule can be set today: no
  cross-brand surfaces on luvita.tr (email and GitHub link are the two
  current leaks).

## Next step if accepted

Sequencing: Decision 1 (identity B) → hero Draft 1 → About rewrite with
founder statement → nav/products promotion — one focused copy pass over the
existing pages, no new site build. The enterprise door stays open the whole
way; it just stops being the front door until Luvita can prove what walks
through it.
