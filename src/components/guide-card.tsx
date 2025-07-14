'use client';

import { useState } from 'react';
import type { Guide } from '@/data/guides';
import { getSummaryAction } from '@/app/actions';
import { useToast } from "@/hooks/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export function GuideCard({ guide }: { guide: Guide }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSummarized, setIsSummarized] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    if (isSummarized || isLoading) return;

    setIsLoading(true);
    const result = await getSummaryAction({ guideText: guide.content });
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error Summarizing",
        description: result.error,
      });
    } else if (result.summary) {
      setSummary(result.summary);
      setIsSummarized(true);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="font-headline tracking-tight">{guide.title}</CardTitle>
        <CardDescription>
            <Badge variant="secondary">{guide.category}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-4">
            {guide.content.split('\n\n')[0]}
        </p>
      </CardContent>
      <CardFooter>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-t border-b-0 pt-4">
             <AccordionTrigger asChild onClick={handleSummarize}>
              <Button variant="ghost" className="w-full justify-between items-center px-4 py-2 hover:no-underline">
                Summarize with AI
                <WandSparkles className="h-5 w-5 text-primary" />
              </Button>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              {isLoading && (
                 <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                 </div>
              )}
              {!isLoading && summary && (
                <div className="text-sm text-foreground/90 whitespace-pre-line">
                    {summary}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
}
