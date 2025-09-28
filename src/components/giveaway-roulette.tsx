'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, Users, Trash2, Ticket } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

const initialParticipants = [
  'SpaceNinja_01', 'VoidRunner7', 'GrineerSlayer', 'CorpusHunterX',
  'TennoSpecter', 'LotusBlade', 'WarframeFanatic', 'OrokinGold'
];

export function GiveawayRoulette() {
  const { translations } = useLanguage();
  const t = translations;

  const [participants, setParticipants] = useState<string[]>(initialParticipants);
  const [newParticipant, setNewParticipant] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [spinDuration, setSpinDuration] = useState(0);
  const [rotation, setRotation] = useState(0);

  const addParticipant = () => {
    if (newParticipant.trim() && !participants.includes(newParticipant.trim())) {
      setParticipants([...participants, newParticipant.trim()]);
      setNewParticipant('');
    }
  };
  
  const removeParticipant = (name: string) => {
    setParticipants(participants.filter(p => p !== name));
  };

  const spin = () => {
    if (participants.length < 2) return;
    setIsSpinning(true);
    setWinner(null);
    
    const totalParticipants = participants.length;
    const winnerIndex = Math.floor(Math.random() * totalParticipants);
    const winnerName = participants[winnerIndex];
    
    const baseRotations = 5;
    const itemAngle = 360 / totalParticipants;
    // We adjust the angle to point to the middle of the segment
    const winnerAngle = winnerIndex * itemAngle + itemAngle / 2;
    
    const randomOffset = (Math.random() - 0.5) * itemAngle * 0.8;
    const finalRotation = (baseRotations * 360) + (360 - winnerAngle) + randomOffset;
    
    const duration = 6000 + Math.random() * 2000;
    setSpinDuration(duration);
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWinner(winnerName);
    }, duration);
  };
  
  const wheelStyle = {
    '--rotation': `${rotation}deg`,
    '--spin-duration': `${spinDuration}ms`,
  } as React.CSSProperties;

  const itemAngle = 360 / (participants.length || 1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 flex flex-col items-center justify-center gap-8 p-4">
        <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]">
          <div 
            className={cn("absolute inset-0 rounded-full border-4 border-primary/50 transition-transform", isSpinning && 'animate-spin-roulette duration-ease-out-cubic')} 
            style={wheelStyle}
          >
            {participants.map((name, index) => {
              const angle = itemAngle * index;
              const textAngle = -90 - (itemAngle / 2);
              return (
                <div 
                  key={name}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div 
                    className="absolute w-1/2 h-1/2 top-1/4 left-1/4 origin-bottom-left flex items-center justify-center"
                    style={{ transform: `rotate(${itemAngle/2}deg)`}}
                  >
                    <span 
                      className="text-sm md:text-base font-semibold text-foreground/80 transform -translate-y-1/2"
                      style={{ transform: `rotate(${textAngle}deg) translateY(-140px) ` }}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center">
              <Ticket className="w-10 h-10 sm:w-16 sm:h-16 text-primary" />
            </div>
          </div>
          <div 
            className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 text-accent"
            style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }}
          >
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <polygon points="100,50 20,0 20,100" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button onClick={spin} disabled={isSpinning || participants.length < 2} size="lg" className="px-16 py-8 text-2xl font-bold">
            {isSpinning ? t.giveaway.spinning : t.giveaway.spin}
          </Button>
          {winner && !isSpinning && (
            <Card className="mt-4 text-center bg-primary/10 border-primary animate-in fade-in zoom-in-95">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{t.giveaway.winnerTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl sm:text-5xl font-bold text-primary font-headline">{winner}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Card className="lg:sticky lg:top-24">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5"/>
            {t.giveaway.participants}
            <Badge variant="secondary" className="ml-auto">{participants.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Input 
                value={newParticipant}
                onChange={(e) => setNewParticipant(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addParticipant()}
                placeholder={t.giveaway.addParticipant}
                disabled={isSpinning}
              />
              <Button onClick={addParticipant} disabled={isSpinning} size="icon">
                <User className="w-4 h-4"/>
              </Button>
            </div>
            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2">
              {participants.map(name => (
                <div key={name} className="flex items-center gap-2 bg-muted/50 p-2 rounded-md text-sm">
                  <span className="flex-1 truncate">{name}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 text-muted-foreground hover:text-destructive"
                    onClick={() => removeParticipant(name)}
                    disabled={isSpinning}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
