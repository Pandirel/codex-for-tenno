'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'en' | 'es';

const textContent = {
  es: {
    nav: [
      { href: '/', label: 'Guías' },
      { href: '/farming', label: 'Recursos' },
    ],
    guides: {
        searchPlaceholder: 'Buscar una guía...',
        readMore: 'Leer Más',
        noGuidesFound: 'No se encontraron guías para tu búsqueda.',
        noGuidesFoundHint: 'Intenta ajustar tu búsqueda o filtros.',
    },
    farming: {
        title: 'Tabla de Farmeo de Recursos',
        description: 'Encuentra las mejores ubicaciones para farmear los recursos más importantes.',
        resource: 'Recurso',
        planet: 'Planeta',
        mission: 'Misión Recomendada',
        notes: 'Notas',
    },
    language: 'Idioma'
  },
  en: {
    nav: [
        { href: '/', label: 'Guides' },
        { href: '/farming', label: 'Resources' },
    ],
    guides: {
        searchPlaceholder: 'Search for a guide...',
        readMore: 'Read More',
        noGuidesFound: 'No guides found for your query.',
        noGuidesFoundHint: 'Try adjusting your search or filters.',
    },
    farming: {
        title: 'Resource Farming Table',
        description: 'Find the best locations to farm the most important resources.',
        resource: 'Resource',
        planet: 'Planet',
        mission: 'Recommended Mission',
        notes: 'Notes',
    },
    language: 'Language'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: typeof textContent.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'es')) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
  };
  
  const translations = textContent[language] || textContent.es;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
