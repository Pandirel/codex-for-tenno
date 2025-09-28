
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/language-context';
import { X, Ticket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function GiveawayRoulette() {
  const { translations } = useLanguage();
  const t = translations.giveaway;
  const { toast } = useToast();
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleAddParticipant = () => {
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant('');
    } else if (participants.includes(newParticipant)) {
        toast({
            title: "Error",
            description: "Este participante ya está en la lista.",
            variant: "destructive",
        });
    }
  };

  const handleRemoveParticipant = (participant: string) => {
    setParticipants(participants.filter(p => p !== participant));
  };

  const handleSpin = () => {
    if (participants.length < 2) {
        toast({
            title: "Error",
            description: "Necesitas al menos 2 participantes para girar la ruleta.",
            variant: "destructive",
        });
        return;
    }
    // Lógica de giro y selección de ganador irá aquí
  };

  const handleReset = () => {
    setParticipants([]);
    setWinner(null);
    setIsSpinning(false);
  };
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
      {/* Columna de la Ruleta */}
      <div className="flex-grow flex flex-col items-center justify-center gap-4 w-full lg:w-2/3">
        <div 
          className="relative w-full max-w-[300px] md:max-w-[500px] aspect-square rounded-full border-4 border-primary/50 bg-card flex items-center justify-center"
        >
           <p className="text-muted-foreground">La ruleta aparecerá aquí</p>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleSpin} disabled={isSpinning || participants.length < 2}>
            {isSpinning ? t.spinning : t.spin}
          </Button>
          <Button onClick={handleReset} variant="outline">
            Resetear
          </Button>
        </div>
        {winner && !isSpinning && (
          <div className="text-center mt-4 p-4 bg-accent/10 border-2 border-dashed border-accent rounded-lg">
            <p className="text-sm font-bold text-accent">{t.winnerTitle}</p>
            <p className="text-4xl font-bold font-headline">{winner}</p>
          </div>
        )}
      </div>

      {/* Columna de Participantes */}
      <div className="w-full lg:w-1/3">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-bold font-headline mb-3">{t.participants} ({participants.length})</h3>
            <div className="flex gap-2 mb-4">
              <Input
                value={newParticipant}
                onChange={e => setNewParticipant(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddParticipant()}
                placeholder={t.addParticipant}
              />
              <Button onClick={handleAddParticipant}>Añadir</Button>
            </div>
            <ScrollArea className="h-96">
                <div className="space-y-2 pr-4">
                {participants.length > 0 ? (
                    participants.map(p => (
                    <div key={p} className="flex items-center justify-between bg-muted/50 p-2 rounded-md text-sm">
                        <span className="font-medium">{p}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleRemoveParticipant(p)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center text-center p-8 text-muted-foreground">
                        <Ticket className="h-12 w-12 mb-2" />
                        <p>Añade participantes para empezar el sorteo.</p>
                    </div>
                )}
                </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
