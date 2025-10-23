
import { NextRequest } from "next/server";
import { listTodos, addTodo } from "@/lib/todos";

export async function GET() {
  const todos = await listTodos();
  return Response.json(todos);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({} as any));
  const text = typeof body.text === "string" ? body.text.trim() : "";
  if (!text) {
    return new Response(JSON.stringify({ error: "Missing 'text'." }), { status: 400 });
  }
  const todo = await addTodo(text);
  return new Response(JSON.stringify(todo), { status: 201 });
}
