
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

export function GiveawayRoulette() {
  const { translations } = useLanguage();
  const t = translations.giveaway;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [participants, setParticipants] = useState<string[]>(['Tenno1', 'Lotus', 'Teshin', 'Ordis', 'Varzia', 'Maroo', 'Clem', 'Konzu']);
  const [newParticipant, setNewParticipant] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [currentAngle, setCurrentAngle] = useState(0);
  const { toast } = useToast();

  const colors = ["#6366F1", "#EC4899", "#8B5CF6", "#10B981", "#F59E0B", "#3B82F6"];

  const getCanvasStyles = () => {
    if (typeof window === 'undefined') return { bg: '#1c1c1c', muted: '#3a3a3a', text: '#ffffff' };
    const styles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains('dark');
    return {
        bg: isDark ? `hsl(var(--background))` : `hsl(var(--card))`,
        muted: isDark ? `hsl(var(--muted))` : `hsl(var(--secondary))`,
        text: `hsl(var(--foreground))`,
        primary: `hsl(var(--primary))`,
        accent: `hsl(var(--accent))`,
        border: `hsl(var(--border))`,
    };
  };

  const drawRoulette = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const numParticipants = participants.length;
    if (numParticipants === 0) return;

    const arcSize = (2 * Math.PI) / numParticipants;
    const { width, height } = canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 10;
    const styles = getCanvasStyles();

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(currentAngle);
    
    for (let i = 0; i < numParticipants; i++) {
        const angle = i * arcSize;
        ctx.beginPath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, angle, angle + arcSize);
        ctx.closePath();
        ctx.fill();

        ctx.save();
        ctx.strokeStyle = styles.border;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = styles.text;
        ctx.font = 'bold 14px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textAngle = angle + arcSize / 2;
        ctx.rotate(textAngle);
        ctx.fillText(participants[i], radius / 1.6, 0, radius / 2);
        ctx.restore();
    }

    ctx.restore();

    // Draw pointer
    ctx.fillStyle = styles.accent;
    ctx.beginPath();
    ctx.moveTo(centerX - 15, 10);
    ctx.lineTo(centerX + 15, 10);
    ctx.lineTo(centerX, 40);
    ctx.closePath();
    ctx.fill();

  }, [participants, currentAngle, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
        const container = canvas.parentElement;
        if(container) {
            const size = Math.min(container.clientWidth, 500);
            canvas.width = size;
            canvas.height = size;
            drawRoulette();
        }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
        window.removeEventListener('resize', resizeCanvas);
    };
  }, [drawRoulette]);


  useEffect(() => {
    drawRoulette();
  }, [drawRoulette]);

  const handleAddParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newParticipant && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant('');
    } else if (participants.includes(newParticipant)) {
        toast({
            title: "Error",
            description: "This participant is already in the list.",
            variant: "destructive",
        })
    }
  };

  const removeParticipant = (name: string) => {
    setParticipants(participants.filter(p => p !== name));
  };

  const handleSpin = () => {
    if (isSpinning || participants.length < 2) return;
    setIsSpinning(true);
    setWinner(null);
    
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winnerName = participants[winnerIndex];
    
    const arcSize = (2 * Math.PI) / participants.length;
    const winnerAngle = winnerIndex * arcSize;
    
    const randomOffset = (Math.random() - 0.5) * arcSize * 0.8;
    const targetAngle = -winnerAngle - arcSize / 2 + randomOffset;

    const baseSpins = 5;
    const rotation = (2 * Math.PI * baseSpins) + targetAngle;

    const duration = 5000;
    let startTime: number | null = null;
    const startAngle = currentAngle % (2 * Math.PI);

    const spinAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOut(progress);

        const newAngle = startAngle + (rotation - startAngle) * easedProgress;
        setCurrentAngle(newAngle);

        if (progress < 1) {
            requestAnimationFrame(spinAnimation);
        } else {
            setCurrentAngle(rotation % (2 * Math.PI));
            setIsSpinning(false);
            setWinner(winnerName);
        }
    };
    requestAnimationFrame(spinAnimation);
  };
  
  const handleReset = () => {
    setParticipants([]);
    setWinner(null);
    setIsSpinning(false);
    setCurrentAngle(0);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
      <div className="flex-grow w-full lg:w-auto flex flex-col items-center gap-6">
        <div className="relative w-full max-w-[500px] aspect-square mx-auto">
            <canvas ref={canvasRef} />
        </div>
        <div className="flex gap-4">
            <Button onClick={handleSpin} disabled={isSpinning || participants.length < 2} size="lg" className="px-12 py-6 text-xl">
                {isSpinning ? t.spinning : t.spin}
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg">Reset</Button>
        </div>
        {winner && (
          <div className="text-center mt-4 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold text-muted-foreground">{t.winnerTitle}</h3>
            <p className="text-4xl font-headline text-primary tracking-wider animate-pulse">{winner}</p>
          </div>
        )}
      </div>

      <Card className="w-full lg:max-w-sm">
        <CardHeader>
          <CardTitle>{t.participants} ({participants.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddParticipant} className="flex gap-2 mb-4">
            <Input 
              value={newParticipant}
              onChange={(e) => setNewParticipant(e.target.value)}
              placeholder={t.addParticipant}
              disabled={isSpinning}
            />
            <Button type="submit" disabled={isSpinning}>Add</Button>
          </form>
          <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
            {participants.map((p, i) => (
                <Badge key={i} variant="secondary" className="flex justify-between items-center w-full p-2 text-base">
                    <span>{p}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeParticipant(p)} disabled={isSpinning}>
                        <X className="h-4 w-4"/>
                    </Button>
                </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
