
export interface Resource {
    id: number;
    icon: string;
    name: {
      es: string;
      en: string;
    };
    planet: {
      es: string;
      en: string;
    };
    mission: {
        es: string;
        en: string;
    };
    notes: {
        es: string;
        en: string;
    }
  }
  
  const resources: Resource[] = [
    {
      id: 1,
      icon: '/images/resources/orokin-cell.png',
      name: { es: 'Célula Orokin', en: 'Orokin Cell' },
      planet: { es: 'Ceres / Deimos', en: 'Ceres / Deimos' },
      mission: { es: 'Gabii / Draco', en: 'Gabii / Draco' },
      notes: { es: 'Jefes: Sargas Ruk y Lech Kril', en: 'Bosses: Sargas Ruk & Lech Kril' },
    },
    {
      id: 2,
      icon: '/images/resources/plastids.png',
      name: { es: 'Plástidos', en: 'Plastids' },
      planet: { es: 'Saturno / Urano', en: 'Saturn / Uranus' },
      mission: { es: 'Helene / Ophelia', en: 'Helene / Ophelia' },
      notes: { es: 'Supervivencia es ideal', en: 'Survival is ideal' },
    },
    {
      id: 3,
      icon: '/images/resources/neurodes.png',
      name: { es: 'Neurodos', en: 'Neurodes' },
      planet: { es: 'Tierra / Deimos', en: 'Earth / Deimos' },
      mission: { es: 'Tikal / Tífon', en: 'Tikal / Typhon' },
      notes: { es: 'Excavación o contratos de Deimos', en: 'Excavation or Deimos bounties' },
    },
    {
      id: 4,
      icon: '/images/resources/mutagen-mass.png',
      name: { es: 'Masa Mutágena', en: 'Mutagen Mass' },
      planet: { es: 'Deimos / Vacío', en: 'Deimos / Void' },
      mission: { es: 'Terrorem / Taranis', en: 'Terrorem / Taranis' },
      notes: { es: 'Común en derelictos Orokin', en: 'Common in Orokin Derelicts' },
    },
    {
        id: 5,
        icon: '/images/resources/polymer-bundle.png',
        name: { es: 'Paquete de Polímero', en: 'Polymer Bundle' },
        planet: { es: 'Mercurio / Venus', en: 'Mercury / Venus' },
        mission: { es: 'Apollodorus / Malva', en: 'Apollodorus / Malva' },
        notes: { es: 'Muy común en las primeras zonas', en: 'Very common in early zones' },
    },
    {
        id: 6,
        icon: '/images/resources/gallium.png',
        name: { es: 'Galio', en: 'Gallium' },
        planet: { es: 'Marte / Urano', en: 'Mars / Uranus' },
        mission: { es: 'Ara / Assur', en: 'Ara / Assur' },
        notes: { es: 'Jefes: Sargento y Tyl Regor', en: 'Bosses: The Sergeant & Tyl Regor' },
    },
    {
        id: 7,
        icon: '/images/resources/morphics.png',
        name: { es: 'Morfos', en: 'Morphics' },
        planet: { es: 'Marte / Mercurio', en: 'Mars / Mercury' },
        mission: { es: 'Wahiba / Caloris', en: 'Wahiba / Caloris' },
        notes: { es: 'Esencial para muchas recetas', en: 'Essential for many recipes' },
    },
    {
        id: 8,
        icon: '/images/resources/argon-crystal.png',
        name: { es: 'Cristal de Argón', en: 'Argon Crystal' },
        planet: { es: 'Vacío', en: 'Void' },
        mission: { es: 'Taranis / Mot', en: 'Taranis / Mot' },
        notes: { es: '¡Decae cada 24 horas!', en: 'Decays every 24 hours!' },
    },
    {
        id: 9,
        icon: '/images/resources/tellurium.png',
        name: { es: 'Tellurio', en: 'Tellurium' },
        planet: { es: 'Urano / Neptuno', en: 'Uranus / Neptune' },
        mission: { es: 'Ophelia / Salacia', en: 'Ophelia / Salacia' },
        notes: { es: 'Solo en misiones de Archwing', en: 'Only in Archwing missions' },
    },
  ];
  
  export function getResources(): Resource[] {
    // For now, we will return placeholder icons.
    // In the future, you can replace these with the actual icons.
    return resources.map(r => ({ ...r, icon: `https://placehold.co/32x32.png`}));
  }
