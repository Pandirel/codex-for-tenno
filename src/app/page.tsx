import { GuideList } from '@/components/guide-list';
import { ThemeToggle } from '@/components/theme-toggle';
import { WarframeLogo } from '@/components/icons';
import { getGuides } from '@/data/guides';

export default function Home() {
  const guides = getGuides();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-3">
            <WarframeLogo className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-headline tracking-tight">Warframe Codex</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto max-w-screen-2xl p-4 sm:p-6 md:p-8">
        <GuideList guides={guides} />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Built by a Tenno. The future of Warframe guidance is here.
          </p>
        </div>
      </footer>
    </div>
  );
}
