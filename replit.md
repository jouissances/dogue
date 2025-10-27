# Dog Breed Encyclopedia

## Overview
A responsive, accessible dog breed encyclopedia website with a modern vertical scrolling layout. Each breed has its own full-page entry displaying detailed information including origin, history, physical traits, temperament, and fun facts.

## Current State
- **Status**: Frontend prototype complete, ready for backend integration
- **Tech Stack**: React, TypeScript, Tailwind CSS, Express.js, Wouter
- **Design**: Full-page vertical scrolling layout with snap scrolling
- **Breeds**: Currently 3 breeds (Beagle, Dachshund, Golden Retriever) with generated images

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
- Minimal static server currently
- Storage interface uses in-memory storage (MemStorage)

## Features

### Implemented
- ✅ Full-page vertical scrolling layout with snap scrolling
- ✅ Alphabetically sorted breed sections
- ✅ Slide-out menu panel with search functionality
- ✅ Horizontal navigation arrows (left/right sides)
- ✅ Keyboard navigation (Arrow Up/Down between breeds)
- ✅ Semantic HTML with proper ARIA labels
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll behavior
- ✅ Focus states for accessibility

### Navigation
- **Vertical scroll**: Browse all breeds in alphabetical order
- **Keyboard**: Arrow Up/Down keys navigate between breed pages
- **Horizontal arrows**: Side buttons for previous/next breed
- **Menu panel**: Search and quick jump to specific breeds
- **Tab navigation**: Full keyboard accessibility

## Design Guidelines
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body
- Color scheme: Warm neutrals with orange primary accent
- Layout: Centered content, max-width containers, generous spacing
- Images: Transparent PNG backgrounds, no shadows
- Accessibility: WCAG AA compliant, screen reader friendly

## Recent Changes
- Removed drop shadows from breed images
- Implemented full-page snap scrolling
- Added keyboard navigation with Arrow Up/Down keys  
- Created searchable menu panel with Escape key support
- Alphabetically sorted breed display
- Integrated React Query for API data fetching
- Implemented Express API routes for breed data
- Fixed menu close functionality with proper event handling
- Added accessibility improvements (aria-hidden, pointer-events)

## User Preferences
- User prefers vertical full-page scrolling layout over card grids
- Menu should be accessible via top-right corner icon
- Search functionality important for breed discovery
- Keyboard navigation is a priority
