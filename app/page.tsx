
export default async function HomePage() {
  const serverTime = new Date().toISOString();

  return (
    <section>
      <h1>Welcome to Next.js 👋</h1>
      <p>
        This page renders <strong>on the server (SSR)</strong>.<br />
        Current server time: <code>{serverTime}</code>
      </p>

      <ul>
        <li>
          <a href="/todos">Todos (SSR list + API + client-side form)</a>
        </li>
        <li>
          <a href="/todos/123">Dynamic route example: /todos/123</a>
        </li>
      </ul>
    </section>
  );
}
