---
name: Corporate Precision
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system is engineered for high-stakes B2B environments where trust, clarity, and systematic efficiency are paramount. The aesthetic follows a **Corporate / Modern** philosophy, emphasizing a structured information architecture and a professional, "institutional-grade" visual language. 

The design narrative focuses on:
- **Professionalism:** A disciplined use of color and space to facilitate focused decision-making.
- **Reliability:** Predictable UI patterns that respond intuitively to user interaction.
- **Modernity:** A clean, high-clarity interface that feels contemporary without sacrificing formal authority.

## Colors
The palette is anchored by a deep corporate blue (`#0F172A`), providing a strong foundation of authority. Secondary and tertiary slates are used for systematic categorization and text hierarchies.

- **Primary:** Reserved for critical navigation, primary actions, and brand identification.
- **Accent:** A vibrant "Action Blue" (`#2563EB`) is used sparingly for interactive cues, links, and focus states to ensure high visibility against the deep primary tones.
- **Neutrals:** A "Cool Slate" scale provides a crisp, clinical background environment, preventing visual fatigue during long work sessions.
- **Semantic Colors:** Success, Warning, and Error colors should be desaturated to fit the professional tone (e.g., a muted emerald and a brick red).

## Typography
The typography uses **Plus Jakarta Sans** across all levels. This font provides a modern, slightly rounded geometry that softens the corporate aesthetic just enough to remain approachable while maintaining high legibility.

- **Headlines:** Use tighter letter spacing and SemiBold weights to create a strong visual anchor.
- **Body:** Set with generous line heights to ensure readability in data-heavy views.
- **Labels:** Utilize Medium and SemiBold weights at smaller sizes to ensure functional elements like tags and table headers are distinct from body copy.

## Layout & Spacing
The layout follows a disciplined **8px grid system** (with a 4px sub-grid for tight components). 

- **Grid:** A 12-column fluid grid for desktop with 24px gutters. On mobile, transition to a 4-column layout with 16px margins.
- **Density:** High-density layouts are preferred for dashboards. Use `16px` (md) for standard padding and `8px` (sm) for internal component spacing.
- **Alignment:** Consistent left-alignment is required for all data and text blocks to maintain a clean vertical rhythm.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** supplemented by very subtle, soft shadows. This creates a clear hierarchy without the visual clutter of heavy skueomorphism.

- **Level 0 (Background):** The neutral base layer.
- **Level 1 (Cards/Containers):** Raised via a subtle 1px border (`#E2E8F0`) or a very soft, diffused shadow (0px 4px 12px, 5% opacity black).
- **Level 2 (Overlays/Modals):** Floating elements use a more pronounced shadow (0px 12px 24px, 10% opacity black) to indicate high priority and immediate focus.
- **Interactions:** Hover states should slightly deepen the shadow or shift the background color to a "Surface-Low" tone.

## Shapes
The shape language is defined by a **Soft** corner radius. A consistent 4px (0.25rem) radius is used for the majority of UI components to maintain a crisp, professional look that feels slightly more sophisticated than sharp 90-degree corners.

- **Standard (4px):** Buttons, Input fields, Chips, Checkboxes.
- **Large (8px):** Cards, Modals, and large containers.
- **Pill:** Reserved exclusively for status indicators (Tags/Badges) to differentiate them from interactive buttons.

## Components
- **Buttons:** Primary buttons use the Primary Deep Blue (`#0F172A`) with white text. Secondary buttons use a subtle border and the Accent Blue text. Height should be a standard 40px for desktop.
- **Input Fields:** 1px border (`#CBD5E1`) with a 4px corner radius. On focus, the border shifts to the Accent Blue (`#2563EB`) with a subtle 2px glow.
- **Chips & Tags:** Small, low-contrast backgrounds (`#F1F5F9`) with Medium weight labels.
- **Lists & Tables:** Use alternating row stripes (Zebra striping) using `surface-low` for better data scanability in enterprise views.
- **Cards:** White backgrounds with an 8px corner radius and a subtle 1px border. No shadows unless the card is interactive or draggable.
- **Checkboxes/Radios:** Use the Soft (4px) and Rounded (Full) radii respectively, with the Accent Blue for the checked state.