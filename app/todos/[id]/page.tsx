
type Params = { id: string };

export default function TodoDetails({ params }: { params: Params }) {
  return (
    <article>
      <h1>Todo #{params.id}</h1>
      <p>Here you could fetch and render a todo by ID on the server (SSR).</p>
      <p><a href="/todos">← Back to list</a></p>
    </article>
  );
}
