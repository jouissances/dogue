# Dog Breed Encyclopedia - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid approach combining Material Design's content organization principles with inspiration from modern digital encyclopedias (National Geographic, Wikipedia's modern redesign, educational platforms like Khan Academy)

**Key Design Principles:**
- **Editorial clarity:** Information hierarchy that guides reading flow naturally
- **Book-inspired pacing:** Each breed entry feels like turning a page in a premium encyclopedia
- **Image-forward storytelling:** Dog photography takes center stage to create emotional connection
- **Scannable information:** Users should quickly locate specific details while enjoying browsing

## Typography System

**Font Families (via Google Fonts):**
- Primary (Headings): 'Playfair Display' - serif font evoking classic encyclopedias
- Secondary (Body): 'Inter' - highly readable sans-serif for body content
- Accent (Labels): 'Inter' with letter-spacing for section labels

**Typography Hierarchy:**
- Page Title (Breed Name): 3.5rem (desktop) / 2.5rem (mobile), Playfair Display, font-weight 700
- Section Headings: 1.5rem, Inter, font-weight 600, uppercase with letter-spacing
- Body Text: 1.125rem, Inter, font-weight 400, line-height 1.7 for optimal readability
- Labels/Metadata: 0.875rem, Inter, font-weight 500, uppercase with tracking
- Navigation Links: 1rem, Inter, font-weight 500

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24

**Page Structure:**
- Maximum content width: max-w-4xl (optimized for reading)
- Page padding: px-6 md:px-12 lg:px-16
- Section vertical spacing: space-y-16 (desktop) / space-y-12 (mobile)
- Component internal spacing: p-6 to p-8

**Grid System:**
- Single column for narrative content (optimal reading experience)
- Two-column grid for physical traits data (desktop only, stacks on mobile)
- Full-width hero image section
- Centered content container for all text sections

## Component Library

### Navigation System

**Top Navigation Bar:**
- Fixed position header with backdrop blur effect
- Contains: Home link (left), Breed name (center), Navigation arrows (right)
- Height: h-16
- Spacing: px-6, flex justify-between items-center
- Keyboard focus: 3px solid outline with offset

**Breed Navigation Controls:**
- Previous/Next buttons as pill-shaped elements with arrow icons (Heroicons)
- Position: Fixed on sides of viewport (hidden on mobile, shown on tablet+)
- Include tooltips showing adjacent breed names on hover
- Keyboard accessible: Tab through, Enter/Space to activate, Arrow keys for quick navigation

**Home Link:**
- Prominent button in header
- Icon + text on desktop, icon only on mobile
- Returns to breed directory/home page

### Hero Section (Per Breed Page)

**Hero Image Display:**
- Full-width section with py-20 (desktop) / py-12 (mobile)
- Centered dog image: max-w-2xl, transparent PNG on subtle background
- Image shadow: large soft shadow to lift image from page
- Alt text: "[Breed name] dog standing/sitting portrait"

**Image Treatment:**
- Images centered horizontally
- Maximum height: max-h-96 to maintain proportion
- Object-fit: contain to preserve aspect ratio
- Margin below: mb-8

### Content Sections

**Section Structure (for each information block):**

1. **Breed Name Section:**
   - Centered layout
   - Large heading with decorative underline or accent element
   - Spacing: mb-16

2. **Origin/History Section:**
   - Section label: "Origin & History" in accent typography
   - Narrative paragraph style: max-w-prose, mx-auto
   - Spacing: mb-12

3. **Physical Traits Section:**
   - Section label: "Physical Characteristics"
   - Two-column grid on desktop (grid-cols-2 gap-6)
   - Each trait as card: border, rounded corners, p-6
   - Trait structure: Bold label + value (e.g., "Size: Medium")
   - Icons from Heroicons for each trait type (optional visual enhancement)

4. **Temperament Section:**
   - Section label: "Temperament & Behavior"
   - Paragraph format with list of key traits
   - Badge-style tags for personality traits (e.g., "Friendly", "Energetic", "Loyal")
   - Tags: inline-flex, px-4 py-2, rounded-full, gap-2

5. **Trivia/Fun Facts Section:**
   - Section label: "Did You Know?"
   - Bulleted list or numbered facts
   - Each fact as card with icon
   - Spacing: space-y-4

### Footer Navigation

**Bottom Navigation:**
- Full-width section: py-8
- Three-column layout (desktop): Previous Breed | Home | Next Breed
- Stacked on mobile with clear visual separation
- Each navigation element shows breed thumbnail + name (when applicable)

## Accessibility Features

**Keyboard Navigation:**
- All interactive elements accessible via Tab
- Visible focus states: 3px outline with 2px offset
- Arrow key support: Left arrow (previous breed), Right arrow (next breed)
- Skip to content link for screen readers

**Screen Reader Support:**
- Semantic HTML: `<main>`, `<article>`, `<section>`, `<header>`, `<nav>`, `<footer>`
- ARIA labels: aria-label for navigation controls
- Image alt text: Descriptive for breed images, empty for decorative elements
- Heading hierarchy: Proper h1-h6 structure

**Visual Accessibility:**
- Text contrast ratios meeting WCAG AA standards
- Touch targets: Minimum 44x44px for mobile
- Responsive font scaling
- No reliance on color alone for information

## Responsive Behavior

**Breakpoints:**
- Mobile: Base styles (< 768px)
- Tablet: md: (768px - 1024px)
- Desktop: lg: (1024px+)

**Mobile Adaptations:**
- Navigation arrows: Hidden on mobile, use bottom navigation
- Two-column grids: Stack to single column
- Typography: Reduce heading sizes by 30-40%
- Padding: Reduce to px-4
- Hero image: Reduce max height to max-h-64

**Tablet Adaptations:**
- Show side navigation arrows
- Maintain two-column layout for traits
- Moderate padding: px-8

## Images

**Hero Images (Breed Photographs):**
- Transparent PNG format
- Centered dog portrait on each breed page
- Professional quality, well-lit studio-style photos
- Consistent image style across all breeds
- Placement: Top of each breed page after navigation
- Size: Large and prominent (400-600px height on desktop)
- Background: Subtle gradient or texture behind transparent PNG

**Navigation Thumbnails:**
- Small circular or square thumbnails (64x64px) in footer navigation
- Show preview of previous/next breed

**Icon Usage:**
- Heroicons for UI elements (arrows, home, trait icons)
- Decorative icons for physical traits (ruler for size, weight scale, etc.)

## Animation & Interactions

**Page Transitions:**
- Subtle fade-in for breed pages (300ms)
- Smooth scroll behavior for anchor links

**Interactive States:**
- Navigation buttons: Scale transform on hover (scale-105)
- Cards: Subtle lift effect on hover (shadow increase)
- Focus states: Smooth transition to visible outline

**Scroll Behavior:**
- Smooth scrolling enabled
- Progressive content reveal: Minimal, no heavy animations

## Multi-Page Structure

**Home/Directory Page:**
- Grid of all dog breeds (3-4 columns desktop, 2 mobile)
- Each card: Breed thumbnail + name
- Cards link to individual breed pages
- Search/filter functionality (alphabetical, size, group)

**Individual Breed Pages:**
- Follow full-page entry structure as described
- Consistent layout across all breeds
- Full semantic structure with proper headings

This design creates an immersive, educational experience that honors the encyclopedia format while providing modern web usability and visual appeal.