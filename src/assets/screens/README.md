# Product screens

Real screens only (`DESIGN.md` section 5). Each file is a capture of the running
product, copied into this repository; nothing here is drawn or generated.

| File | What it is | Source |
| --- | --- | --- |
| `nesili-split-view.jpg` | Nesili Desktop 0.4.5, split view, the held last frame of the landing-page loop. 1280 × 786, unmodified (SHA-256 starts `8f7bc042b7ec1b62`). | `AnunnakiCosmoCrew/Pelerin-web`, `src/landing/loop/nesili-split-screen-loop-poster.jpg`. Its `PROVENANCE.md` records the recording: every name, number, plate, IBAN and address is invented, and the pointer was drawn in afterwards. |
| `slicefocus-mac.png` | SliceFocus on a Mac, the day view. Cropped to the app's content (window shadow and title bar removed), 1013 × 633. | `AnunnakiCosmoCrew/slicefocus-web`, `screen-mac.png`. |
| `umay-sample-call.png` | The sample call on umayconnect.org (the `#callCard` figure), Turkish page, light theme, reduced motion so the whole call shows, captured at 2x in headless Chrome at a 985 px window and cropped inside the card's border. 1830 × 1138 (SHA-256 starts `2df44a37f648e1a7`). It is the site's written sample of what the demo does, labelled "test görüşmesi · kurgusal veri", **not a recording**; the caller's name, phone and plate are invented (the identity the site's demo page uses). Chosen by the founder on 2026-11-17 (LW-82). | `AnunnakiCosmoCrew/umay-docs`, `site/index.html` at 32f2a0f, published on umayconnect.org. |

A recorded Umay call is still the screen to aim for (`DESIGN.md` section 12,
open point 2); when one exists it replaces the sample call.

Replacing a screen: keep invented data only, keep the alt text in
`src/data/products.ts` true to the new picture, and update this table.
