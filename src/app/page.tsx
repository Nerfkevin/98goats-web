import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-card">
        <div className="container flex h-14 items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">98 Goats</span>
        </div>
      </header>
      <main className="container flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
        <h1
          className={cn(
            "max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl",
          )}
        >
          Welcome
        </h1>
        <p className="max-w-lg text-muted-foreground">
          Next.js + Tailwind stack aligned with pett-web. Deploy on Vercel and
          point www.98goats.com to this project.
        </p>
      </main>
    </div>
  );
}
