---
name: Haki Productions
description: A black-and-paper creative agency site with one hot-pink accent and editorial-scale type.
colors:
  near-black-ink: "oklch(0.145 0.004 95)"
  soft-black: "oklch(0.19 0.005 95)"
  press-paper: "oklch(0.965 0.003 95)"
  pulp: "oklch(0.93 0.006 95)"
  hot-pink: "oklch(0.68 0.255 355)"
  pressed-pink: "oklch(0.53 0.22 355)"
  ash: "oklch(0.48 0.008 92)"
  warm-grey: "oklch(0.73 0.008 92)"
typography:
  display:
    fontFamily: "Anton, Arial Narrow, Impact, sans-serif"
    fontSize: "clamp(56px, 10.4vw, 158px)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.03em"
  accent:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1em"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.012em"
  body:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  body-small:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0em"
  note:
    fontFamily: "Space Mono, Courier New, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
  label:
    fontFamily: "Space Mono, Courier New, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.13em"
rounded:
  hairline: "2px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "56px"
  section: "clamp(72px, 9vw, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.hot-pink}"
    textColor: "{colors.near-black-ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.press-paper}"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-black-ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  nav-cta:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.press-paper}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.near-black-ink}"
    rounded: "{rounded.pill}"
    padding: "0 15px"
    height: "44px"
  filter-chip-active:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.press-paper}"
    rounded: "{rounded.pill}"
  work-card:
    backgroundColor: "{colors.soft-black}"
    textColor: "{colors.near-black-ink}"
    rounded: "{rounded.hairline}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.near-black-ink}"
    rounded: "0"
    padding: "12px 0"
---

# Design System: Haki Productions

## Overview

**Creative North Star: "The Press Proof"**

The site looks like a campaign proof pulled fresh off the press: neutral press paper, dense black ink, hard rules, and one fluorescent pink marker stroke. It is streetwear-adjacent without being a lookbook, editorial without being a magazine, and direct without looking like a SaaS template. Type does the heavy lifting; photography supplies the proof; ornament is limited to hairlines, a faint paper grain, and the occasional rotated sticker.

Surfaces alternate between press paper and near-black. Black is used for resolution, not decoration: the magazine band, the process section, the final CTA, and the footer. Pink is a signal — availability dots, the `MAG` badge, one primary button per view, a single italic word, the selection highlight. Most screens are 90% paper and ink.

The system is flat by default. Depth comes from tonal blocks, hairline borders, clipped image frames, and type scale. Nothing floats. Motion is similarly restrained: one authored entrance per page, origin-aware button fills, a 2px card lift, a slow image zoom. There are no scroll-triggered fade-ins and no staggered reveals.

**Key Characteristics:**
- Press paper and near-black ink as the base; hot pink as the only accent.
- Anton display type at poster scale, Instrument Serif italic for emphasis, Instrument Sans for reading, Space Mono for labels.
- Full-height first screens with a metadata rail at the top and the headline anchored low.
- Hairline rules, flat surfaces, clipped photography, a 3.5% paper-grain overlay.
- Honest labelling: in-house, client, in development. No borrowed proof.

## Colors

A two-tone print palette with a single fluorescent marker.

### Primary
- **Hot Pink** (`oklch(0.68 0.255 355)`): The only accent. Used for primary buttons, availability dots, the `MAG` badge, the italic emphasis word in a display headline, selection, and focus rings. It should read as a deliberate mark, never a background wash.
- **Pressed Pink** (`oklch(0.53 0.22 355)`): A darker pink for small text on paper where the bright pink would vibrate, such as inline links and capability numbers.

### Neutral
- **Near-Black Ink** (`oklch(0.145 0.004 95)`): Body text, dark sections, the footer, the nav CTA, and the default button fill.
- **Soft Black** (`oklch(0.19 0.005 95)`): Image grounds and cards inside dark sections. It keeps photography from sitting on a void.
- **Press Paper** (`oklch(0.965 0.003 95)`): The default page ground. Near-neutral with a trace of warmth, so it reads as stock rather than screen white, while keeping photography colour honest.
- **Pulp** (`oklch(0.93 0.006 95)`): Secondary paper for alternating sections and quiet cards.
- **Ash** (`oklch(0.48 0.008 92)`): Secondary text on paper.
- **Warm Grey** (`oklch(0.73 0.008 92)`): Secondary text on ink.

