import type { Guide } from '@/models/guide';

export const weaponsGuide: Guide = {
  id: 4,
  title: {
    es: 'Guía de Armas: Cómo Conseguir y Mejorar tu Arsenal',
    en: 'Weapons Guide: How to Get and Improve Your Arsenal',
  },
  category: 'Weapons',
  content: {
    es: `
<p>Tu arsenal es tan importante como tu Warframe. Descubre cómo conseguir las mejores armas y convertirlas en máquinas de destrucción masiva. 🔫💥</p>
<img src="/images/guides/EN/WeaponsG/WArsenalEN.webp" data-ai-hint="warframe arsenal" alt="Arsenal de Warframe" class="rounded-lg my-4"/>
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
<img src="/images/guides/ES/BuildES.webp" data-ai-hint="warframe weapon modding" alt="Modding de arma" class="rounded-lg my-4"/>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Mods Esenciales:</b> Empieza siempre con daño base (<i>Sierra</i>), multi-disparo (<i>Cámara Dividida</i>), probabilidad y daño crítico.</li>
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
<img src="/images/guides/EN/WeaponsG/WArsenalEN.webp" data-ai-hint="warframe arsenal" alt="Warframe Arsenal" class="rounded-lg my-4"/>
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
<img src="/images/guides/EN/WeaponsG/BuildEN.webp" data-ai-hint="warframe weapon modding" alt="Weapon Modding" class="rounded-lg my-4"/>
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
};
