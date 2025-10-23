
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo({ onAdded }: { onAdded?: () => void }) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!text.trim()) return;

    setBusy(true);
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to add todo");
      }
      setText("");
      // Soft refresh Server Components to get fresh list
      router.refresh();
      onAdded?.();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginTop: 12 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you want to do?"
        aria-label="Todo text"
      />
      <button disabled={busy}>{busy ? "Adding…" : "Add"}</button>
      {error && <div role="alert" style={{ color: "crimson" }}>{error}</div>}
    </form>
  );
}
