# AgriTech Farm Management

A mobile-first farm management and resource planning application for farmers and farm teams.

## MVP scope

- Farm and field setup
- Crop planning and lifecycle tracking
- Task scheduling and completion tracking
- Input inventory management
- Expense records
- At-a-glance farm dashboard

## Technology

- Expo + React Native + TypeScript
- Expo Router for file-based navigation
- Zustand for local app state
- Supabase/PostgreSQL for authentication and persistence
- React Hook Form + Zod for validated forms
- NativeWind-ready styling

## Getting started

```bash
npm install
cp .env.example .env
npm start
```

Run on Android, iOS, or web using the Expo CLI. The app works with demo data when Supabase variables are not configured.

## Project structure

```text
app/                 Expo Router screens and navigation
src/features/        Domain-specific screens and components
src/components/      Shared UI components
src/lib/             Clients and configuration
src/store/           Zustand stores
src/types/           Domain types
supabase/            Database migrations and seed data
docs/                Architecture, schema, and roadmap
```

## Supabase setup

1. Create a Supabase project.
2. Copy the project URL and anonymous key into `.env`.
3. Apply `supabase/migrations/001_initial_schema.sql` in the Supabase SQL editor.
4. Run the app and create an account from the More tab when authentication screens are added.

## Development conventions

- Keep business logic in `src/features` or `src/services`, not in route files.
- Use UUIDs for persisted records.
- Store dates as ISO 8601 timestamps.
- Design for low bandwidth and eventual offline support.
- Add tests for calculations, validation, and state transitions.

See `docs/roadmap.md` for the planned delivery phases.
