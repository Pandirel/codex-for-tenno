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
      es: `
<p>El Camino de Acero es el contenido "endgame" de Warframe, ofreciendo versiones mucho más difíciles de todas las misiones del mapa estelar. A cambio, obtendrás Esencia de Acero para comprar objetos valiosos.</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe steel path" alt="Banner del Camino de Acero" class="rounded-lg my-4"/>
<h3>Requisitos Principales ✅</h3>
<p>Para desbloquear el Camino de Acero, debes cumplir con los siguientes requisitos:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Completar TODOS los nodos del Mapa Estelar "normal":</b> Esto significa que cada nodo de cada planeta, incluyendo lunas y zonas especiales, debe estar completado.</li>
    <li><b>Zonas especiales a tener en cuenta:</b> Lua, Fortaleza Kuva, Deimos (Laboratorios de Albrecht) y Zariman deben estar completamente explorados.</li>
    <li><b>Completar Aventuras Clave:</b> "Prólogo de la Quimera" y "Ángeles del Zariman" son cruciales.</li>
    <li><b>Completar los tres modos de Duviri:</b> Es necesario completar al menos una vez el Gusano de Murmur en el Circuito, Experiencia Duviri y Solo Historia.</li>
</ul>
<h3>¿Cómo verificar si te falta algo? 🤔</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Revisa tu mapa estelar:</b> Busca cualquier nodo que no esté azul.</li>
    <li><b>Habla con Teshin:</b> En cualquier Repetidor, Teshin te dirá si estás listo o qué te falta.</li>
</ul>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe teshin" alt="Teshin en el repetidor" class="rounded-lg my-4"/>
<h3>Una vez Desbloqueado 💥</h3>
<p>Prepárate para enemigos significativamente más fuertes, con +150% de salud, armadura y escudos.</p>
<h4>Recompensas Notables:</h4>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Esencia de Acero:</b> Se obtiene de Acólitos y Alertas Diarias.</li>
    <li><b>Modificaciones Galvanizadas:</b> Esenciales para el meta de daño actual.</li>
    <li><b>Formas Umbra:</b> Para maximizar tus Warframes Prime y Umbra.</li>
</ul>
<h3>Consejos para el Camino de Acero 📝</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Builds Optimizadas:</b> Prioriza daño viral, cortante, y mods de facción.</li>
    <li><b>Supervivencia:</b> Usa mods como Adaptación y Guardián Acompañante.</li>
    <li><b>Compañeros:</b> El Panzer Vulpaphyla es una excelente opción por su inmortalidad y esporas virales.</li>
    <li><b>Juega en equipo:</b> Coordinarse con otros Tenno facilita mucho las cosas.</li>
</ul>
<p>¡Mucha suerte, Tenno!</p>`,
      en: `
<p>The Steel Path is Warframe's "endgame" content, offering much harder versions of all missions on the star chart. In return, you'll get Steel Essence to buy valuable items from Teshin.</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe steel path" alt="Steel Path Banner" class="rounded-lg my-4"/>
<h3>Main Requirements ✅</h3>
<p>To unlock the Steel Path, you must meet the following requirements:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Complete ALL nodes on the "normal" Star Chart:</b> This means every node on every planet, including moons and special zones, must be completed.</li>
    <li><b>Special zones to consider:</b> Lua, Kuva Fortress, Deimos (Albrecht's Laboratories), and the Zariman must be fully explored.</li>
    <li><b>Complete Key Quests:</b> "Chimera Prologue" and "Angels of the Zariman" are crucial.</li>
    <li><b>Complete the three Duviri modes:</b> You need to complete the Murmur Worm at least once in The Circuit, The Duviri Experience, and The Lone Story.</li>
</ul>
<h3>How to check if you're missing something? 🤔</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Check your star chart:</b> Look for any node that isn't blue.</li>
    <li><b>Talk to Teshin:</b> In any Relay, Teshin will tell you if you are ready or what you are missing.</li>
</ul>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe teshin" alt="Teshin in the relay" class="rounded-lg my-4"/>
<h3>Once Unlocked 💥</h3>
<p>Be prepared for significantly stronger enemies, with +150% health, armor, and shields.</p>
<h4>Notable Rewards:</h4>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Steel Essence:</b> Obtained from Acolytes and Daily Alerts.</li>
    <li><b>Galvanized Mods:</b> Essential for the current damage meta.</li>
    <li><b>Umbra Forma:</b> To maximize your Prime and Umbra Warframes.</li>
</ul>
<h3>Tips for the Steel Path 📝</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Optimized Builds:</b> Prioritize viral damage, slash procs, and faction mods.</li>
    <li><b>Survivability:</b> Use mods like Adaptation and Companion Guardian.</li>
    <li><b>Companions:</b> The Panzer Vulpaphyla is an excellent choice for its immortality and viral spores.</li>
    <li><b>Play in a team:</b> Coordinating with other Tenno makes things much easier.</li>
</ul>
<p>Good luck, Tenno!</p>`,
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
      es: `
<p>¡Tus Primeros Pasos en el Sistema Origen! 🚀 Warframe puede ser abrumador al principio, ¡pero esta guía te ayudará a empezar con el pie derecho!</p>
<h3>1. Elige tu Primer Warframe 🤖</h3>
<p>Al empezar, elegirás entre Excalibur, Mag y Volt. No te preocupes, ¡podrás conseguir todos más adelante!</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Excalibur:</b> Equilibrado y versátil. ¡Muy recomendado!</li>
    <li><b>Mag:</b> Controla escudos y enemigos.</li>
    <li><b>Volt:</b> Rápido y con daño eléctrico.</li>
</ul>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe starter" alt="Warframes iniciales" class="rounded-lg my-4"/>
<h3>2. Prioriza el Mapa Estelar 🗺️</h3>
<p>Tu objetivo principal es desbloquear todos los planetas. Completa todos los nodos de una región para acceder a la siguiente a través de los Cruces. ¡Los cruces dan recompensas muy importantes!</p>
<h3>3. El Poder de los Mods 🃏</h3>
<p>El verdadero poder en Warframe viene de los <b>Mods</b> que equipas en tus armas y warframes.</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Mods de Daño Base:</b> Como <i>Serración</i>, son fundamentales.</li>
    <li><b>Mods Elementales:</b> Combina elementos para crear efectos poderosos (ej. Viral).</li>
    <li><b>Mods de Supervivencia:</b> <i>Vitalidad</i> (salud) y <i>Redirección</i> (escudos) son esenciales.</li>
</ul>
<img src="https://placehold.co/600x250.png" data-ai-hint="warframe mods" alt="Pantalla de mods" class="rounded-lg my-4"/>
<h3>4. Gasta tu Platinum Inicial Sabiamente 💎</h3>
<p>Usa tus 50 Platinum iniciales para comprar <b>ranuras de Warframe y de armas</b>. ¡Son cruciales para expandir tu arsenal! No compres armas o Warframes directamente.</p>
<h3>5. Únete a un Clan 🤝</h3>
<p>Los clanes te dan acceso a planos exclusivos de armas y Warframes en su <b>Dojo</b>. Además, ¡es la mejor forma de encontrar compañeros de escuadrón!</p>
<h3>6. Completa las Aventuras (Quests) 🎬</h3>
<p>Warframe tiene una historia increíble. Sigue las aventuras principales para desbloquear contenido crucial y entender el lore del juego. ¡"El Segundo Sueño" y "La Guerra Interna" te volarán la cabeza!</p>
<p>¡Disfruta tu viaje, Tenno!</p>`,
      en: `
<p>Your First Steps in the Origin System! 🚀 Warframe can be overwhelming at first, but this guide will help you get started on the right foot!</p>
<h3>1. Choose Your First Warframe 🤖</h3>
<p>When you start, you'll choose between Excalibur, Mag, and Volt. Don't worry, you can get them all later!</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Excalibur:</b> Balanced and versatile. Highly recommended!</li>
    <li><b>Mag:</b> Controls shields and enemies.</li>
    <li><b>Volt:</b> Fast and with electrical damage.</li>
</ul>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe starter" alt="Starter Warframes" class="rounded-lg my-4"/>
<h3>2. Prioritize the Star Chart 🗺️</h3>
<p>Your main goal is to unlock all the planets. Complete all the nodes in a region to access the next one through the Junctions. Junctions give very important rewards!</p>
<h3>3. The Power of Mods 🃏</h3>
<p>The real power in Warframe comes from the <b>Mods</b> you equip on your weapons and warframes.</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Base Damage Mods:</b> Like <i>Serration</i>, are fundamental.</li>
    <li><b>Elemental Mods:</b> Combine elements to create powerful effects (e.g., Viral).</li>
    <li><b>Survivability Mods:</b> <i>Vitality</i> (health) and <i>Redirection</i> (shields) are essential.</li>
</ul>
<img src="https://placehold.co/600x250.png" data-ai-hint="warframe mods" alt="Mods screen" class="rounded-lg my-4"/>
<h3>4. Spend Your Initial Platinum Wisely 💎</h3>
<p>Use your initial 50 Platinum to buy <b>Warframe and weapon slots</b>. They are crucial to expand your arsenal! Do not buy weapons or Warframes directly.</p>
<h3>5. Join a Clan 🤝</h3>
<p>Clans give you access to exclusive weapon and Warframe blueprints in their <b>Dojo</b>. Plus, it's the best way to find squadmates!</p>
<h3>6. Complete the Quests 🎬</h3>
<p>Warframe has an incredible story. Follow the main quests to unlock crucial content and understand the game's lore. "The Second Dream" and "The War Within" will blow your mind!</p>
<p>Enjoy your journey, Tenno!</p>`,
    },
  },
];

export function getGuides(): Guide[] {
  return guides;
}
