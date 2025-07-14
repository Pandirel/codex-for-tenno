'use client';

import { useState, useMemo } from 'react';
import type { Guide } from '@/data/guides';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GuideCard } from '@/components/guide-card';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { getCategoryTranslation } from '@/lib/translations';


const categories = ['All', 'Steel Path', 'Beginners', 'Warframes', 'Weapons'];

export function GuideList({ guides }: { guides: Guide[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { language, translations } = useLanguage();
  const t = translations.guides;

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesCategory = activeCategory === 'All' || guide.category === activeCategory;
      const title = guide.title[language];
      const content = guide.content[language];
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [guides, searchTerm, activeCategory, language]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder={t.searchPlaceholder}
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant="outline"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "capitalize",
              activeCategory === category && "bg-accent text-accent-foreground"
            )}
          >
            {getCategoryTranslation(category, language)}
          </Button>
        ))}
      </div>
      
      {filteredGuides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            {t.noGuidesFound}
          </p>
          <p className="text-sm text-muted-foreground/70">
           {t.noGuidesFoundHint}
          </p>
        </div>
      )}
    </div>
  );
}
