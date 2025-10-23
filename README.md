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

----------------------

Mała aplikacja w Next.js.
Pokazuje, polaczenie frontend i backend w jednym miejscu.

Na stronie głównej widać prosty tekst, który jest renderowany po stronie serwera (SSR).
Jest też strona z listą zadań (To-Do).
Na tej stronie możesz dodać nowe zadanie w formularzu — to działa po stronie przeglądarki (CSR).
Wszystkie zadania są przechowywane w pamięci serwera, więc po restarcie znikają.
Projekt ma też prosty endpoint API pod /api/todos, który zwraca listę zadań w formacie JSON.
Dodatkowo jest przykład dynamicznej trasy /todos/[id], która pokazuje, jak tworzyć strony z parametrami.

Całość to tylko przykład — nie ma bazy danych ani logowania.

Celem  jest pokazać podstawy Next.js:

- jak działa renderowanie na serwerze,
- jak dodać własne API,
- jak korzystać z komponentów klienckich i serwerowych,
- jak tworzyć trasy i podstrony.