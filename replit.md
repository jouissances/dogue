# Dog Breed Encyclopedia

## Overview
A responsive, accessible dog breed encyclopedia website with a hybrid vertical-horizontal scrolling layout. The site features a landing page followed by a horizontally scrolling breed section. Each breed has its own full-page entry displaying detailed information including origin, history, physical traits, temperament, and fun facts.

## Current State
- **Status**: ✅ Complete and fully functional
- **Tech Stack**: React, TypeScript, Tailwind CSS, Express.js, Wouter, React Query
- **Design**: Hybrid vertical-horizontal scrolling layout with snap scrolling
- **Breeds**: 3 breeds (Beagle, Dachshund, Golden Retriever) with AI-generated images
- **Testing**: End-to-end tests passing successfully

## Project Architecture

### Frontend (React + TypeScript)
- **Pages**:
  - `Home.tsx`: Main landing page with vertical scroll layout for all breeds
  - `NotFound.tsx`: 404 error page

- **Components**:
  - `MenuPanel.tsx`: Slide-out menu with breed search functionality
  - `BreedSection.tsx`: Full-page breed display section
  - `PhysicalTraits.tsx`: Displays size, weight, coat, lifespan
  - `BreedTemperament.tsx`: Shows temperament badges and behavior description
  - `BreedTrivia.tsx`: Fun facts grid display

- **Data**:
  - `breeds.ts`: Static breed data (currently 3 breeds)
  - `schema.ts`: TypeScript interfaces and Zod schemas

### Backend (Express.js)
- **Routes**:
  - `GET /api/breeds` - List all breeds (supports search via ?q= parameter)
  - `GET /api/breeds/:id` - Get specific breed by ID
- **Storage**: In-memory storage (MemStorage) with 3 pre-populated breeds
- **Error Handling**: Proper 404/500 responses with error messages

## Features

### Implemented
- ✅ Hybrid vertical-horizontal scrolling layout with snap scrolling
- ✅ Alphabetically sorted breed sections
- ✅ Slide-out menu panel with search functionality
- ✅ Navigation arrows on left/right sides (only visible in breed section)
- ✅ Keyboard navigation (Down/Up for vertical, Left/Right for horizontal)
- ✅ Semantic HTML with proper ARIA labels
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll behavior
- ✅ Focus states for accessibility

### Navigation
- **Vertical scroll**: Scroll down from landing page to breed section
- **Horizontal scroll**: Browse all breeds left-to-right in alphabetical order within breed section
- **Keyboard**: 
  - Arrow Down: From landing → breed section
  - Arrow Up: From breed section → landing
  - Arrow Left/Right: Navigate between breeds (only in breed section)
- **Navigation arrows**: Side buttons for previous/next breed (hidden on landing page, visible in breed section)
- **Menu panel**: Search and quick jump to specific breeds
- **Tab navigation**: Full keyboard accessibility

## Design Guidelines
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body
- Color scheme: Warm neutrals with orange primary accent
- Layout: Centered content, max-width containers, generous spacing
- Images: Transparent PNG backgrounds, no shadows
- Accessibility: WCAG AA compliant, screen reader friendly

## Recent Changes (October 27, 2025)
- **Hybrid vertical-horizontal scrolling**: Landing page scrolls down to breed section, then horizontal scrolling between breeds
- **Updated keyboard navigation**: 
  - Down arrow: Landing → breed section
  - Up arrow: Breed section → landing
  - Left/Right arrows: Navigate between breeds
- **Conditional arrow visibility**: Navigation arrows only appear in breed section, hidden on landing page
- **Fixed scroll listener**: Attached to correct scrollable container (#main-container) for proper state tracking
- **State management**: isOnLanding tracks vertical position, currentBreedIndex tracks horizontal position
- Removed drop shadows from breed images
- Implemented snap scrolling for both vertical and horizontal directions
- Created searchable menu panel with Escape key support
- Alphabetically sorted breed display
- Integrated React Query for API data fetching
- Implemented Express API routes for breed data
- Added accessibility improvements (aria-hidden, pointer-events)

## User Preferences
- User prefers hybrid vertical-horizontal scrolling layout
- Landing page → scroll down → breed section → horizontal scroll between breeds
- Navigation arrows should only appear in breed section, not on landing page
- Menu should be accessible via top-right corner icon
- Search functionality important for breed discovery
- Keyboard navigation is a priority (Down/Up for vertical, Left/Right for horizontal)
- Stability and reliability prioritized over advanced features
