# Architecture

## Client

Expo Router provides mobile navigation. Screens are intentionally thin: they compose feature components and call store/service methods. Zustand currently provides a demo-first local store and will be hydrated from Supabase with persisted query caching.

## Data flow

`Screen -> feature hook -> service/repository -> Supabase`.

The repository boundary keeps the app testable and allows an offline repository to be introduced without rewriting screens. Mutations should optimistically update local state, queue offline writes, and reconcile when connectivity returns.

## Product principles

1. Offline-first for farm-critical workflows.
2. Simple language, large touch targets, and localizable strings.
3. Minimize network requests and image/data transfer.
4. Tenant isolation: every query must be scoped to a farm membership.
