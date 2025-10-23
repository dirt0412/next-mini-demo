
"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.message}</pre>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
