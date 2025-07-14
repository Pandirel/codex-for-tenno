'use client';

import type { Guide } from '@/models/guide';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from './ui/scroll-area';
import { getCategoryTranslation } from '@/lib/translations';

export function GuideCard({ guide, language }: { guide: Guide, language: 'en' | 'es' }) {
  const title = guide.title[language];
  const content = guide.content[language];
  const category = guide.category;

  const getSummary = (htmlContent: string) => {
    const firstParagraph = htmlContent.match(/<p>(.*?)<\/p>/);
    if (firstParagraph && firstParagraph[1]) {
      return firstParagraph[1].replace(/<[^>]*>?/gm, '');
    }
    return '';
  };
  
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline tracking-tight">{title}</CardTitle>
        <CardDescription>
            <Badge variant="secondary">{getCategoryTranslation(category, language)}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">
            {getSummary(content)}
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className='w-full'>{language === 'es' ? 'Leer Más' : 'Read More'}</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{title}</DialogTitle>
              <div className="text-sm text-muted-foreground">
                <Badge variant="secondary">{getCategoryTranslation(category, language)}</Badge>
              </div>
            </DialogHeader>
            <ScrollArea className="flex-grow h-full pr-6 -mr-6">
                <div className="text-sm text-foreground/90 whitespace-pre-line prose-sm prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
