
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Resource } from '@/data/resources';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function FarmingTable({ resources }: { resources: Resource[] }) {
  const { language, translations } = useLanguage();
  const t = translations.farming;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">{t.title}</h2>
        <p className="text-muted-foreground mt-2">{t.description}</p>
      </div>

      {/* Tarjetas para vista móvil */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {resources.map((resource) => (
          <Card key={resource.id} className="overflow-hidden">
            <div className="flex items-center justify-between p-4">
              <div className="flex-1 pr-4">
                <CardTitle className="text-xl font-headline mb-4">{resource.name[language]}</CardTitle>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{t.planet}</p>
                    <p>{resource.planet[language]}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{t.mission}</p>
                    <p>{resource.mission[language]}</p>
                  </div>
                  {resource.notes[language] && (
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">{t.notes}</p>
                      <Badge variant="outline">{resource.notes[language]}</Badge>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0">
                <Image 
                  src={resource.icon} 
                  alt={resource.name[language]} 
                  width={80} 
                  height={80} 
                  className="rounded-lg object-contain"
                  data-ai-hint="resource icon"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tabla para vista de escritorio */}
      <div className="hidden rounded-lg border md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16"></TableHead>
              <TableHead className="min-w-[200px]">{t.resource}</TableHead>
              <TableHead>{t.planet}</TableHead>
              <TableHead>{t.mission}</TableHead>
              <TableHead className="text-right">{t.notes}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell>
                  <Image 
                    src={resource.icon} 
                    alt={resource.name[language]} 
                    width={32} 
                    height={32} 
                    className="rounded-full"
                    data-ai-hint="resource icon"
                  />
                </TableCell>
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
