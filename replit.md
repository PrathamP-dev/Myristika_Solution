# Myristika Solution - Replit.md

## Overview

Myristika Solution is a modern full-stack web application focused on environmental conservation and forestry technology. The platform showcases the company's mission to protect forests and wildlife through innovative technological solutions including AI, drone surveillance, IoT sensors, and remote sensing.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 18, 2025)

- **Migration Completed**: Successfully migrated from Replit Agent to Replit environment with full security compliance
- **Team Section Update**: Removed all designations/roles from team member profiles in the Our Team section for cleaner presentation
- **Social Media Integration**: Added authentic social media links for X (Twitter) and Instagram with updated X logo branding
- **Latest Content Update**: Updated all major sections with comprehensive new content following user requirements:
  - **Who We Are**: Enhanced mission statement emphasizing natural resources beyond forests, updated journey narrative with team's diverse sector experience
  - **What We Do**: Complete rewrite focusing on proven legacy, core expertise areas (Strategic Policy, Data-Driven Solutions, Community-Centric Engagement, Biodiversity Conservation, Climate Resilience, Strategic Communications), and comprehensive technology suite
  - **Our Team**: Updated all team member profiles with detailed professional backgrounds and extensive experience descriptions
- **Hero Section Update**: Removed taglines "Innovating Forests & Wildlife with Technology" and "Empowering environmental action through smart tools and AI" for cleaner presentation
- **Infographic Integration**: Replaced text bullet points with professional infographics:
  - Strategic Policy & Advocacy section now features comprehensive visual infographic
  - Ecosystem Services section enhanced with detailed process infographic
- **Text Justification**: Applied text justification to all content sections for improved readability and professional appearance
- **Team Section Enhanced**: All team members now have comprehensive professional backgrounds including Ashish Raj, Dr. Manoj Pattanaik, Sandeep Khanwalkar, Kiran KP, Dr. Gaini Sailu, Sourav Pahari, Manish Pant, and Prashant Gamaliel
- **Premium Icon Styling**: Updated all icon gradients from orangish earth tones to sophisticated platinum colors for a more premium look
- **Logo Redesign**: Changed logo from gradient background to simple white background with dark green leaf icon for minimalistic appearance
- **Navigation Enhancement**: Implemented consistent glass blur effect throughout entire website using dedicated CSS classes for uniform appearance

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Storage**: In-memory storage with interface for future database integration
- **API Pattern**: RESTful endpoints under `/api` prefix

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Type Checking**: TypeScript with strict mode
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Code Organization**: Monorepo structure with shared types and schemas

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with video background and call-to-action
   - About section explaining mission, vision, and values
   - Services section showcasing technology offerings
   - Team section with member profiles
   - Contact form with validation

2. **UI Infrastructure**:
   - Complete shadcn/ui component library
   - Custom hooks for mobile detection, smooth scrolling, and scroll reveal animations
   - Toast notifications for user feedback
   - Responsive navigation with scroll behavior

### Backend Services
1. **Contact Management**:
   - Contact form submission endpoint
   - Message storage and retrieval
   - Form validation using Zod schemas

2. **Storage Layer**:
   - Interface-based storage system
   - In-memory implementation for development
   - Prepared for database integration

### Database Schema
- **Users Table**: Basic user management structure
- **Contact Messages**: Stores form submissions with timestamps
- **UUID Primary Keys**: Using PostgreSQL's gen_random_uuid()

## Data Flow

1. **Form Submission**: Contact form → validation → API endpoint → storage
2. **Page Rendering**: React components → Vite dev server → browser
3. **API Communication**: Frontend queries → Express routes → storage layer
4. **State Management**: TanStack Query handles caching and synchronization

## External Dependencies

### UI and Styling
- Radix UI components for accessibility
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Font Awesome for additional icons

### Backend Infrastructure
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database as PostgreSQL provider
- Zod for runtime validation

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety
- React Hook Form for form management
- Date-fns for date utilities

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations stored in `migrations/` directory

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Development/production mode switching via `NODE_ENV`
- Replit-specific tooling for cloud development

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema synchronization

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and a focus on developer experience with hot reloading and comprehensive tooling.