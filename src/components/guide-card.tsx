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
import { useLanguage } from '@/context/language-context';
import { getCategoryTranslation } from '@/lib/translations';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

export function GuideCard({ guide }: { guide: Guide }) {
  const { language, translations } = useLanguage();
  const t = translations.guides;

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

  const formattedDate = format(new Date(guide.creationDate), 'dd MMM, yyyy', {
    locale: language === 'es' ? es : enUS,
  });
  
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline tracking-tight">{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
            <Badge variant="secondary">{getCategoryTranslation(category, language)}</Badge>
            <span>•</span>
            <time dateTime={guide.creationDate}>{formattedDate}</time>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">
            {getSummary(content)}
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className='w-full'>{t.readMore}</Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{title}</DialogTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                <Badge variant="secondary">{getCategoryTranslation(category, language)}</Badge>
                <span>•</span>
                <time dateTime={guide.creationDate}>{formattedDate}</time>
              </div>
            </DialogHeader>
            <ScrollArea className="flex-grow h-full pr-6 -mr-6">
                <div className="guide-content text-foreground/90" dangerouslySetInnerHTML={{ __html: content }} />
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
