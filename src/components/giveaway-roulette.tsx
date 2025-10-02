
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Giveaway } from '@/models/giveaway';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { X, Ticket } from 'lucide-react';
import Image from 'next/image';

interface Participant {
  name: string;
}

export function GiveawayRoulette({ giveaway }: { giveaway: Giveaway }) {
  const { language, translations } = useLanguage();
  const t = translations.giveaways;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [newParticipant, setNewParticipant] = useState('');
  const [winner, setWinner] = useState<Participant | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const { toast } = useToast();

  const prizeImage = giveaway.prizeImage;
  const prizeTitle = giveaway.title[language];

  const colors = ['#6A0DAD', '#4B0082', '#8A2BE2', '#9932CC', '#BA55D3', '#C71585'];

  const drawRoulette = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numParticipants = participants.length;
    const arc = numParticipants > 0 ? 2 * Math.PI / numParticipants : 2 * Math.PI;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '14px "Space Grotesk", sans-serif';

    participants.forEach((p, i) => {
      const angle = i * arc;
      ctx.fillStyle = colors[i % colors.length];
      
      ctx.beginPath();
      ctx.moveTo(250, 250);
      ctx.arc(250, 250, 240, angle, angle + arc);
      ctx.closePath();
      ctx.fill();

      ctx.save();
      ctx.fillStyle = 'white';
      ctx.translate(250 + Math.cos(angle + arc / 2) * 160, 250 + Math.sin(angle + arc / 2) * 160);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      const text = p.name;
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    });

  }, [participants]);

  useEffect(() => {
    drawRoulette();
  }, [drawRoulette]);


  const handleAddParticipant = () => {
    if (!newParticipant.trim()) {
      toast({ title: t.addParticipantError, variant: 'destructive' });
      return;
    }
    if (participants.some(p => p.name.toLowerCase() === newParticipant.trim().toLowerCase())) {
      toast({ title: t.participantExistsError, variant: 'destructive' });
      return;
    }
    setParticipants([...participants, { name: newParticipant.trim() }]);
    setNewParticipant('');
  };

  const handleRemoveParticipant = (name: string) => {
    setParticipants(participants.filter(p => p.name !== name));
  };

  const handleSpin = () => {
    if (participants.length < 2) return;
    setIsSpinning(true);
    setWinner(null);
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winnerAngle = winnerIndex * (2 * Math.PI / participants.length);

    // Random extra spins for excitement
    const randomSpins = Math.random() * 5 + 5; 
    const targetRotation = randomSpins * 2 * Math.PI + (2 * Math.PI - winnerAngle) - (Math.PI / participants.length);

    const canvas = canvasRef.current;
    if (!canvas) return;

    let start: number | null = null;
    const duration = 8000; // 8 seconds spin

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutCubic(Math.min(progress / duration, 1));
      
      const rotation = easedProgress * targetRotation;
      canvas.style.transform = `rotate(${rotation}rad)`;

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setIsSpinning(false);
        setWinner(participants[winnerIndex]);
        canvas.style.transform = `rotate(${targetRotation}rad)`;
      }
    };
    requestAnimationFrame(step);
  };

  const handleReset = () => {
    setParticipants([]);
    setWinner(null);
    setIsSpinning(false);
    if(canvasRef.current) {
        canvasRef.current.style.transform = 'rotate(0rad)';
    }
  };


  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">{t.title}</h2>
        <p className="text-muted-foreground mt-2">{prizeTitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 w-full flex flex-col items-center justify-center gap-6">
            <div className="relative w-[500px] h-[500px] max-w-full aspect-square">
                <div 
                    className="absolute top-1/2 left-1/2 w-8 h-8 bg-transparent z-10"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0 h-0 
                        border-l-[15px] border-l-transparent
                        border-r-[15px] border-r-transparent
                        border-t-[25px] border-t-red-500">
                    </div>
                </div>
                <canvas 
                    ref={canvasRef} 
                    width="500" 
                    height="500"
                    className="transition-transform duration-ease-out-cubic"
                />
            </div>
            
            {winner && (
              <Card className="w-full max-w-md text-center animate-in fade-in zoom-in-95">
                <CardHeader>
                  <CardTitle>{t.winnerIs}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{winner.name}</p>
                </CardContent>
              </Card>
            )}

            {!winner && !isSpinning && (
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <CardTitle>{t.noWinner}</CardTitle>
                    </CardHeader>
                </Card>
            )}
        </div>

        <div className="flex flex-col gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>{t.participants} ({participants.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 mb-4">
                    <Input 
                        placeholder={t.participantName}
                        value={newParticipant}
                        onChange={(e) => setNewParticipant(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddParticipant()}
                        disabled={isSpinning}
                    />
                    <Button onClick={handleAddParticipant} disabled={isSpinning}>{t.add}</Button>
                    </div>
                    <ScrollArea className="h-64 pr-4">
                    {participants.length > 0 ? (
                        <div className="space-y-2">
                        {participants.map(p => (
                            <div key={p.name} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                    <Ticket className="w-4 h-4" />
                                </AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{p.name}</span>
                            </div>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleRemoveParticipant(p.name)}
                                disabled={isSpinning}
                                className="h-8 w-8"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground">
                        <p>{t.noParticipants}</p>
                        </div>
                    )}
                    </ScrollArea>
                </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Button size="lg" onClick={handleSpin} disabled={isSpinning || participants.length < 2}>
                {t.drawWinner}
              </Button>
              <Button size="lg" variant="outline" onClick={handleReset} disabled={isSpinning}>
                {t.reset}
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
