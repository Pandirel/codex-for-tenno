'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function MainNav() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  const links = {
    es: [
      { href: '/', label: 'Guías' },
      { href: '/farming', label: 'Recursos' },
    ],
    en: [
      { href: '/', label: 'Guides' },
      { href: '/farming', label: 'Resources' },
    ],
  };

  const navLinks = links[language] || links.es;

  // Note: A simple solution for now. A more robust solution would use a global state/context.
  if (typeof window !== 'undefined') {
    const lang = window.localStorage.getItem('language');
    if(lang && lang !== language) {
        setLanguage(lang as 'es' | 'en');
    }
  }

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === link.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
