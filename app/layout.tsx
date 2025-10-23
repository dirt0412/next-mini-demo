
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Mini Demo",
  description: "SSR + API + CSR + dynamic routes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 16, borderBottom: "1px solid var(--border)" }}>
          <a href="/">Home</a> &nbsp;|&nbsp; <a href="/todos">Todos</a>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
        <footer style={{ padding: 16, borderTop: "1px solid var(--border)" }}>
          <small>Next.js demo</small>
        </footer>
      </body>
    </html>
  );
}
