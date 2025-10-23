
import AddTodo from "../components/AddTodo";
import { listTodos } from "@/lib/todos";

export default async function TodosPage() {
  // Server Component: read directly from the server-side module
  const todos = await listTodos();

  return (
    <section>
      <h1>Your Todos</h1>
      <p>This page fetches data <strong>on the server</strong> on each request.</p>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <a href={`/todos/${t.id}`}>{t.text}</a>
          </li>
        ))}
      </ul>

      <AddTodo />
      <details style={{ marginTop: 12 }}>
        <summary>Notes</summary>
        <ol>
          <li>This demo uses an in-memory store (it resets on server restart).</li>
          <li>Server Components can read data directly from server-side modules.</li>
          <li>The form above is a Client Component that calls the built-in API route and then triggers <code>router.refresh()</code>.</li>
        </ol>
      </details>
    </section>
  );
}
