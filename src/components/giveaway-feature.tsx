
'use client';

import { useState } from 'react';
import type { Giveaway } from '@/models/giveaway';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface Participant {
  id: string;
  name: string;
  avatar: string;
}

export function GiveawayFeature({ giveaway }: { giveaway: Giveaway }) {
  const { language, translations } = useLanguage();
  const t = translations.giveaways;
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [winner, setWinner] = useState<Participant | null>(null);

  const title = giveaway.title[language];
  const description = giveaway.description[language];
  const prizeImage = giveaway.prizeImage;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">{t.title}</h2>
        <p className="text-muted-foreground mt-2">{t.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline tracking-tight text-2xl">{t.prize}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={prizeImage}
                alt={title}
                fill
                className="object-cover"
                data-ai-hint="giveaway prize"
              />
            </div>
            <div className="w-full text-center">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-center gap-4">
             <Button size="lg" className="w-full max-w-xs text-lg py-6 font-bold" disabled>
                {t.joinButton}
              </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline tracking-tight">{t.participants} ({participants.length})</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            {participants.length > 0 ? (
                <ScrollArea className="h-80 pr-4">
                    <div className="space-y-4">
                    {participants.map(p => (
                        <div key={p.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                        <Avatar>
                            <AvatarImage src={p.avatar} alt={p.name} />
                            <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{p.name}</span>
                        </div>
                    ))}
                    </div>
              </ScrollArea>
            ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                    <p>{t.noParticipants}</p>
                </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled>{t.drawWinnerButton}</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
