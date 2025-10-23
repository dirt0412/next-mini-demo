
# Next.js Mini Demo (App Router)

A tiny but complete Next.js app that shows:
- Server rendering (SSR) via Server Components
- Built-in API routes (mini backend)
- A Client Component with a form (CSR)
- Dynamic routes
- Loading and error UI

## How to run locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm run dev
   ```

3. **Open the app**
   - http://localhost:3000/ — Home page (SSR)
   - http://localhost:3000/todos — Todos list + client-side form (SSR + CSR)
   - http://localhost:3000/todos/123 — Dynamic route
   - http://localhost:3000/api/todos — JSON from API route

## Project structure

```
app/
  layout.tsx           # Global HTML frame (header/footer)
  page.tsx             # Home (Server Component / SSR)
  loading.tsx          # Loading UI for this segment
  error.tsx            # Error UI for this segment
  components/
    AddTodo.tsx        # Client Component (form posting to /api)
  todos/
    page.tsx           # Todos list (SSR, reads from server module)
    [id]/
      page.tsx         # Dynamic route: /todos/:id
  api/
    todos/
      route.ts         # API route (GET list, POST new)
lib/
  todos.ts             # In-memory store and helpers (shared by API and SSR pages)

public/                # Static assets (optional)
app/globals.css        # Basic global styles
```

## Key ideas explained

- **Server Components** (default under `app/`) render on the server, so you can safely read from DBs or server-only modules and send ready HTML.
- **Client Components** (`"use client"`) run in the browser and can use React hooks. The form in `AddTodo.tsx` calls `/api/todos` and then triggers `router.refresh()` to re-fetch Server Components.
- **API Routes** under `app/api/**/route.ts` let you build small backend endpoints next to your UI.
- **Dynamic routes** are folder names in square brackets, like `app/todos/[id]/page.tsx` mapping to `/todos/:id`.

## Production notes

- This repo uses an **in-memory store** for simplicity. In a real app, replace it with a database call (e.g., direct import in Server Components and in the API route).
- Keep secrets on the server side only (Server Components or API routes). Avoid exposing them to Client Components.

## Deploy

- You can deploy on any platform that supports Next.js. Vercel is the easiest:
  1. Push this repo to Git.
  2. Import it in Vercel.
  3. Use the default Next.js settings.
