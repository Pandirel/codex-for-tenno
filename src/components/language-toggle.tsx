'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";
  
export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Select onValueChange={(value: 'es' | 'en') => setLanguage(value)} defaultValue={language}>
            <SelectTrigger className="w-auto gap-2 border-0 bg-transparent shadow-none">
                <Globe className="h-4 w-4" />
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="en">English</SelectItem>
            </SelectContent>
        </Select>
    );
}
