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
        description: 'Encuentra las mejores ubicaciones para farmear los recursos más importantes. Para más información, revisa la',
        wikiLinkText: 'wiki',
        resource: 'Recurso',
        planet: 'Planeta',
        mission: 'Misión Recomendada',
        notes: 'Notas',
    },
    footer: {
      mainText: 'Construido por un Tenno. El futuro de la orientación en Warframe está aquí.',
      tooltipText: 'Estas son mini guías y consejos para jugadores que inician su aventura en Warframe.',
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
        description: 'Find the best locations to farm the most important resources. For more information, check the',
        wikiLinkText: 'wiki',
        resource: 'Resource',
        planet: 'Planet',
        mission: 'Recommended Mission',
        notes: 'Notes',
    },
    footer: {
      mainText: 'Built by a Tenno. The future of Warframe guidance is here.',
      tooltipText: 'These are mini guides and tips for players starting their adventure in Warframe.',
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLanguage = localStorage.getItem('language') as Language | null;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'es')) {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    if (newLanguage === 'en' || newLanguage === 'es') {
      setLanguageState(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };
  
  const translations = textContent[language] || textContent.es;

  // Render children only after the component has mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

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
