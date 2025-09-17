
export interface Guide {
  id: number;
  title: {
    en: string;
    es: string;
  };
  category: 'Steel Path' | 'Beginners' | 'Warframes' | 'Weapons' | 'Rivens';
  creationDate: string;
  content: {
    en: string;
    es: string;
  };
}