Borders are ink or paper at 16% and 34% alpha. There are no colored borders except the pink focus ring and the active pink marker.

### Named Rules
**The One Marker Rule.** Pink covers no more than roughly 10% of any screen. If two pink elements compete in one view, one of them is wrong.

**The No Grey on Pink Rule.** Pink surfaces use ink for text, never grey. Secondary text on pink is ink at reduced opacity.

## Typography

**Display Font:** Anton (with Arial Narrow, Impact)
**Body Font:** Instrument Sans (with Helvetica Neue, Arial)
**Accent Font:** Instrument Serif, italic only
**Label/Mono Font:** Space Mono (with Courier New)

**Character:** A condensed poster headline, a literary italic interruption, a neutral grotesque for reading, and a typewriter voice for metadata. The contrast is the identity: shout, whisper, explain, label.

### Hierarchy
- **Display** (400, `clamp(56px, 10.4vw, 158px)` on page heroes, `clamp(46px, 7.6vw, 118px)` in CTAs, line-height 0.82): Page titles, section statements, case names. Uppercase. Never sentence case.
- **Accent** (400 italic, inherited size, line-height 0.9): One word or short phrase inside a display headline. It softens the shout and carries the voice.
- **Headline** (400, `clamp(34px, 4.6vw, 64px)`, line-height 0.9): Form and sub-section headings.
- **Title** (400, 16–22px): Card names, offer names. Footer column labels in mono are separate.
- **Body** (400, 17px, line-height 1.55, max 62ch): Reading copy. Body text never runs wider than 68ch.
- **Small body** (400, 13–15px, line-height 1.4–1.5): Card descriptions, captions, dense supporting copy.
- **Label** (400, 11px minimum, letter-spacing 0.1–0.15em, uppercase): Metadata rails, tags, buttons, captions, status lines. 11px is the functional floor; 12px sentence-case mono is used for longer notes.

Display and section sizes are fluid per view rather than a fixed 8-step ramp: each heading role has one `clamp()` tuned to its container, and only the small end is fixed. That is deliberate for a poster-scale editorial site; new components should reuse an existing role before adding another size.

### Named Rules
**The One Italic Rule.** Instrument Serif italic appears once per headline, on the word that carries the attitude. It is not a second display face.

**The Rail Rule.** Metadata is set in Space Mono uppercase at the top or bottom edge of a section, separated by 5px pink dots or hairline rules. It is never mixed into body copy.

## Layout

The page grid is a 1440px maximum with fluid side padding (`clamp(18px, 3.6vw, 56px)`) and a 12-column work grid. Content is left-aligned to the same edge on every section; there are no centered marketing stacks except the link hub.

Page heroes are full-height (`100svh`) flex columns: a metadata rail at the top, then the headline block pushed to the bottom. The home hero adds a two-image collage on the right at desktop and a single 4:5 image below the copy on mobile. Section rhythm is `clamp(72px, 9vw, 140px)` vertically, with tighter `clamp(40px, 5vw, 64px)` blocks for related content.

Breakpoints: 1080px (tablet grids collapse), 900px (case and contact grids stack), 720px (mobile nav, single-column grids, 44px controls). The mobile page hero keeps the rail at the top and gives the headline block a fixed top margin instead of pushing it with `auto`, so short pages do not develop a dead gap.

Work uses a 12-column editorial grid: 7/5, 6/6, and 4/4/4 spans, collapsing to a single column below 720px. Cards are image-first, with metadata below the image and no captions on marketing pages.

## Elevation & Depth

The system is flat. There are no box shadows. Depth is conveyed by:
- tonal blocks (paper vs ink vs pulp),
- 1px hairline rules at 16–34% alpha,
- clipped image frames with a 2px image scale on hover,
- a fixed 3.5% grain overlay (`mix-blend-mode: multiply`) that keeps large paper fields from looking digital.

The only lifted element is a work card, which translates up 2px on hover. No element floats at rest.

### Named Rules
**The Flat Proof Rule.** A surface earns separation from a rule or a tonal block, never from a drop shadow.

## Shapes

Corners are nearly square: a 2px radius on cards and images, 0 on inputs and fields. Pills (`999px`) are reserved for buttons, filter chips, tags, and availability badges. The recurring silhouette is the full-bleed rectangle and the clipped photograph; circles appear only as 5–7px status dots and the round `MAG` sticker.

