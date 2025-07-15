
'use client';

import { FarmingTable } from '@/components/farming-table';
import { MobileNav } from '@/components/mobile-nav';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { WarframeLogo } from '@/components/icons';
import { getResources } from '@/data/resources';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/context/language-context';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function FarmingPage() {
  const { translations } = useLanguage();
  const t = translations;
  const resources = getResources();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <WarframeLogo className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold font-headline tracking-tight hidden md:block">Warframe Codex</h1>
              <h1 className="text-2xl font-bold font-headline tracking-tight md:hidden">WFC</h1>
            </div>
            <MainNav />
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-screen-2xl p-4 sm:p-6 md:p-8">
        <FarmingTable resources={resources} />
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-2">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
              {t.footer.mainText}
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground/80 hover:text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t.footer.tooltipText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </footer>
    </div>
  );
}
