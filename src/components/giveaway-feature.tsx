
'use client';

import { useState, useEffect } from 'react';
import type { Giveaway } from '@/models/giveaway';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { Ticket, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import Confetti from 'react-confetti';

// Simulate fetching participants from a backend
const initialParticipants = Array.from({ length: 50 }, (_, i) => `Player ${i + 1}`);

export function GiveawayFeature({ giveaway }: { giveaway: Giveaway }) {
  const { language, translations } = useLanguage();
  const t = translations.giveaways;

  const [participants, setParticipants] = useState(initialParticipants);
  const [isDrawing, setIsDrawing] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [shufflingName, setShufflingName] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const title = giveaway.title[language];

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (winner) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000); // Confetti for 8 seconds
      return () => clearTimeout(timer);
    }
  }, [winner]);

  const handleDraw = () => {
    if (participants.length === 0) return;

    setIsDrawing(true);
    setWinner(null);
    setShowConfetti(false);

    let shuffleCount = 0;
    const maxShuffles = 30; // Total shuffles
    const shuffleInterval = 100; // ms between shuffles

    const shuffle = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * participants.length);
      setShufflingName(participants[randomIndex]);
      shuffleCount++;

      if (shuffleCount > maxShuffles) {
        clearInterval(shuffle);
        const finalWinnerIndex = Math.floor(Math.random() * participants.length);
        const finalWinner = participants[finalWinnerIndex];
        setWinner(finalWinner);
        setShufflingName(null);
        setIsDrawing(false);
      }
    }, shuffleInterval);
  };

  const handleReset = () => {
    setWinner(null);
    setIsDrawing(false);
    setShowConfetti(false);
    setShufflingName(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={400}
          />
        </div>
      )}
      
      <div className="lg:col-span-2 grid grid-cols-1 gap-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="overflow-hidden shadow-none">
              <Image 
                  src={giveaway.prizeImage} 
                  alt={title} 
                  width={1280} 
                  height={720} 
                  className="object-cover w-full h-full rounded-lg"
                  data-ai-hint="giveaway prize"
              />
            </Card>
            <div className="flex flex-col gap-8 h-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-none tracking-tight font-headline">{title}</h2>
                <p className="text-sm text-muted-foreground mt-2">{giveaway.description[language]}</p>
              </div>
              
              <Card className="text-center p-6 bg-background/50 flex flex-col justify-center items-center flex-grow">
                  {winner ? (
                  <div className="animate-in fade-in zoom-in-95 duration-500">
                      <Trophy className="h-12 w-12 mx-auto text-amber-400" />
                      <p className="text-muted-foreground mt-2 text-sm">{t.winner}</p>
                      <h3 className="text-3xl font-bold font-headline text-primary my-1">{winner}</h3>
                      <Button onClick={handleReset} variant="outline" size="sm" className="mt-2">{t.drawAgain}</Button>
                  </div>
                  ) : isDrawing ? (
                  <div>
                      <h3 className="text-3xl font-bold font-headline animate-pulse">{shufflingName}</h3>
                  </div>
                  ) : (
                  <div className="flex flex-col items-center justify-center">
                      <Ticket className="h-12 w-12 mx-auto text-primary" />
                      <Button onClick={handleDraw} size="lg" className="mt-4">{t.drawWinner}</Button>
                  </div>
                  )}
              </Card>
            </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline tracking-tight">{t.participants} ({participants.length})</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ScrollArea className="h-[calc(100vh-250px)] min-h-[400px] border rounded-md p-4">
              <div className="space-y-2">
                {participants.map((p, i) => (
                  <div key={i} className={cn(
                    "p-2 rounded-md text-sm",
                    winner === p ? 'bg-amber-400/20 text-amber-200 font-bold' : 'bg-muted/50'
                  )}>
                    {p}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
