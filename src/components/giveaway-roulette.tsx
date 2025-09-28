
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
  
  const [participants, setParticipants] = useState<string[]>(['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8']);
  const [newParticipant, setNewParticipant] = useState('');
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);

  // New color palette inspired by the site's theme
  const colors = [
    'hsl(271, 45%, 55%)', // Lighter primary
    'hsl(203, 65%, 54%)', // accent
    'hsl(271, 45%, 45%)', // primary
    'hsl(203, 65%, 44%)', // Darker accent
    'hsl(0, 0%, 30%)',    // Muted dark
    'hsl(271, 45%, 35%)', // Darker primary
    'hsl(203, 65%, 64%)', // Lighter accent
    'hsl(0, 0%, 40%)'     // Lighter Muted dark
  ];

  const getFontSize = (numParticipants: number) => {
    if (numParticipants > 30) return 8;
    if (numParticipants > 20) return 10;
    if (numParticipants > 10) return 12;
    return 16;
  }

  const drawRoulette = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numParticipants = participants.length;
    const arc = (Math.PI * 2) / (numParticipants > 0 ? numParticipants : 1);
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(rotationRef.current);

    if (numParticipants > 0) {
      participants.forEach((participant, i) => {
        const angle = i * arc;
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius * 0.95, angle, angle + arc);
        ctx.lineTo(0, 0);
        ctx.fill();
        
        ctx.save();
        ctx.fillStyle = 'white';
        const fontSize = getFontSize(numParticipants);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const textAngle = angle + arc / 2;
        ctx.rotate(textAngle);
        
        const text = participant;
        const maxTextWidth = radius * 0.7;
        
        // Simple truncation if text is too long
        let shortenedText = text;
        while (ctx.measureText(shortenedText).width > maxTextWidth && shortenedText.length > 5) {
            shortenedText = shortenedText.slice(0, -1);
        }
        
        ctx.fillText(shortenedText, radius * 0.55, 0);
        ctx.restore();
      });
    }
    ctx.restore();

    // Draw the pointer
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(radius - 15, 0);
    ctx.lineTo(radius + 15, 0);
    ctx.lineTo(radius, 30);
    ctx.closePath();
    ctx.fill();

  }, [participants]);

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
    handleResize(); // Initial resize
    return () => window.removeEventListener('resize', handleResize);
  }, [drawRoulette]);
  
  useEffect(() => {
    drawRoulette();
  }, [participants, drawRoulette]);

  const handleAddParticipant = () => {
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant('');
    } else if (participants.includes(newParticipant)) {
        toast({
            title: t.addParticipantErrorTitle,
            description: t.addParticipantError,
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
            title: t.spinErrorTitle,
            description: t.spinError,
            variant: "destructive",
        });
        return;
    }
    setIsSpinning(true);
    setWinner(null);
    
    const numParticipants = participants.length;
    const arc = (2 * Math.PI) / numParticipants;
    const winnerIndex = Math.floor(Math.random() * numParticipants);
    
    const spinRotations = 5 + Math.random() * 5; // Total spins
    
    // The pointer is at the top (12 o'clock), which is -PI/2 or 1.5*PI in canvas radians.
    // The middle of the winning segment is at `winnerIndex * arc + arc / 2`.
    // We want to rotate so the middle of the winning segment ends up at 1.5*PI.
    // The angle needs to be negative to spin clockwise.
    const winnerAngle = winnerIndex * arc + arc / 2;
    // Add a small random offset to not always land in the exact center
    const randomOffset = (Math.random() - 0.5) * (arc * 0.8);
    const targetAngle = winnerAngle + randomOffset;

    const finalRotation = (spinRotations * 2 * Math.PI) - targetAngle + (1.5 * Math.PI);
    
    let start: number | null = null;
    const duration = 6000;
    const initialRotation = rotationRef.current % (Math.PI * 2);

    const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        
        const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuint(progress);

        const newRotation = initialRotation + (finalRotation - initialRotation) * easedProgress;
        rotationRef.current = newRotation;
        drawRoulette();
        
        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            rotationRef.current = finalRotation % (Math.PI * 2);
            drawRoulette();
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
    rotationRef.current = 0;
    drawRoulette();
  };
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
      <div className="flex-grow flex flex-col items-center justify-center gap-4 w-full lg:w-2/3">
        <div 
          className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
        >
           <canvas ref={canvasRef} />
            {winner && !isSpinning && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border-2 border-primary shadow-2xl animate-in fade-in-0 zoom-in-75 duration-500">
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
