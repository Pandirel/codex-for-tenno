
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from './ui/sheet';
import { useLanguage } from '@/context/language-context';
import { WarframeLogo } from './icons';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = useLanguage();
  const navLinks = translations.nav;

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <SheetHeader className="mb-8 text-left">
            <SheetTitle>
              <div className="flex items-center gap-3">
                <WarframeLogo className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold font-headline tracking-tight">Warframe Codex</span>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
