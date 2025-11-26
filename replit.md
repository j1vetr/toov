# TOOV - Digital Solutions Platform

## Overview

TOOV is a premium technology firm specializing in web design, web development, mobile app development, and SEO/growth solutions. The platform is a full-stack TypeScript application built with React (frontend) and Express (backend), designed to showcase the company's services, handle client inquiries, and facilitate project initiation through an interactive wizard interface.

The application is a Turkish-language website featuring a modern, dark-themed UI with turquoise accents, emphasizing a premium, engineering-driven aesthetic. It includes company information, service offerings, innovation showcase, client references, and multiple contact/inquiry mechanisms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for UI components
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** (React Query) for server state management and API calls

**UI Component System**
- **Radix UI** primitives for accessible, unstyled components
- **Tailwind CSS v4** with custom design tokens for styling
- **shadcn/ui** component patterns (New York style variant)
- Custom design system with geometric "Syne" font for headings and "Manrope" for body text
- Framer Motion for animations and transitions

**Design Approach**
- Dark navy/charcoal base color scheme with electric turquoise accents
- Custom CSS variables for theming (defined in `client/src/index.css`)
- Mobile-first responsive design
- Premium, non-AI-generated aesthetic per brand requirements

**Key Frontend Features**
- Multi-page SPA with routes: Home, Services, About, Innovation, References, Contact, Privacy Policy, KVKK, Project Wizard
- Interactive project wizard for client onboarding (multi-step form)
- SEO component for dynamic meta tag management
- Floating action button (FAB) for project wizard access
- Scroll-to-top functionality on route changes

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript
- Dual server setup: `index-dev.ts` for development (with Vite middleware), `index-prod.ts` for production (serving static files)
- Session-based architecture foundation (no active authentication implementation)

**API Endpoints**
- `POST /api/contact` - Contact form submissions
- `POST /api/project-wizard` - Project wizard form submissions (incomplete in visible code)

**Email System**
- **Nodemailer** configured with custom SMTP server (`mail.toov.com.tr`)
- Sends admin notifications and user confirmations for contact forms
- Email credentials stored in server configuration (should be moved to environment variables)

**Validation**
- **Zod** schemas for request validation
- Centralized validation for contact and project wizard forms

### Data Storage Solutions

**Database Setup**
- **PostgreSQL** as the primary database (configured via Neon serverless driver)
- **Drizzle ORM** for type-safe database operations
- Database schema defined in `shared/schema.ts` (currently minimal - only users table)
- Migrations managed via Drizzle Kit (output to `./migrations`)

**Current Schema**
- Users table with id, username, password (authentication not implemented)
- Schema appears to be a starter template; actual application doesn't require user authentication

**In-Memory Storage**
- `MemStorage` class in `server/storage.ts` provides in-memory CRUD operations
- Currently used as fallback/development storage (not connected to PostgreSQL operations)

**Database Connection**
- Expects `DATABASE_URL` environment variable
- Uses Neon serverless PostgreSQL driver for edge/serverless compatibility

### Authentication & Authorization

**Current State**
- Basic user schema exists but no active authentication system
- No login/logout routes or session management implemented
- Application is publicly accessible without authentication requirements

**Future Consideration**
- Infrastructure present for session-based auth (user schema, storage interface)
- Would need implementation of login routes, session middleware, and protected endpoints

### External Dependencies

**Third-Party Services**
- **Neon Database** - Serverless PostgreSQL hosting (via `@neondatabase/serverless`)
- **SMTP Server** - Custom email server at `mail.toov.com.tr` for transactional emails
- **Google Fonts** - Syne and Manrope fonts loaded from Google CDN

**Build & Development Tools**
- **Replit-specific plugins**: Runtime error modal, cartographer, dev banner (development only)
- **ESBuild** for server-side bundling in production
- **PostCSS** with Tailwind CSS and Autoprefixer

**Asset Management**
- Static assets stored in `attached_assets/` directory
- Generated images and videos for hero sections and backgrounds
- Client logos for references section
- Custom OpenGraph image for social sharing

**Deployment Environment**
- Configured for Ubuntu + Nginx deployment (see `DEPLOY.md`)
- Production build outputs to `dist/public` (client) and `dist/index.js` (server)
- Environment: Node.js with ES modules
- Server runs on configurable port (likely via environment variable)

**Notable Integrations**
- Meta/OpenGraph tags for social media sharing
- Custom Vite plugin (`vite-plugin-meta-images.ts`) for dynamic OpenGraph image URL injection based on Replit deployment domain