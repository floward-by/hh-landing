# Overview

This is a React-based adult daycare website with a Node.js Express backend. The application provides a multilingual (Korean/English) informational website for an adult daycare center called "Happy Home Adult Daycare" (해피홈 데이케어). The site includes sections for services, about information, eligibility criteria, careers, and daily schedules, with a modern UI built using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Services, Daycare, Eligibility, and Careers
- **UI Framework**: shadcn/ui component library with Radix UI primitives and Tailwind CSS for styling
- **State Management**: React Query (@tanstack/react-query) for server state and React Context for language switching
- **Internationalization**: Custom context-based solution supporting Korean and English languages

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Data Storage**: Currently using in-memory storage with interface design for easy migration to PostgreSQL
- **Development**: Hot module replacement with Vite integration for development mode

## Database Design
- **Schema**: Defines inquiry form structure with fields for name, email, phone, message, and inquiry type
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle

## Styling and UI
- **CSS Framework**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Component System**: Comprehensive shadcn/ui component library including forms, modals, carousels, and navigation
- **Responsive Design**: Mobile-first approach with responsive breakpoints and mobile navigation

## Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript with strict mode enabled and path aliases for clean imports
- **Development Features**: Runtime error overlay and Replit-specific development tools integration

# External Dependencies

## Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers
- **UI Components**: Radix UI primitives (@radix-ui/*), Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants, clsx for conditional classes
- **State Management**: TanStack React Query for server state management

## Backend Dependencies
- **Server Framework**: Express.js with TypeScript execution via tsx
- **Database**: Drizzle ORM, @neondatabase/serverless for database connectivity
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Utilities**: date-fns for date manipulation, nanoid for ID generation

## Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support with strict configuration
- **Development**: Replit-specific plugins for cartographer and runtime error handling

## Database and Hosting
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **Environment**: Designed for Replit deployment with environment variable configuration
- **Asset Management**: Support for attached assets and static file serving