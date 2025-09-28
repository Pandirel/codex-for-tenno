
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
  
  const [participants, setParticipants] = useState<string[]>(['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6']);
  const [newParticipant, setNewParticipant] = useState('');
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const colors = ['#FFC107', '#FF5722', '#4CAF50', '#2196F3', '#9C27B0', '#E91E63'];

  const drawRoulette = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numParticipants = participants.length;
    const arc = Math.PI * 2 / (numParticipants > 0 ? numParticipants : 1);
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(rotation);

    if (numParticipants > 0) {
      for (let i = 0; i < numParticipants; i++) {
        const angle = i * arc;
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius * 0.95, angle, angle + arc);
        ctx.lineTo(0, 0);
        ctx.fill();
        
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textAngle = angle + arc / 2;
        ctx.rotate(textAngle);
        const text = participants[i];
        const maxTextWidth = radius * 0.7;
        let fontSize = 16;
        ctx.font = `bold ${fontSize}px Arial`;
        while (ctx.measureText(text).width > maxTextWidth && fontSize > 8) {
            fontSize--;
            ctx.font = `bold ${fontSize}px Arial`;
        }
        ctx.fillText(text, radius * 0.55, 0);
        ctx.restore();
      }
    }
    ctx.restore();

    // Draw pointer
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(radius - 15, 0);
    ctx.lineTo(radius + 15, 0);
    ctx.lineTo(radius, 30);
    ctx.closePath();
    ctx.fill();

  }, [participants, rotation]);

  useEffect(() => {
    const handleResize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const container = canvas.parentElement;
        if (container) {
            const size = Math.min(container.clientWidth, 500);
            canvas.width = size;
            canvas.height = size;
            drawRoulette();
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [drawRoulette]);

  useEffect(() => {
    drawRoulette();
  }, [participants, rotation, drawRoulette]);


  const handleAddParticipant = () => {
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant('');
    } else if (participants.includes(newParticipant)) {
        toast({
            title: "Error",
            description: t.add,
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
            description: t.addParticipantError,
            variant: "destructive",
        });
        return;
    }
    setIsSpinning(true);
    setWinner(null);
    
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const arc = (2 * Math.PI) / participants.length;
    
    // The pointer is at the top (-90 degrees or -PI/2).
    // The start of slice 0 is at 0 degrees.
    // We want the middle of the winner's slice to be under the pointer.
    // Middle of winner's slice is at angle: `(winnerIndex * arc) + (arc / 2)`
    // To align this angle with the top pointer, we need to rotate by -that_angle.
    // The top pointer is at -PI/2, so the final rotation should be:
    const stopAngle = (winnerIndex * arc) + (arc / 2);
    const finalAngle = -stopAngle + (Math.PI / 2);

    const randomSpins = 5 + Math.random() * 5; // 5 to 10 full spins
    const targetRotation = (Math.PI * 2 * randomSpins) + finalAngle;


    let start: number | null = null;
    const duration = 5000; // 5 seconds spin
    const initialRotation = rotation % (Math.PI * 2);

    const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
        const t = Math.min(progress / duration, 1);
        const easedT = easeOutQuint(t);

        const newRotation = initialRotation + (targetRotation - initialRotation) * easedT;
        setRotation(newRotation);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            setRotation(targetRotation % (Math.PI * 2));
            setWinner(participants[winnerIndex]);
            setIsSpinning(false);
        }
    };

    requestAnimationFrame(animate);
  };

  const handleReset = () => {
    setParticipants([]);
    setWinner(null);
    setIsSpinning(false);
    setRotation(0);
  };
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
      {/* Columna de la Ruleta */}
      <div className="flex-grow flex flex-col items-center justify-center gap-4 w-full lg:w-2/3">
        <div 
          className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
        >
           <canvas ref={canvasRef} />
            {winner && !isSpinning && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border-2 border-accent shadow-2xl animate-in fade-in-0 zoom-in-75 duration-500">
                        <p className="text-lg font-bold text-accent">{t.winnerTitle}</p>
                        <p className="text-5xl font-bold font-headline tracking-tight">{winner}</p>
                    </div>
                </div>
            )}
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleSpin} disabled={isSpinning || participants.length < 2}>
            {isSpinning ? t.spinning : t.spin}
          </Button>
          <Button onClick={handleReset} variant="outline">
            {t.reset}
          </Button>
        </div>
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
              <Button onClick={handleAddParticipant}>{t.add}</Button>
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
                        <p>{t.addParticipantsPrompt}</p>
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
