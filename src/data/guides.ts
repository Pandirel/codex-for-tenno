
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
      es: 'Guía para Desbloquear el Camino de Acero',
      en: 'Guide to Unlock the Steel Path',
    },
    category: 'Steel Path',
    content: {
      es: `
<p>El Camino de Acero es el contenido "endgame" de Warframe, ofreciendo versiones mucho más difíciles de todas las misiones del mapa estelar. A cambio, obtendrás Esencia de Acero para comprar objetos valiosos. 🦾</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe steel path" alt="Banner del Camino de Acero" class="rounded-lg my-4"/>
<h3>Requisitos Principales ✅</h3>
<p>Para desbloquear el Camino de Acero, debes cumplir con los siguientes requisitos:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Completar TODOS los nodos del Mapa Estelar "normal":</b> Cada nodo de cada planeta debe estar completado.</li>
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
<p>The Steel Path is Warframe's "endgame" content, offering much harder versions of all missions on the star chart. In return, you'll get Steel Essence to buy valuable items from Teshin. 🦾</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe steel path" alt="Steel Path Banner" class="rounded-lg my-4"/>
<h3>Main Requirements ✅</h3>
<p>To unlock the Steel Path, you must meet the following requirements:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Complete ALL nodes on the "normal" Star Chart:</b> Every node on every planet must be completed.</li>
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
<p>Ampliar tu arsenal de Warframes es una parte fundamental de la experiencia de juego. Cada Warframe ofrece un estilo de juego único, y aquí te explicamos cómo conseguirlos. ✨</p>
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
<h3>Método 4: Sindicatos y Vendedores Especiales 🤝</h3>
<p>Algunos Warframes y sus componentes se obtienen a través de la reputación con sindicatos en los mundos abiertos:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Cetus (Tierra):</b> Permite obtener a <b>Gara</b>.</li>
    <li><b>Fortuna (Venus):</b> Permite obtener a <b>Garuda</b> y <b>Baruuk</b>.</li>
    <li><b>Deimos:</b> Aquí puedes farmear a <b>Xaku</b> y <b>Lavos</b>.</li>
</ul>
<p>¡Explora todas las opciones y colecciona todos los Warframes que puedas para dominar el Sistema Origen!</p>`,
      en: `
<p>Expanding your arsenal of Warframes is a core part of the game experience. Each Warframe offers a unique playstyle, and here's how you can get them. ✨</p>
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
    <li><b>"Chains of Harrow":: Unlocks <b>Harrow</b>.</li>
    <li><b>"The New War":</b> Gives you access to <b>Caliban</b>.</li>
</ul>
<h3>Method 4: Syndicates and Special Vendors 🤝</h3>
<p>Some Warframes and their components are obtained through reputation with syndicates in the open worlds:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Cetus (Earth):</b> Allows you to get <b>Gara</b>.</li>
    <li><b>Fortuna (Venus):</b> Allows you to get <b>Garuda</b> and <b>Baruuk</b>.</li>
    <li><b>Deimos:</b> Here you can farm for <b>Xaku</b> and <b>Lavos</b>.</li>
</ul>
<p>Explore all the options and collect as many Warframes as you can to master the Origin System!</p>`,
    },
  },
  {
    id: 4,
    title: {
      es: 'Guía de Armas: Cómo Conseguir y Mejorar tu Arsenal',
      en: 'Weapons Guide: How to Get and Improve Your Arsenal',
    },
    category: 'Weapons',
    content: {
      es: `
<p>Tu arsenal es tan importante como tu Warframe. Descubre cómo conseguir las mejores armas y convertirlas en máquinas de destrucción masiva. 🔫💥</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe arsenal" alt="Arsenal de Warframe" class="rounded-lg my-4"/>
<h3>1. Tipos de Armas y Dónde Encontrarlas 🗺️</h3>
<p>Las armas en Warframe se consiguen de varias maneras:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Mercado:</b> Muchos planos de armas se pueden comprar directamente en el mercado por Créditos. ¡No gastes Platinum en armas que puedes construir!</li>
    <li><b>Dojo del Clan:</b> Al igual que los Warframes, muchos planos de armas poderosas están disponibles para investigar y replicar en el Dojo de tu clan.</li>
    <li><b>Recompensas de Aventuras:</b> Algunas de las armas más únicas y con historia se obtienen al completar aventuras específicas.</li>
    <li><b>Armas de Sindicatos:</b> Al ganar reputación con los diferentes Sindicatos, podrás comprar sus armas exclusivas.</li>
    <li><b>Versiones Especiales (Prime, Kuva, Tenet):</b> Estas son las variantes más potentes y se obtienen de Reliquias del Vacío (Prime) o derrotando Liches de Kuva y Hermanas de Parvos (Kuva/Tenet).</li>
</ul>
<h3>2. El Ciclo de Mejora: Mods, Catalizadores y Formas ⚙️</h3>
<p>Un arma de nivel 30 sin mods es inútil. El verdadero poder viene de su mejora:</p>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe weapon modding" alt="Modding de arma" class="rounded-lg my-4"/>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Mods Esenciales:</b> Empieza siempre con daño base (<i>Serración</i>), multi-disparo (<i>Cámara Dividida</i>), probabilidad y daño crítico.</li>
    <li><b>Catalizador Orokin (Papa):</b> Duplica la capacidad de mods de un arma, de 30 a 60. ¡Es la mejora más importante que puedes hacer!</li>
    <li><b>Forma:</b> Permite añadir una polaridad a una ranura de mod. Si la polaridad del mod coincide, su coste se reduce a la mitad. Usar una Forma reinicia el nivel del arma a 0, pero es esencial para builds de alto nivel.</li>
</ul>
<h3>3. Daños Elementales: La Clave del Éxito 🔥❄️⚡☣️</h3>
<p>Combinar mods elementales crea daños secundarios que son efectivos contra tipos específicos de enemigos. Las combinaciones más importantes son:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Viral (Frío + Toxina):</b> Aumenta el daño a la salud. Es la combinación más popular y efectiva en general.</li>
    <li><b>Corrosivo (Electricidad + Toxina):</b> Reduce la armadura de los enemigos. Excelente contra Grineer.</li>
    <li><b>Gas (Calor + Toxina):</b> Crea nubes de daño que afectan a grupos.</li>
    <li><b>Cortante (Slash):</b> No es una combinación, pero es un tipo de daño físico que ignora la armadura y causa daño directo a la salud a lo largo del tiempo. ¡Es el rey del endgame!</li>
</ul>
<h3>4. Armas Recomendadas para Empezar 🚀</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Hek:</b> Una escopeta devastadora que se consigue temprano. Con su mod de sindicato, es viable hasta en contenido avanzado.</li>
    <li><b>Ignis Wraith:</b> Un lanzallamas que puede limpiar salas enteras. Los planos a menudo son regalados por clanes veteranos.</li>
    <li><b>Atomos:</b> Un arma secundaria de rayo que puede encadenar a varios enemigos.</li>
</ul>
<p>¡Experimenta con diferentes armas, encuentra tu estilo de juego y nunca dejes de mejorar tu arsenal!</p>`,
      en: `
<p>Your arsenal is just as important as your Warframe. Discover how to get the best weapons and turn them into machines of mass destruction. 🔫💥</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="warframe arsenal" alt="Warframe Arsenal" class="rounded-lg my-4"/>
<h3>1. Types of Weapons and Where to Find Them 🗺️</h3>
<p>Weapons in Warframe are obtained in several ways:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Market:</b> Many weapon blueprints can be bought directly from the market for Credits. Don't spend Platinum on weapons you can build!</li>
    <li><b>Clan Dojo:</b> Like Warframes, many powerful weapon blueprints are available for research and replication in your clan's Dojo.</li>
    <li><b>Quest Rewards:</b> Some of the most unique and story-rich weapons are obtained by completing specific quests.</li>
    <li><b>Syndicate Weapons:</b> By gaining reputation with the different Syndicates, you can purchase their exclusive weapons.</li>
    <li><b>Special Versions (Prime, Kuva, Tenet):</b> These are the most potent variants and are obtained from Void Relics (Prime) or by defeating Kuva Liches and Sisters of Parvos (Kuva/Tenet).</li>
</ul>
<h3>2. The Upgrade Cycle: Mods, Catalysts, and Forma ⚙️</h3>
<p>A level 30 weapon without mods is useless. The real power comes from upgrading it:</p>
<img src="https://placehold.co/600x300.png" data-ai-hint="warframe weapon modding" alt="Weapon Modding" class="rounded-lg my-4"/>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Essential Mods:</b> Always start with base damage (<i>Serration</i>), multishot (<i>Split Chamber</i>), critical chance, and critical damage.</li>
    <li><b>Orokin Catalyst (Potato):</b> Doubles a weapon's mod capacity from 30 to 60. It's the most important upgrade you can make!</li>
    <li><b>Forma:</b> Allows you to add a polarity to a mod slot. If the mod's polarity matches, its cost is halved. Using a Forma resets the weapon's level to 0, but it is essential for high-level builds.</li>
</ul>
<h3>3. Elemental Damages: The Key to Success 🔥❄️⚡☣️</h3>
<p>Combining elemental mods creates secondary damages that are effective against specific enemy types. The most important combinations are:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Viral (Cold + Toxin):</b> Increases damage to health. It is the most popular and generally effective combination.</li>
    <li><b>Corrosive (Electricity + Toxin):</b> Reduces enemy armor. Excellent against Grineer.</li>
    <li><b>Gas (Heat + Toxin):</b> Creates clouds of damage that affect groups.</li>
    <li><b>Slash:</b> Not a combination, but it's a physical damage type that bypasses armor and deals damage over time directly to health. It's the king of the endgame!</li>
</ul>
<h3>4. Recommended Weapons to Start With 🚀</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Hek:</b> A devastating shotgun available early on. With its syndicate mod, it's viable even in advanced content.</li>
    <li><b>Ignis Wraith:</b> A flamethrower that can clear entire rooms. Blueprints are often given away by veteran clans.</li>
    <li><b>Atomos:</b> A beam secondary weapon that can chain between multiple enemies.</li>
</ul>
<p>Experiment with different weapons, find your playstyle, and never stop improving your arsenal!</p>`,
    },
  },
];

export function getGuides(): Guide[] {
  return guides;
}

    

    