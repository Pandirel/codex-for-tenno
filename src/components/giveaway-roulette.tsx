
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { User } from 'lucide-react';

export function GiveawayRoulette() {
  const { translations } = useLanguage();
  const t = translations.giveaway;
  
  const [participants, setParticipants] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);

  const colors = [
    'hsl(271, 45%, 45%)', 
    'hsl(203, 65%, 54%)',
    'hsl(0, 0%, 24%)',
    'hsl(271, 45%, 35%)',
    'hsl(203, 65%, 44%)',
    'hsl(0, 0%, 16%)',
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

    const numParticipants = participants.length > 0 ? participants.length : 1;
    const arc = (Math.PI * 2) / numParticipants;
    const radius = canvas.width / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(rotationRef.current);

    if (participants.length > 0) {
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
        const fontSize = getFontSize(participants.length);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const textAngle = angle + arc / 2;
        ctx.rotate(textAngle);
        
        let shortenedText = participant;
        const maxTextWidth = radius * 0.7;
        while (ctx.measureText(shortenedText).width > maxTextWidth && shortenedText.length > 5) {
            shortenedText = shortenedText.slice(0, -1);
        }
        
        ctx.fillText(shortenedText, radius * 0.55, 0);
        ctx.restore();
      });
    } else {
        ctx.beginPath();
        ctx.fillStyle = 'hsl(0, 0%, 24%)';
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius * 0.95, 0, Math.PI * 2);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.font = `bold 20px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(t.waiting, 0, 0);
        ctx.restore();
    }
    ctx.restore();

    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(radius - 15, 0);
    ctx.lineTo(radius + 15, 0);
    ctx.lineTo(radius, 30);
    ctx.closePath();
    ctx.fill();

  }, [participants, t.waiting]);

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
  }, [participants, drawRoulette]);

  const handleSpin = () => {
    if (participants.length < 2) return;

    setIsSpinning(true);
    setWinner(null);
    
    const numParticipants = participants.length;
    const arc = (2 * Math.PI) / numParticipants;
    const winnerIndex = Math.floor(Math.random() * numParticipants);
    
    const spinRotations = 8 + Math.random() * 4; 
    
    const winnerAngle = winnerIndex * arc + arc / 2;
    const randomOffset = (Math.random() - 0.5) * (arc * 0.8);
    const finalAngleInRadians = winnerAngle + randomOffset;

    const targetRotation = (spinRotations * 2 * Math.PI) - finalAngleInRadians + (1.5 * Math.PI);
    
    let start: number | null = null;
    const duration = 7000;
    const initialRotation = rotationRef.current % (Math.PI * 2);

    const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        
        const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuint(progress);

        const newRotation = initialRotation + (targetRotation - initialRotation) * easedProgress;
        rotationRef.current = newRotation;
        drawRoulette();
        
        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            rotationRef.current = targetRotation % (Math.PI * 2);
            drawRoulette();
            setWinner(participants[winnerIndex]);
            setIsSpinning(false);
        }
    };

    requestAnimationFrame(animate);
  };

  const handleReset = () => {
    setWinner(null);
    setIsSpinning(false);
    setParticipants([]);
    rotationRef.current = 0;
    // A slight delay to ensure state is updated before redrawing
    setTimeout(() => drawRoulette(), 0);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
      <div className="md:col-span-2 flex flex-col items-center justify-center gap-8">
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
      <div className="md:col-span-1">
        <Card className="h-full max-h-[600px] flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <User />
                    {t.participantsTitle} ({participants.length})
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
                <ScrollArea className="h-full pr-4">
                    <div className="space-y-2">
                        {participants.map((p, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm p-2 rounded-md bg-muted/50">
                                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                                <span className="font-medium">{p}</span>
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
