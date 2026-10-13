---
name: Modern Executive Portfolio
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#0d46d1'
  on-tertiary: '#ffffff'
  tertiary-container: '#3761ea'
  on-tertiary-container: '#efefff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b5'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  body-xl:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-tag:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.025em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses clarity, intellectual authority, and precise craftsmanship. Built for high-caliber professionals, executives, and specialists, the interface projects trust, forward-thinking execution, and understated elegance.

The visual style blends refined **Minimalism** with subtle **Tonal Depth**:
- **Pristine Surfaces:** Generous, calculated whitespace allows personal case studies and achievements to breathe without visual noise.
- **Controlled Accents:** Deep cobalt and vibrant azure highlights guide attention strictly to high-leverage interactive elements and critical milestones.
- **Architectural Structure:** Strict alignment, balanced rhythm, and restrained hairline borders produce a bespoke, editorial digital presence.

## Colors

The palette relies on stark, clean base layers paired with an intentional blue spectrum that signals credibility and precision.

### Application Rules
- **Canvas (`#FFFFFF`):** Base canvas for the primary content viewport, keeping reading fatigue minimal.
- **Surface Alternates (`#F8FAFC`, `#F1F5F9`):** Used for sectional shifts, subtle card containers, table headers, and structural backgrounds.
- **Brand Primary (`#2563EB`):** Applied to primary actions, interactive states, and prominent statistics.
- **Active / Deep Cobalt (`#1D4ED8`):** Restricted to pressed states, hero lead-ins, and high-emphasis anchors.
- **Electric Accent (`#0EA5E9`):** Reserved for technical badge accents, status indicators, and gradient touches on featured project cards.
- **Text & Structure Hierarchy:** 
  - Primary Content: `#0F172A` (Slate 900)
  - Secondary / Supporting: `#475569` (Slate 600)
  - Subtle Borders & Rules: `#E2E8F0` (Slate 200)

## Typography

The type scale combines the modern geometric energy of **Plus Jakarta Sans** for headlines with the neutral, hyper-legible utility of **Inter** for long-form narrative case studies and interface copy.

- **Display & Headlines:** Tightly tracked headings (-0.02em to -0.03em) ensure a cohesive, editorial magazine presence.
- **Body Text:** Ample line heights (1.6x) ensure effortless scannability across deep technical writeups and project summaries.
- **Labels & Tags:** Uppercase or medium-weighted small labels give structural rhythm to metadata, timelines, and technical skill tags.

## Layout & Spacing

A centralized 12-column responsive grid underpins all portfolio layouts, maxing out at a 1200px container width for optimum reading lines and balanced negative space.

- **Desktop (>= 1024px):** 12 columns, 24px (`1.5rem`) gutters, 48px (`3rem`) page margins. Section vertical spacing ranges from 80px to 120px to segment portfolio milestones distinctly.
- **Tablet (768px – 1023px):** 8 columns, 20px gutters, 32px margins. Two-column project showcase layouts collapse smoothly into 1-column modular blocks.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, 20px (`1.25rem`) outer margin. Hero elements and metadata badges stack vertically.

## Elevation & Depth

Visual hierarchy leverages diffuse ambient shadows combined with delicate slate outlines (`1px solid #E2E8F0`) to produce realistic, light-reactive layers without visual clutter.

- **Level 0 (Flat / Canvas):** Pure background surfaces (`#FFFFFF` or `#F8FAFC`). No shadow.
- **Level 1 (Card / Rest):** 
  - `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04);`
  - Paired with border: `1px solid #E2E8F0`
- **Level 2 (Hover / Floating Navigation):**
  - `box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03);`
  - Slightly elevated state with an ultra-subtle blue-tinted dispersion for featured project cards and the sticky header bar.
- **Level 3 (Modal / Active Overlay):**
  - `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04);`

## Shapes

The system relies on a consistent `0.5rem` (8px) base radius for structural containers and inputs, stepping up to `1rem` (16px) for project hero cards and modal containers. 

Interactive tags, badge pills, and quick-filter switches use a continuous pill radius (9999px) to establish visual contrast against the structured grid of project cards.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, 8px radius, medium weight. Hover shifts to `#1D4ED8` with a subtle translate-y of -1px.
- **Secondary:** Surface `#FFFFFF`, border `1px solid #E2E8F0`, text `#0F172A`. Hover transitions background to `#F8FAFC` and border to `#CBD5E1`.
- **Ghost / Link:** Transparent background, text `#2563EB`, inline padding only. Hover adds subtle underline or trailing arrow translation.

### Cards (Project & Experience)
- **Container:** Background `#FFFFFF`, border `1px solid #E2E8F0`, radius 16px (`rounded-lg`), padding 24px (`space-lg`).
- **Interactive States:** On hover, border shifts to `#93C5FD` (light blue) with an ambient Level 2 shadow. Includes media container with 8px inner radius.

### Badges & Chips
- **Category Badge:** Background `#EFF6FF`, border `1px solid #DBEAFE`, text `#1D4ED8`. Full pill radius, padding `4px 12px`, typography `label-tag`.
- **Status Indicator (e.g., "Available for hire"):** Background `#ECFDF5`, text `#047857`, featuring an animated pulsed indicator dot.

### Navigation Header
- **Floating Island or Fixed Border Bar:** Background `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(12px)`. Bottom border `1px solid #E2E8F0`. 
- **Links:** 14px medium, `#475569`, transitioning to `#2563EB` on active or hover states.

### Form Inputs & Contact Fields
- **Input / Textarea:** Height 44px, background `#F8FAFC`, border `1px solid #E2E8F0`, 8px radius. Active focus switches background to `#FFFFFF`, border to `#2563EB`, with a 3px ring of `rgba(37, 99, 235, 0.15)`.

### Timeline & Experience List
- **Vertical Track:** 2px solid `#E2E8F0` positioned left.
- **Nodes:** 12px circular anchors colored in `#2563EB` with `#FFFFFF` inner dot and outer ring glow for present roles.