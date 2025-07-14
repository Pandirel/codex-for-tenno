export const getCategoryTranslation = (category: string, language: 'en' | 'es'): string => {
  if (language === 'en') {
    return category;
  }

  const translations: { [key: string]: string } = {
    'All': 'Todos',
    'Steel Path': 'Camino de Acero',
    'Beginners': 'Principiantes',
    'Warframes': 'Warframes',
    'Weapons': 'Armas',
  };

  return translations[category] || category;
};
