# Room 119 — Shopify theme

A Shopify Liquid theme ported from the React homepage in this repo
(`src/routes/index.tsx` + `src/styles.css`). The React app is untouched and
remains the visual reference. Scope of this theme: **homepage + header + footer**,
plus the minimal template stubs Shopify needs to validate and to make product
links / cart / search resolve.

## Preview locally

Requires the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)
(not installed in this environment — install it first):

```bash
# from repo root
cd shopify-theme
shopify theme dev --store your-store.myshopify.com
```

`shopify theme dev` starts a local server with hot reload against a development
store. Use `shopify theme check` in this folder to lint before pushing, and
`shopify theme push --unpublished` to upload as an unpublished theme.

## What you must set up in Shopify admin

The React version hardcoded its content (products/collections pointed at the old
Wix store). This theme is data-driven, so it needs real Shopify data to look
like the reference:

1. **Collections** — create at least these four and assign products, then pick
   them in the theme editor:
   - Monochrome
   - In a Blush State
   - Red Flags Only
   - All the Things (wall things)

   Wire them into: **Category grid** (4 category blocks), **Bestsellers**
   (collection picker — point at "In a Blush State"), and **Monochrome teaser**
   (large card + two side cards).

2. **Products** — the Bestsellers grid pulls from a collection. For the "tag"
   line under each product name, set either:
   - a `custom.tagline` product metafield (single line text), or
   - the product's **first tag** (used as fallback).

3. **The two background videos** — currently temporary Wix CDN URLs stored in
   `config/settings_data.json` (`hero_video_url`, `footer_video_url`). These are
   the **only** place any Wix URL appears in the theme, and they **must be
   re-hosted**:
   - Upload both videos to Shopify (Content → Files, or the section's **Video**
     picker).
   - Set them via the **Hero** and **Footer** sections' *Video* field (preferred),
     or paste new URLs into Theme settings → **Migration (temporary)**.
   - Then clear the Wix defaults.

4. **Navigation menu** — create/point a menu (default handle `main-menu`) under
   Online Store → Navigation. The header renders it; if absent it falls back to
   Shop / Bestsellers / Custom / Contact anchors. Optionally add a footer
   "extra links" menu (e.g. Shipping, Privacy).

5. **Theme settings** — set brand colors (defaults already match the OKLCH
   originals), Instagram/TikTok/email social links, favicon, and toggles for the
   grain overlay and Anton↔Archivo Black.

6. **Custom order CTA** — point its button at a Shopify **contact page**
   (e.g. `/pages/contact`).

## Wix assets still to migrate

Everything in the React app that lived on Wix must be moved into Shopify:

- **Two hero/footer videos** — `video.wixstatic.com/...` (see step 3 above).
- **Category & product imagery** — the React arrays referenced
  `static.wixstatic.com/...` PNGs. In Shopify these come from each
  collection's/product's own images (or per-block image overrides). Re-upload
  the artwork to the corresponding Shopify products/collections.
- **Product catalog & prices** — the React `BLUSH` array (RON 119.00 posters)
  and all category/product links pointed at `contactroom119.wixstudio.com`.
  Migrate the actual catalog (products, variants, RON prices, inventory) from
  Wix into Shopify. None of that data lives in this repo.

## Design fidelity notes

- **Design tokens** are ported verbatim from `src/styles.css` as OKLCH custom
  properties in `assets/room119.css`. The four merchant-editable colors (paper,
  ink, primary, accent) are also injected as **hex** from theme settings
  (the Customizer only emits hex); hex↔OKLCH equivalents are documented in
  comments in both `room119.css` and `settings_schema.json`.
- **`.dark` block intentionally NOT ported.** The React app defined a dark-mode
  palette; this store is **light-mode only**, so that block was dropped. If dark
  mode is wanted later it should be reintroduced via Shopify color scheme
  settings, not the React `.dark` class.
- **Tailwind was not carried over.** The React app used Tailwind v4 utility
  classes inline. This theme reproduces the same layout as hand-written semantic
  CSS using the exact token values (no Tailwind build step).
- **Keyframes** `marquee` (40s linear) and `float` (6s ease-in-out), plus the
  `.tape`, `.poster`, `.link-reveal`, `.sticker`, `.grainy` utilities and the
  `--grain` SVG texture, are ported verbatim.
- **Icons** are inlined lucide SVGs (`snippets/icon.liquid`), paths copied from
  lucide source: arrow-right, arrow-up-right, search, shopping-bag, user,
  sparkles, plus.
- **Emphasis words** in the hero lede / custom-order title (the marker-font
  words like *wear*, *hang*, *looking for?*) render from `<em>` — set them with
  italic in the richtext field, or edit the plain-text accent fields.

## Known gaps

- **No full product / collection / cart / search design.** Those templates are
  minimal functional **stubs** so the theme validates and links resolve — they
  are not styled to the same depth as the homepage (out of scope). Build them
  out in a later pass.
- **Marquee "No X" badges** in Bestsellers use the loop position (1..4). The
  React version had a bespoke 5/1/2/3 ordering tied to hardcoded data; that was
  not reproduced.
- **`shopify theme check` was not run** (CLI unavailable in the build
  environment). Run it before pushing. Manual validation performed: all JSON
  parses, every section referenced by `templates/index.json` exists, and no
  Liquid file contains a Wix URL.
```
