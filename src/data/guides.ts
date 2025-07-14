export interface Guide {
  id: number;
  title: {
    en: string;
    es: string;
  };
  category: 'Steel Path' | 'Beginners' | 'Warframes' | 'Weapons';
  content: {
    en: string;
    es: string;
  };
}

const guides: Guide[] = [
  {
    id: 1,
    title: {
      es: 'Guía para Desbloquear el Camino de Acero en Warframe',
      en: 'Guide to Unlock the Steel Path in Warframe',
    },
    category: 'Steel Path',
    content: {
      es: `El Camino de Acero es el contenido "endgame" de Warframe, ofreciendo versiones mucho más difíciles de todas las misiones del mapa estelar, con enemigos con niveles incrementados (más de +100 niveles) y defensas mejoradas. A cambio, obtendrás Esencia de Acero, que se puede usar para comprar objetos valiosos de Teshin, incluyendo formas Umbra y modificaciones Galvanizadas.

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
      en: `The Steel Path is Warframe's "endgame" content, offering much harder versions of all missions on the star chart, with enemies having increased levels (over +100 levels) and enhanced defenses. In return, you'll get Steel Essence, which can be used to buy valuable items from Teshin, including Umbra Forma and Galvanized mods.

Main Requirements:
To unlock the Steel Path, you must meet the following requirements:

Complete ALL nodes on the "normal" Star Chart:

This means that every node on every planet, including moons and special zones, must be completed and marked blue on your star chart.

Notable exceptions: The assassination of Mutalist Alad V and Jordas Golem are generally not required. However, make sure you have all the others.

Special zones to consider:

Lua: Make sure you have completed all nodes on Lua.

Kuva Fortress: All nodes must be completed.

Deimos (Albrecht's Laboratories): It's important to complete the nodes that unlock after the "Whispers in the Walls" quest, as they may be a requirement for the Steel Path.

Zariman: You must have completed all nodes on the Zariman. This includes both normal mission nodes (not just circuit rewards) and finishing the "Angels of the Zariman" quest.

Complete Key Story Events (Quests):

Chimera Prologue: This quest is crucial as it unlocks and allows you to defeat the Ropalolyst, which in turn completes the necessary node.

Angels of the Zariman: Completing this quest is essential to unlock the Zariman nodes and, by extension, the Steel Path.

Have completed the three Duviri modes:

Although the Duviri Steel Path is independent of the star chart, to unlock general access to the Steel Path, it has been reported that you need to complete the Murmur Worm at least once in all three Duviri modes:

Circuit: At least one round.

Duviri Experience: Defeat the Worm.

Story Only: Defeat the Worm.

If you have trouble with Duviri, make sure each of these modes has been "recognized" as completed.

How to check if you're missing something?
Check your star chart: Look for any node that isn't blue. Incomplete nodes sometimes flash blue every few seconds.

Talk to Teshin: Once you think you've met all the requirements, go to any Relay and talk to Teshin (you'll find him in the Conclave area). He will offer you the "Steel Path Honors" option if you are ready. If not, he will tell you what requirements you are missing or that you are not ready yet.

Check your stats profile: In your profile, you can look for "Solar map missions" or similar to see your progress.

Consult the Arbiters of Hexis: Some players have reported that talking to the Arbiters of Hexis NPC can help refresh requirements or even fix some visual "bugs."

Once Unlocked:
Increased Difficulty: Be prepared for significantly stronger enemies, with +150% health, armor, and shields compared to normal versions, and a 100-level increase (50 in Archwing).

Rewards:

Steel Essence: Obtained by defeating Acolytes that appear during Steel Path missions (they appear randomly) and by completing Daily Steel Path Alerts (5 per day).

Emblems and Trophies: Upon completing each region of the star chart on the Steel Path.

Mastery: You can earn additional mastery by completing each Steel Path node for the first time.

Access to Teshin: Teshin will have a special Steel Path shop where you can spend your Steel Essence on:

Umbra Forma

Galvanized Mods

Veiled Rivens

Orbiter Decorations

And other rotating items.

Tips for the Steel Path:
Optimized Builds: Your builds need to be much more powerful. Prioritize base damage, critical chance, critical damage, and faction mods (Headhunter, etc.).

Warframe Armor: Invest in your Warframes' survivability with mods like Steel Fiber, Adaptation, Companion Guardian, and damage mitigation or crowd control abilities.

Companions: Companions with support skills or additional damage are very useful (e.g., Smeeta Kavat for double loot, Panzer Vulpaphyla for immortality and spore proliferation).

Use Galvanized Mods: Once you have access to them, use them to further enhance your weapons.

Team Compositions: Playing in a team makes things much easier. Coordinate with other Tenno to control enemies and maximize damage.

Good luck to you and your server on your journey through the Steel Path! It is a rewarding challenge that will test your skills and builds.`,
    },
  },
  {
    id: 2,
    title: {
      es: 'Guía para Nuevos Jugadores en Warframe',
      en: 'Guide for New Players in Warframe',
    },
    category: 'Beginners',
    content: {
      es: `¡Tus Primeros Pasos en el Sistema Origen!
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
      en: `Your First Steps in the Origin System!
Warframe is a sci-fi action game with RPG elements, ninja parkour, and lots of looting. At first, the amount of systems, currencies, and things to do can seem infinite, but with these steps, you'll get off to a good start.

1. The Tutorial and Initial Story: "Vor's Prize"
Follow the story: The first quest, "Vor's Prize," is your real tutorial. It will teach you the basics of movement, combat, the Mod system, and how your ship, the Orbiter, works.

Choose your initial Warframe: When you start, you'll be given a choice between Excalibur, Mag, and Volt.

Excalibur: A balanced warframe, with good damage and control abilities. Highly recommended for beginners for its versatility.

Mag: Specializes in manipulating shields and enemies, ideal for the Corpus. Requires a bit more understanding of her abilities.

Volt: Focused on speed and electrical damage, great for defense and area control missions.

Don't stress: You'll eventually be able to get the other two and many more Warframes, so there's no "wrong" choice.

2. Prioritize the Star Chart
Go planet by planet: Your main goal at the beginning is to unlock all the nodes on each planet of the star chart. Each planet has a series of mission nodes, and by completing them, you'll unlock the Junction that takes you to the next planet.

Junction Rewards: Junctions will give you very important rewards, like Warframe blueprints, key Mods, and segments for your Orbiter that unlock new functionalities (like the Foundry, the Store, the Mod Module, etc.).

Resources: By completing missions and advancing, you'll collect resources (Ferrite, Rubedo, Alloys, etc.) that are essential for crafting weapons, Warframes, and other items in your Orbiter's Foundry.

3. Understand the Mod System: Your Source of Power!
Mods are key: In Warframe, true power doesn't come from leveling up your Warframes and weapons, but from the Mods you equip and level up.

Types of Mods:

Base Damage: Mods like Serration (for rifles), Hornet Strike (for pistols), Pressure Point (for melee) are fundamental. Level them up as much as you can.

Elements: Combine heat, cold, electricity, and toxin mods to create combined elemental damages (e.g., Heat + Toxin = Viral Damage, very good against enemy health).

Survivability: For Warframes, mods like Vitality (health), Redirection (shields), and Steel Fiber (armor) are essential.

Efficiency/Duration/Range/Strength (Warframes): These mods directly affect your Warframe abilities. Experiment to see what works best with each one.

Mod Capacity: A Warframe's or weapon's mod capacity increases as it levels up. Slots with a polarity (specific symbols) reduce the cost of mods that match that polarity.

4. Spend Your Initial Platinum Wisely
Slots, Slots, Slots: Your initial 50 Platinum (the premium currency) should be used to buy Warframe slots and weapon slots. This is vital because your initial inventory is very limited, and you don't want to sell Warframes or weapons just to make space.

Avoid buying gear directly: Most Warframes and weapons can be crafted with in-game resources. Buying them with Platinum is an expensive shortcut for new players.

5. Join a Clan
Benefits: Clans offer access to exclusive Warframe, weapon, and archwing blueprints that can only be researched in the Clan Dojo.

Community: A good clan can be an invaluable source of advice, help with missions, and squadmates to play with. Look for active clans in the recruitment chat or on the forums.

6. Manage Your Resources and Crafting
The Foundry: Use the Foundry in your Orbiter to craft everything. Blueprints are obtained from missions, bosses, the store, the Dojo, etc.

Crafting Time: Items in the Foundry take time (Warframes 3 days, Warframe parts 12 hours, weapons 12 or 24 hours). Make sure you always have something crafting.

Don't sell everything: Some resources that seem useless at first will be vital later. If you're not sure, save them!

7. Complete the Quests
The story is great: Warframe has one of the best stories in gaming, but it's hidden behind quests. Follow the main questline (marked in your Codex) to unlock new mechanics, Warframes, and delve deeper into the lore.

Suggested order of main quests:

Vor's Prize (you'll have already done it).

The Second Dream

The War Within

Chains of Harrow

The Sacrifice

The New War

These are crucial for understanding the story and unlocking endgame content.

8. What is Mastery Rank (MR)?
Leveling up MR: Mastery Rank is your overall level in Warframe. You raise it by leveling up Warframes, weapons, companions, archwings, K-Drives, and completing star chart nodes.

MR Benefits: Each new rank gives you more initial mod capacity on your items (before adding Mods), more syndicate standing, more daily trades, and, most importantly, unlocks access to more weapons and Warframes.

"Farming MR": Once you level an item to 30, it gives you Mastery. Many players build and level up as many weapons and Warframes as possible to increase their MR quickly.

9. Don't Get Overwhelmed with Open World Content
Cetus (Plains of Eidolon) and Fortuna (Orb Vallis): Although accessible early, the content in these open-world areas (Eidolon hunting, Bounties, Fishing, Mining) is designed for players with stronger Mods and more developed gear.

Come back later: It's a good idea to visit them to unlock fast travel and some quests, but don't feel pressured to "farm" there until you have decent gear. The normal star chart is your initial priority.

10. Use the Warframe Wiki
Your best friend: The Warframe wiki (warframe.fandom.com) is an inexhaustible source of information. Don't know where to find a resource? How to get a Warframe? What a Mod does? The wiki has it all!

In-game chat: The Warframe community is generally very friendly and willing to help. Don't hesitate to ask in the in-game chat if you have questions.

Enjoy your journey, Tenno! Warframe is a game with a steep learning curve, but it's very rewarding once you get the hang of it. Take your time, experiment, and have fun.`,
    },
  },
];

export function getGuides(): Guide[] {
  return guides;
}
