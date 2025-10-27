# Dog Breed Encyclopedia

## Overview
A responsive, accessible dog breed encyclopedia website with a modern horizontal scrolling layout. Each breed has its own full-page entry displaying detailed information including origin, history, physical traits, temperament, and fun facts.

## Current State
- **Status**: ✅ Complete and fully functional
- **Tech Stack**: React, TypeScript, Tailwind CSS, Express.js, Wouter, React Query
- **Design**: Full-page horizontal scrolling layout with snap scrolling
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
- ✅ Full-page horizontal scrolling layout with snap scrolling
- ✅ Alphabetically sorted breed sections
- ✅ Slide-out menu panel with search functionality
- ✅ Navigation arrows on left/right sides (only visible on breed pages)
- ✅ Keyboard navigation (Arrow Left/Right between sections)
- ✅ Semantic HTML with proper ARIA labels
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll behavior
- ✅ Focus states for accessibility

### Navigation
- **Horizontal scroll**: Browse all breeds left-to-right in alphabetical order
- **Keyboard**: Arrow Left/Right keys navigate between landing page and breed pages
- **Navigation arrows**: Side buttons for previous/next (hidden on landing page, visible on breed pages)
- **Menu panel**: Search and quick jump to specific breeds
- **Tab navigation**: Full keyboard accessibility

## Design Guidelines
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body
- Color scheme: Warm neutrals with orange primary accent
- Layout: Centered content, max-width containers, generous spacing
- Images: Transparent PNG backgrounds, no shadows
- Accessibility: WCAG AA compliant, screen reader friendly

## Recent Changes (October 27, 2025)
- **Changed to horizontal scrolling**: Converted from vertical to horizontal snap-scrolling layout
- **Updated keyboard navigation**: Changed from Arrow Up/Down to Arrow Left/Right
- **Fixed navigation bug**: ArrowRight from landing now correctly navigates to Beagle (first breed, index 0) instead of Dachshund
- **Conditional arrow visibility**: Navigation arrows only appear on breed pages, hidden on landing page
- **Single source of truth**: Scroll listener exclusively manages currentBreedIndex state, eliminating race conditions
- Removed drop shadows from breed images
- Implemented full-page snap scrolling
- Created searchable menu panel with Escape key support
- Alphabetically sorted breed display
- Integrated React Query for API data fetching
- Implemented Express API routes for breed data
- Added accessibility improvements (aria-hidden, pointer-events)

## User Preferences
- User prefers horizontal full-page scrolling (book-style) layout
- Navigation arrows should only appear on breed pages, not landing page
- Menu should be accessible via top-right corner icon
- Search functionality important for breed discovery
- Keyboard navigation is a priority (Arrow Left/Right for horizontal navigation)
- Stability and reliability prioritized over advanced features
