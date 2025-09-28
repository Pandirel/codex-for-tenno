'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, Users, Trash2, Ticket } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

const initialParticipants = [
  'SpaceNinja_01', 'VoidRunner7', 'GrineerSlayer', 'CorpusHunterX',
  'TennoSpecter', 'LotusBlade', 'WarframeFanatic', 'OrokinGold',
  'NovaPrimeFan', 'ExcalUmbra', 'MesaMain', 'SarynFTW'
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
    
    const winnerAngle = winnerIndex * itemAngle;
    
    const randomOffset = (Math.random() - 0.5) * itemAngle * 0.8;
    const finalRotation = (baseRotations * 360) + (360 - winnerAngle - itemAngle / 2) + randomOffset;
    
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
        <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px]">
          {/* The Pointer */}
          <div 
            className="absolute top-1/2 -right-4 -translate-y-1/2 z-20"
            style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }}
          >
             <svg width="40" height="40" viewBox="0 0 10 10" className="text-accent fill-current">
                <polygon points="0,5 8,0 8,10" />
            </svg>
          </div>
          
          <div 
            className={cn(
              "relative w-full h-full rounded-full border-2 border-border overflow-hidden",
              isSpinning && 'animate-spin-roulette duration-ease-out-cubic'
            )} 
            style={wheelStyle}
          >
            {participants.map((name, index) => {
              const angle = itemAngle * index;
              const bgColor = index % 2 === 0 ? 'bg-background' : 'bg-muted';
              
              return (
                <div
                  key={`${name}-${index}`}
                  className={cn(
                    "absolute w-1/2 h-1/2 origin-bottom-right",
                    bgColor
                  )}
                  style={{
                    transform: `rotate(${angle}deg)`,
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 0)` ,
                  }}
                >
                   <div
                    className="absolute w-full h-full border-l border-border/50"
                    style={{
                      transform: `rotate(${itemAngle}deg)`,
                      transformOrigin: 'bottom right',
                    }}
                  />
                  <div
                    className="absolute w-full h-full flex items-center justify-end pr-4 sm:pr-8"
                    style={{
                        transform: `rotate(${itemAngle / 2}deg) translate(-50%, -50%)`,
                        transformOrigin: 'bottom right',
                        top: '50%',
                        left: '50%'
                    }}
                  >
                    <span 
                      className="text-sm md:text-base font-semibold text-foreground/80 transform -rotate-90 origin-center whitespace-nowrap block"
                      style={{
                        transform: `translateX(-25%) rotate(${90 - itemAngle / 2}deg)`
                      }}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-card border-2 border-primary/50 shadow-lg flex items-center justify-center">
              <Ticket className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
            </div>
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
