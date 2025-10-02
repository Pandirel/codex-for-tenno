
'use client';

import { useCollection } from '@/firebase';
import { useLanguage } from '@/context/language-context';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Calendar, Gift, Ticket } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';

interface GiveawayDoc {
  id: string;
  active: boolean;
  title?: string;
  drawDate?: string;
}

export function GiveawayAnnouncement() {
  const { language, translations } = useLanguage();
  const t = translations.giveaways;
  const { data: activeGiveaways, loading } = useCollection<GiveawayDoc>('giveaways', {
    where: [['active', '==', true]],
  });

  const activeGiveaway = activeGiveaways?.[0];

  if (loading) {
    return null; // Don't show anything while loading to prevent flicker
  }

  if (!activeGiveaway) {
    return (
      <Card className="border-muted/20 bg-muted/30">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{t.upcomingGiveaway}</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-lg font-bold">{t.noScheduledGiveaway}</div>
            <p className="text-xs text-muted-foreground">{t.noScheduledGiveawayHint}</p>
        </CardContent>
      </Card>
    );
  }
  
  const formattedDate = activeGiveaway.drawDate ? format(new Date(activeGiveaway.drawDate), "PPP p", {
    locale: language === 'es' ? es : enUS,
  }) : null;

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-background to-primary/10">
      <CardHeader>
        <CardTitle className="font-headline tracking-tight text-primary flex items-center gap-2">
            <Gift className="h-6 w-6" />
            {t.upcomingGiveaway}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold">{activeGiveaway.title}</h3>
        {formattedDate && (
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4" />
                {formattedDate}
            </p>
        )}
      </CardContent>
    </Card>
  );
}
