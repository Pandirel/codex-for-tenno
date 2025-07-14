'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from '@/components/ui/badge';
import type { Resource } from '@/data/resources';

export function FarmingTable({ resources }: { resources: Resource[] }) {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  const translations = {
    es: {
      title: 'Tabla de Farmeo de Recursos',
      description: 'Encuentra las mejores ubicaciones para farmear los recursos más importantes.',
      resource: 'Recurso',
      planet: 'Planeta',
      mission: 'Misión Recomendada',
      notes: 'Notas',
      language: 'Idioma'
    },
    en: {
      title: 'Resource Farming Table',
      description: 'Find the best locations to farm the most important resources.',
      resource: 'Resource',
      planet: 'Planet',
      mission: 'Recommended Mission',
      notes: 'Notes',
      language: 'Language'
    }
  };

  const t = translations[language];

  return (
    <div className="flex flex-col gap-8">
        <div>
            <h2 className="text-3xl font-bold font-headline tracking-tight">{t.title}</h2>
            <p className="text-muted-foreground mt-2">{t.description}</p>
        </div>

      <div className='flex justify-end'>
        <div className='w-full max-w-xs'>
              <Select onValueChange={(value: 'es' | 'en') => setLanguage(value)} defaultValue={language}>
                <SelectTrigger>
                  <SelectValue placeholder={t.language} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
          </div>
      </div>
      
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">{t.resource}</TableHead>
              <TableHead>{t.planet}</TableHead>
              <TableHead>{t.mission}</TableHead>
              <TableHead className="text-right">{t.notes}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">{resource.name[language]}</TableCell>
                <TableCell>{resource.planet[language]}</TableCell>
                <TableCell>{resource.mission[language]}</TableCell>
                <TableCell className="text-right">
                  {resource.notes[language] && <Badge variant="outline">{resource.notes[language]}</Badge>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
