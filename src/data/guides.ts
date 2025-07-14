export interface Guide {
  id: number;
  title: string;
  category: 'Steel Path' | 'Beginners' | 'Warframes' | 'Weapons';
  content: string;
}

const guides: Guide[] = [
  {
    id: 1,
    title: 'Guía para Desbloquear el Camino de Acero en Warframe',
    category: 'Steel Path',
    content: `El Camino de Acero es el contenido "endgame" de Warframe, ofreciendo versiones mucho más difíciles de todas las misiones del mapa estelar, con enemigos con niveles incrementados (más de +100 niveles) y defensas mejoradas. A cambio, obtendrás Esencia de Acero, que se puede usar para comprar objetos valiosos de Teshin, incluyendo formas Umbra y modificaciones Galvanizadas.

Requisitos Principales:
Para desbloquear el Camino de Acero, debes cumplir con los siguientes requisitos:

Completar TODOS los nodos del Mapa Estelar "normal":

Esto significa que cada nodo de cada planeta, incluyendo las lunas y zonas especiales, debe estar completado y marcado en azul en tu mapa estelar.

Excepciones notables: Generalmente, no se requiere el asesinato de Mutalist Alad V ni el de Jordas Golem. Sin embargo, asegúrate de tener todos los demás.

Zonas especiales a tener en cuenta:

Lua: Asegúrate de haber completado todos los nodos de Lua.

Fortaleza Kuva: Todos los nodos deben estar completados.

Deimos (Laboratorios de Albrecht): Es importante que completes los nodos que se desbloquean después de la aventura "Susurros en la Pared", ya que pueden ser un requisito para el Camino de Acero.

Zariman: Debes haber completado todos los nodos del Zariman. Esto incluye tanto los nodos normales de las misiones (no solo las recompensas del circuito) y haber terminado la aventura "Ángeles del Zariman".

Completar Acontecimientos Clave de la Historia (Aventuras):

Prólogo de la Quimera: Esta aventura es crucial ya que desbloquea y te permite derrotar al Ropolyst, lo que a su vez completa el nodo necesario.

Ángeles del Zariman: Completar esta aventura es fundamental para desbloquear los nodos de Zariman y, por extensión, el Camino de Acero.

Haber completado los tres modos de Duviri:

Aunque el Camino de Acero de Duviri es independiente del mapa estelar, para desbloquear el acceso general al Camino de Acero, se ha reportado que es necesario completar al menos una vez el Gusano de Murmur en los tres modos de Duviri:

Circuito: Al menos una ronda.

Experiencia Duviri: Derrotar al Gusano.

Solo Historia: Derrotar al Gusano.

Si tienes problemas con Duviri, asegúrate de que cada uno de estos modos se haya "reconocido" como completado.

¿Cómo verificar si te falta algo?
Revisa tu mapa estelar: Busca cualquier nodo que no esté azul. Los nodos incompletos a veces destellan en azul cada pocos segundos.

Habla con Teshin: Una vez que creas que has completado todos los requisitos, ve a cualquier Repetidor y habla con Teshin (lo encontrarás en el área de Conclave). Él te ofrecerá la opción de "Honores del Camino de Acero" si estás listo. Si no, te indicará qué requisitos te faltan o te dirá que aún no estás preparado.

Revisa tu perfil de estadísticas: En tu perfil, puedes buscar "Misiones del mapa solar" o similar para ver tu progreso.

Consulta a los Árbitros de Hexis: Algunos jugadores han reportado que hablar con el NPC de los Árbitros de Hexis puede ayudar a refrescar los requisitos o incluso solucionar algunos "bugs" visuales.

Una vez Desbloqueado:
Dificultad Aumentada: Prepárate para enemigos significativamente más fuertes, con un +150% de salud, armadura y escudos en comparación con las versiones normales, y un aumento de 100 niveles (50 en Archialas).

Recompensas:

Esencia de Acero: Se obtiene al derrotar a los Acólitos que aparecen durante las misiones del Camino de Acero (aparecen aleatoriamente) y al completar las Alertas Diarias del Camino de Acero (5 por día).

Emblemas y Trofeos: Al completar cada región del mapa estelar en el Camino de Acero.

Maestría: Puedes ganar maestría adicional al completar cada nodo del Camino de Acero por primera vez.

Acceso a Teshin: Teshin tendrá una tienda especial del Camino de Acero donde podrás gastar tu Esencia de Acero en:

Formas Umbra

Modificaciones Galvanizadas

Riven velados

Decoraciones para el Orbiter

Y otros objetos rotatorios.

Consejos para el Camino de Acero:
Builds Optimizadas: Tus builds deben ser mucho más potentes. Prioriza el daño base, la probabilidad de crítico, el daño de crítico, y mods de facción (Cazador de cabezas, etc.).

Armaduras de Warframe: Invierte en la supervivencia de tus Warframes con mods como Fibra de Acero, Adaptación, Guardián Acompañante, y habilidades de mitigación de daño o control de masas.

Compañeros: Los compañeros con habilidades de apoyo o daño adicional son muy útiles (ej. Smeeta Kavat para doble botín, Panzer Vulpaphyla para inmortalidad y proliferación de esporas).

Usa Modificaciones Galvanizadas: Una vez que tengas acceso a ellas, úsalas para potenciar aún más tus armas.

Composiciones de Equipo: Jugar en equipo facilita mucho las cosas. Coordínate con otros Tenno para controlar a los enemigos y maximizar el daño.

¡Mucha suerte a ti y a tu servidor en su travesía por el Camino de Acero! Es un desafío gratificante que pondrá a prueba sus habilidades y Builds.`,
  },
  {
    id: 2,
    title: 'Guía para Nuevos Jugadores en Warframe',
    category: 'Beginners',
    content: `¡Tus Primeros Pasos en el Sistema Origen!
Warframe es un juego de acción sci-fi con elementos de rol, parkour ninja y mucho looteo. Al principio, la cantidad de sistemas, monedas y cosas por hacer puede parecer infinita, pero con estos pasos, empezarás con el pie derecho.

1. El Tutorial y la Historia Inicial: "El Premio de Vor"
Sigue la historia: La primera aventura, "El Premio de Vor", es tu verdadero tutorial. Te enseñará las bases del movimiento, el combate, el sistema de Mods y cómo funciona tu nave, la Orbiter.

Elige tu Warframe inicial: Al empezar, se te dará a elegir entre Excalibur, Mag y Volt.

Excalibur: Un warframe equilibrado, con buenas habilidades de daño y control. Muy recomendado para principiantes por su versatilidad.

Mag: Se especializa en manipular escudos y enemigos, ideal para el Corpus. Requiere un poco más de entendimiento de sus habilidades.

Volt: Enfocado en la velocidad y el daño eléctrico, genial para misiones de defensa y control de área.

No te estreses: Eventualmente podrás conseguir los otros dos y muchos más Warframes, así que no hay una "mala" elección.

2. Prioriza el Mapa Estelar (Star Chart)
Avanza planeta por planeta: Tu objetivo principal al inicio es desbloquear todos los nodos en cada planeta del mapa estelar. Cada planeta tiene una serie de nodos de misión, y al completarlos, desbloquearás el Cruce (Junction) que te lleva al siguiente planeta.

Recompensas de Cruces: Los Cruces te darán recompensas muy importantes, como planos de Warframes, Mods clave y segmentos para tu Orbiter que desbloquean nuevas funcionalidades (como la Forja, la Tienda, el Módulo de Mods, etc.).

Recursos: Al completar misiones y avanzar, recolectarás recursos (Ferrita, Rubedo, Aleaciones, etc.) que son esenciales para fabricar armas, Warframes y otros objetos en la Forja de tu Orbiter.

3. Entiende el Sistema de Mods: ¡Tu Fuente de Poder!
Los Mods son clave: En Warframe, el verdadero poder no viene de subir de nivel tus Warframes y armas, sino de los Mods que les equipas y subes de nivel.

Tipos de Mods:

Daño base: Mods como Serración (para rifles), Punto de Impacto (para pistolas), Golpe de Furia (para cuerpo a cuerpo) son fundamentales. Súbelos lo más que puedas.

Elementos: Combina mods de calor, frío, electricidad y toxina para crear daños elementales combinados (por ejemplo, Calor + Toxina = Daño Viral, muy bueno contra la salud de los enemigos).

Supervivencia: Para Warframes, mods como Vitalidad (salud), Redirección (escudos) y Fibra de Acero (armadura) son esenciales.

Eficiencia/Duración/Rango/Fuerza (Warframes): Estos mods afectan directamente tus habilidades de Warframe. Experimenta para ver qué funciona mejor con cada uno.

Capacidad de Mods: La capacidad de mods de un Warframe o arma aumenta a medida que sube de nivel. Las ranuras con polaridad (símbolos específicos) reducen el coste de los mods que coinciden con esa polaridad.

4. Gasta tu Platinum Inicial Sabiamente
Slots, Slots, Slots: Tus 50 Platinum iniciales (la moneda premium) deben usarse para comprar ranuras de Warframe y ranuras de arma. Esto es vital porque tu inventario inicial es muy limitado, y no querrás vender Warframes o armas solo para hacer espacio.

Evita comprar equipo directamente: La mayoría de Warframes y armas se pueden fabricar con recursos del juego. Comprarlos con Platinum es un atajo caro para nuevos jugadores.

5. Únete a un Clan
Beneficios: Los clanes ofrecen acceso a planos de Warframes, armas y archialas exclusivas que solo se pueden investigar en el Dojo del Clan.

Comunidad: Un buen clan puede ser una fuente invaluable de consejos, ayuda en misiones y compañeros para jugar. Busca clanes activos en el chat de reclutamiento o en los foros.

6. Administra tus Recursos y Crafteo
La Forja: Usa la Forja en tu Orbiter para fabricar todo. Los planos se obtienen de misiones, jefes, la tienda, el Dojo, etc.

Tiempo de crafteo: Los objetos en la Forja toman tiempo (Warframes 3 días, partes de Warframe 12 horas, armas 12 o 24 horas). Asegúrate de tener siempre algo fabricándose.

No vendas todo: Algunos recursos que parecen inútiles al principio serán vitales más adelante. Si no estás seguro, ¡guárdalos!

7. Completa las Aventuras (Quests)
La historia es genial: Warframe tiene una de las mejores historias en los videojuegos, pero está escondida detrás de las aventuras. Sigue la línea de misiones principales (marcadas en tu Códex) para desbloquear nuevas mecánicas, Warframes y profundizar en el lore.

Orden sugerido de aventuras principales:

El Premio de Vor (ya lo habrás hecho).

El Segundo Sueño

La Guerra Interna

Cadenas de Harrow

El Sacrificio

La Nueva Guerra

Estas son cruciales para entender la historia y desbloquear contenido endgame.

8. ¿Qué es el Rango de Maestría (MR)?
Subiendo de MR: El Rango de Maestría es tu nivel general en Warframe. Lo subes al subir de nivel Warframes, armas, compañeros, archialas, K-Drives y completar nodos del mapa estelar.

Beneficios del MR: Cada nuevo rango te da más capacidad de mods inicial en tus objetos (antes de poner Mods), más espacio de sindicato, más canjes diarios y, lo más importante, desbloquea acceso a más armas y Warframes.

"Farmear MR": Una vez que subas un objeto a nivel 30, te da Maestría. Muchos jugadores construyen y suben de nivel la mayor cantidad posible de armas y Warframes para aumentar su MR rápidamente.

9. No te abrumes con el contenido Open World (Mundos Abiertos)
Cetus (Llanuras de Eidolon) y Fortuna (Valle del Orbe): Aunque son accesibles temprano, el contenido de estas zonas abiertas (Cazar Eidolons, Bounties, Pesca, Minería) está diseñado para jugadores con Mods más fuertes y equipo más desarrollado.

Vuelve más tarde: Es buena idea visitarlas para desbloquear los viajes rápidos y algunas aventuras, pero no te sientas presionado a "farmear" ahí hasta que tengas un equipo decente. El mapa estelar normal es tu prioridad inicial.

10. Usa el Wiki de Warframe
Tu mejor amigo: La wiki de Warframe (warframe.fandom.com) es una fuente inagotable de información. ¿No sabes dónde encontrar un recurso? ¿Cómo conseguir un Warframe? ¿Qué hace un Mod? ¡La wiki lo tiene todo!

Chat del juego: La comunidad de Warframe es generalmente muy amigable y dispuesta a ayudar. No dudes en preguntar en el chat del juego si tienes dudas.

¡Disfruta tu viaje, Tenno! Warframe es un juego con una curva de aprendizaje pronunciada, pero muy gratificante una vez que le agarras el truco. Tómate tu tiempo, experimenta y diviértete`,
  },
];

export function getGuides(): Guide[] {
  return guides;
}