Borders are 1px. Strong borders use 34% alpha; default borders use 16%. Dashed borders mark external or in-development relationships (friends of the business, partner items). Images are clipped by their frame (`overflow: hidden`) and scaled inside it, never rounded into soft cards.

## Components

### Buttons
- **Shape:** full pill (999px), 46px min-height, 22px horizontal padding.
- **Primary:** hot pink ground, ink text, mono uppercase 11px, 0.13em tracking.
- **Hover / Focus:** an origin-aware ink fill expands from the pointer entry point (`--mx`/`--my`), text flips to paper. Focus-visible adds a 2px pink outline with 3px offset.
- **Ghost:** transparent ground, 1px ink border, ink text; hover fills ink and flips text to paper.
- **Small:** 42px min-height, 17px padding, used in the link hub and compact CTAs.

### Chips
- **Style:** transparent ground, 1px 34% ink border, pill radius, mono 11px uppercase.
- **State:** active fills ink with paper text; `aria-pressed` mirrors the state. Hover darkens the border. 44px min-height at all sizes.

### Cards / Containers
- **Corner Style:** 2px.
- **Background:** pulp or transparent on paper; soft black for image grounds; ink for the magazine band and CTA.
- **Shadow Strategy:** none. See Elevation & Depth.
- **Border:** 1px at 16% alpha, 34% on hover.
- **Internal Padding:** 18–34px depending on density; work cards use no padding around the image.

### Inputs / Fields
- **Style:** transparent ground, no side or top border, 1px bottom border at 34% alpha, 0 radius, 16px text.
- **Focus:** the bottom border turns hot pink; keyboard focus adds the global 2px pink outline. No glow.
- **Labels:** mono 11px uppercase above the field. Required fields are marked in the label, not with a red asterisk alone.

### Navigation
- **Style:** fixed header, 70px tall, paper ground with a blur and 90% opacity after scroll. Brand mark plus wordmark at left; mono 10px uppercase links at right; pill CTA last.
- **States:** links draw a 1px underline from left on hover and stay underlined with `aria-current="page"`.
- **Mobile:** 44px hamburger, full-screen ink panel, 44px nav rows, Escape closes, `aria-expanded` and the label swap between “Open menu” and “Close menu”.

### Metadata Rail
- **Style:** flex row of mono 11px uppercase items separated by 5px pink dots, or a top hairline rail with items spaced across the full width.
- **Behavior:** on mobile it becomes a 2×2 grid with no separator dots, so a wrapped item never starts with a stray dot.

### Work Card
- **Style:** image frame with 4:3 or 4:5 aspect ratio, ink ground, 2px card radius; name in Anton 22–30px, meta in mono 11px.
- **Hover:** the whole card lifts 2px and the image scales to 1.03 inside the clipped frame.
- **Transition:** 0.35s `cubic-bezier(0.22, 1, 0.36, 1)`.

## Do's and Don'ts

### Do:
- **Do** keep the first screen to one section. The hero is alone; the next section starts below the fold.
- **Do** put metadata in a rail at the top or bottom of a hero, not in a floating badge.
- **Do** use one italic accent word per display headline.
- **Do** label work honestly as in-house, client, or in development.
- **Do** keep body measure at 62–68ch and display tracking at or above -0.04em.
- **Do** make every interactive target at least 44px on touch, and give keyboard focus a visible pink ring.
- **Do** keep functional and metadata type at 11px or larger; 12px sentence-case mono for notes that carry a sentence.
- **Do** let photography sit in clipped rectangles with a 2px hover scale.
- **Do** use the magazine page's numbered captions as editorial furniture; they are part of the publication artifact.

### Don't:
- **Don't** add scroll-triggered fades, staggered reveals, or parallax.
- **Don't** put descriptive captions under marketing images. Credits belong in the footer or the magazine colophon.
- **Don't** use pink as a section background except the single toolbox band.
- **Don't** use grey text on pink, or grey text on ink below 4.5:1.
- **Don't** introduce drop shadows, glassmorphism, gradient blobs, or rounded 16px cards.
- **Don't** center-align marketing sections; keep the left edge.
- **Don't** use a second accent color.
- **Don't** claim client work, results, or testimonials that are not documented.
