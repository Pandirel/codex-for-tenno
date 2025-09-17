
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
      icon: '/images/resources/OrokinCell.webp',
      name: { es: 'Célula Orokin', en: 'Orokin Cell' },
      planet: { es: 'Ceres / Deimos', en: 'Ceres / Deimos' },
      mission: { es: 'Gabii / Draco', en: 'Gabii / Draco' },
      notes: { es: 'Jefes: Sargas Ruk y Lech Kril', en: 'Bosses: Sargas Ruk & Lech Kril' },
    },
    {
      id: 2,
      icon: '/images/resources/Plastids.webp',
      name: { es: 'Plástidos', en: 'Plastids' },
      planet: { es: 'Saturno / Urano', en: 'Saturn / Uranus' },
      mission: { es: 'Piscinas / Ophelia', en: 'Piscinas / Ophelia' },
      notes: { es: 'Supervivencia es ideal', en: 'Survival is ideal' },
    },
    {
      id: 3,
      icon: '/images/resources/Neurodes.webp',
      name: { es: 'Neurodos', en: 'Neurodes' },
      planet: { es: 'Tierra / Deimos', en: 'Earth / Deimos' },
      mission: { es: 'Tikal / Mariana', en: 'Tikal / Mariana' },
      notes: { es: 'Lo mejor es buscarlos en el mapa', en: 'Excavation or Deimos bounties' },
    },
    {
      id: 4,
      icon: '/images/resources/MutagenSample.webp',
      name: { es: 'Muestra Mutágena', en: 'Mutagen Sample' },
      planet: { es: 'Deimos / Eris', en: 'Deimos / Eris' },
      mission: { es: 'Terrorem / Xini', en: 'Terrorem / Xini' },
      notes: { es: 'Común en derelictos Orokin', en: 'Common in Orokin Derelicts' },
    },
    {
        id: 5,
        icon: '/images/resources/PolymerBundle.webp',
        name: { es: 'Paquete de Polímero', en: 'Polymer Bundle' },
        planet: { es: 'Urano / Venus', en: 'Urano / Venus' },
        mission: { es: 'Ophelia / Malva', en: 'Ophelia / Malva' },
        notes: { es: 'Urano es el mejor lugar para buscarlos', en: 'Urano is the best place to find them' },
    },
    {
        id: 6,
        icon: '/images/resources/Gallium.webp',
        name: { es: 'Galio', en: 'Gallium' },
        planet: { es: 'Marte / Urano', en: 'Mars / Uranus' },
        mission: { es: 'Hellas, Ara / Titania', en: 'Hellas, Ara / Titania' },
        notes: { es: 'Jefes: Sargento y Tyl Regor', en: 'Bosses: The Sergeant & Tyl Regor' },
    },
    {
        id: 7,
        icon: '/images/resources/Morphics.webp',
        name: { es: 'Mórficos', en: 'Morphics' },
        planet: { es: 'Marte / Fobos', en: 'Mars / Fobos' },
        mission: { es: 'Hellas / Zeugma', en: 'Hellas / Zeugma' },
        notes: { es: 'Esencial para muchas recetas', en: 'Essential for many recipes' },
    },
    {
        id: 8,
        icon: '/images/resources/ArgonCrystal.webp',
        name: { es: 'Cristal de Argón', en: 'Argon Crystal' },
        planet: { es: 'Vacío', en: 'Void' },
        mission: { es: 'Hepit / Mot', en: 'Hepit / Mot' },
        notes: { es: '¡Decae cada 24 horas!', en: 'Decays every 24 hours!' },
    },
    {
        id: 9,
        icon: '/images/resources/Tellurium.webp',
        name: { es: 'Tellurio', en: 'Tellurium' },
        planet: { es: 'Urano / Neptuno', en: 'Uranus / Neptune' },
        mission: { es: 'Ophelia / Salacia', en: 'Ophelia / Salacia' },
        notes: { es: 'Solo en misiones de Archwing', en: 'Only in Archwing missions' },
    },
  ];
  
  export function getResources(): Resource[] {
    return resources;
  }