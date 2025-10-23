# Next.js mini demo

Just a small Next.js project made for learning and testing basic stuff.  
It shows how server-side rendering, simple API routes and client-side parts work together in one app.

This example includes:
- server-side rendering (SSR)
- API routes (a small backend in the same app)
- client component with a form
- dynamic routes
- basic loading and error handling

Nothing fancy, just a simple working demo.

---

## How to run locally

To run the project on your machine:

1. Install dependencies:
   npm install
----

2. Start the development server:
   npm run dev
----

3. Open the app in your browser:

http://localhost:3000

## Project structure

app/
  layout.tsx         - main layout with header and footer
  page.tsx           - home page rendered on the server
  loading.tsx        - loading screen when content is fetched
  error.tsx          - simple error UI
  components/
    AddTodo.tsx      - client-side form component
  todos/
    page.tsx         - todo list page (SSR)
    [id]/page.tsx    - dynamic page for one todo
  api/
    todos/route.ts   - API route (GET list, POST new todo)
lib/
  todos.ts           - fake in-memory data store used by both SSR and API

public/              - optional static files
app/globals.css      - global styles for the app
