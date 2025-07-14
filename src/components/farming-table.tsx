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

export function FarmingTable({ resources }: { resources: Resource[] }) {
  const { language, translations } = useLanguage();
  const t = translations.farming;

  return (
    <div className="flex flex-col gap-8">
        <div>
            <h2 className="text-3xl font-bold font-headline tracking-tight">{t.title}</h2>
            <p className="text-muted-foreground mt-2">{t.description}</p>
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
