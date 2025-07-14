
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
  {
    id: 3,
    title: {
      es: 'Guía: Cómo Conseguir Nuevos Warframes',
      en: 'Guide: How to Get New Warframes',
    },
    category: 'Warframes',
    content: {
      es: `
<p>Ampliar tu arsenal de Warframes es una parte fundamental de la experiencia de juego. Cada Warframe ofrece un estilo de juego único, y aquí te explicamos cómo conseguirlos.</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe collection" alt="Colección de Warframes" class="rounded-lg my-4"/>
<h3>Método 1: Derrotando Jefes de Planeta ⚔️</h3>
<p>La forma más común de obtener los planos de los componentes de un Warframe (Neurópticas, Chasis y Sistemas) es derrotando a los jefes de cada planeta. Por ejemplo:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>The Jackal (Venus):</b> Suelta los componentes de <b>Rhino</b>.</li>
    <li><b>Vay Hek (Tierra):</b> Suelta los componentes de <b>Hydroid</b>.</li>
    <li><b>Councilors (Júpiter):</b> Sueltan los componentes de <b>Valkyr</b>.</li>
</ul>
<p>Una vez que tienes los tres planos de componentes, puedes comprar el plano principal del Warframe en el Mercado por Créditos y construirlo en la Forja.</p>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe crafting" alt="Mesa de crafteo" class="rounded-lg my-4"/>
<h3>Método 2: Investigación en el Dojo del Clan 🔬</h3>
<p>Unirte a un clan te da acceso a laboratorios de investigación donde puedes replicar los planos de muchos Warframes y armas. ¡Algunos Warframes son exclusivos del Dojo!</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Laboratorio Tenno:</b> Aquí encontrarás planos para Warframes como <b>Banshee</b>, <b>Nezha</b> y <b>Wukong</b>.</li>
    <li><b>Otros Laboratorios:</b> También hay armas y otros objetos útiles.</li>
</ul>
<h3>Método 3: Aventuras (Quests) 📜</h3>
<p>Muchos de los Warframes más interesantes y con historias únicas se obtienen como recompensa al completar aventuras específicas.</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>"El Segundo Sueño":</b> Recompensa con el plano de <b>Inaros</b>.</li>
    <li><b>"Cadenas de Harrow":</b> Desbloquea a <b>Harrow</b>.</li>
    <li><b>"La Nueva Guerra":</b> Te da acceso a <b>Caliban</b>.</li>
</ul>
<h3>Método 4: Comprar en el Mercado con Platinum 💎</h3>
<p>Si prefieres la ruta rápida, siempre puedes comprar Warframes completamente construidos (con un reactor y una ranura incluidos) en el Mercado del juego usando Platinum, la moneda premium.</p>
<h3>Método 5: Sindicatos y Vendedores Especiales 🤝</h3>
<p>Algunos Warframes y sus componentes se obtienen a través de la reputación con sindicatos en los mundos abiertos:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Cetus (Tierra):</b> Permite obtener a <b>Gara</b>.</li>
    <li><b>Fortuna (Venus):</b> Permite obtener a <b>Garuda</b> y <b>Baruuk</b>.</li>
    <li><b>Deimos:</b> Aquí puedes farmear a <b>Xaku</b> y <b>Lavos</b>.</li>
</ul>
<p>¡Explora todas las opciones y colecciona todos los Warframes que puedas para dominar el Sistema Origen!</p>`,
      en: `
<p>Expanding your arsenal of Warframes is a core part of the game experience. Each Warframe offers a unique playstyle, and here's how you can get them.</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe collection" alt="Warframe Collection" class="rounded-lg my-4"/>
<h3>Method 1: Defeating Planet Bosses ⚔️</h3>
<p>The most common way to get a Warframe's component blueprints (Neuroptics, Chassis, and Systems) is by defeating the bosses on each planet. For example:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>The Jackal (Venus):</b> Drops <b>Rhino</b>'s components.</li>
    <li><b>Vay Hek (Earth):</b> Drops <b>Hydroid</b>'s components.</li>
    <li><b>Councilors (Jupiter):</b> Drop <b>Valkyr</b>'s components.</li>
</ul>
<p>Once you have the three component blueprints, you can buy the main Warframe blueprint from the Market for Credits and build it in the Foundry.</p>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe crafting" alt="Crafting Bench" class="rounded-lg my-4"/>
<h3>Method 2: Clan Dojo Research 🔬</h3>
<p>Joining a clan gives you access to research labs where you can replicate the blueprints for many Warframes and weapons. Some Warframes are exclusive to the Dojo!</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Tenno Lab:</b> Here you'll find blueprints for Warframes like <b>Banshee</b>, <b>Nezha</b>, and <b>Wukong</b>.</li>
    <li><b>Other Labs:</b> There are also weapons and other useful items.</li>
</ul>
<h3>Method 3: Quests 📜</h3>
<p>Many of the most interesting Warframes with unique stories are obtained as rewards for completing specific quests.</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>"The Second Dream":</b> Rewards the blueprint for <b>Inaros</b>.</li>
    <li><b>"Chains of Harrow":</b> Unlocks <b>Harrow</b>.</li>
    <li><b>"The New War":</b> Gives you access to <b>Caliban</b>.</li>
</ul>
<h3>Method 4: Buying from the Market with Platinum 💎</h3>
<p>If you prefer the fast route, you can always buy fully built Warframes (with a reactor and slot included) from the in-game Market using Platinum, the premium currency.</p>
<h3>Method 5: Syndicates and Special Vendors 🤝</h3>
<p>Some Warframes and their components are obtained through reputation with syndicates in the open worlds:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Cetus (Earth):</b> Allows you to get <b>Gara</b>.</li>
    <li><b>Fortuna (Venus):</b> Allows you to get <b>Garuda</b> and <b>Baruuk</b>.</li>
    <li><b>Deimos:</b> Here you can farm for <b>Xaku</b> and <b>Lavos</b>.</li>
</ul>
<p>Explore all the options and collect as many Warframes as you can to master the Origin System!</p>`,
    },
  },
];

export function getGuides(): Guide[] {
  return guides;
}

    