
export interface Guide {
  id: number;
  title: {
    en: string;
    es: string;
  };
  category: 'Steel Path' | 'Beginners' | 'Warframes' | 'Weapons' | 'Rivens';
  content: {
    en: string;
    es: string;
  };
}
