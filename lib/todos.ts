
export type Todo = { id: string; text: string; done: boolean };

// In-memory store (resets on server restart)
const store: Todo[] = [
  { id: "1", text: "Learn App Router", done: false },
  { id: "2", text: "Add a client form", done: false },
];

export async function listTodos(): Promise<Todo[]> {
  // Simulate async (db) latency if you want:
  // await new Promise(r => setTimeout(r, 100));
  return store;
}

export async function addTodo(text: string): Promise<Todo> {
  const todo: Todo = { id: String(Date.now()), text, done: false };
  store.push(todo);
  return todo;
}
