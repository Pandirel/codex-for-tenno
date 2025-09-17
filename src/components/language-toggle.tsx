
'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
  } from "@/components/ui/select"
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
  
export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Select onValueChange={(value: 'es' | 'en') => setLanguage(value)} defaultValue={language}>
            <SelectTrigger 
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "w-10 h-10 p-0 hover:bg-transparent"
              )}
              hideChevron={true}
            >
                  <Globe className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle language</span>
            </SelectTrigger>
            <SelectContent align="end" className="min-w-0 w-auto">
                <SelectItem value="es">Es</SelectItem>
                <SelectItem value="en">En</SelectItem>
            </SelectContent>
        </Select>
    );
}
