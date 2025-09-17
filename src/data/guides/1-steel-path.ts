import type { Guide } from '@/models/guide';

export const steelPathGuide: Guide = {
  id: 1,
  title: {
    es: 'Guía para Desbloquear el Camino de Acero',
    en: 'Guide to Unlock the Steel Path',
  },
  category: 'Steel Path',
  creationDate: '2024-07-22',
  content: {
    es: `
<p>El Camino de Acero es el contenido "endgame" de Warframe, ofreciendo versiones mucho más difíciles de todas las misiones del mapa estelar. A cambio, obtendrás Esencia de Acero para comprar objetos valiosos. 🦾</p>
<img src="/images/guides/ES/ACES.webp" data-ai-hint="warframe steel path" alt="Banner del Camino de Acero" class="rounded-lg my-4"/>
<h3>Requisitos Principales ✅</h3>
<p>Para desbloquear el Camino de Acero, debes cumplir con los siguientes requisitos:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Completar TODOS los nodos del Mapa Estelar "normal":</b> Cada nodo de cada planeta debe estar completado.</li>
    <li><b>Zonas especiales a tener en cuenta:</b> Lua, Fortaleza Kuva, Deimos (Laboratorios de Albrecht) y Zariman deben estar completamente explorados.</li>
    <li><b>Completar Aventuras Clave:</b> "Prólogo de la Quimera" y "Ángeles del Zariman" son cruciales.</li>
    <li><b>Completar los tres modos de Duviri:</b> El Circuito, Experiencia Duviri y Solo Historia. Es necesario completar al menos una vez el Gusano Orowyrm en Experiencia Duviri y Solo Historia. </li>
</ul>
<div class="p-4 bg-muted/50 border-l-4 border-accent rounded-r-lg my-4">
    <p class="font-semibold">Nota:</p>
    <p class="text-sm text-muted-foreground">Aunque algunas aventuras como "Ángeles del Zariman" ya no son un requisito estricto, es muy recomendable completarlas para evitar errores y tener una experiencia completa.</p>
</div>
<h3>¿Cómo verificar si te falta algo? 🤔</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Revisa tu mapa estelar:</b> Busca nodos que estén en color azul y completalo.</li>
    <li><b>Habla con Teshin:</b> En cualquier Repetidor, Teshin te dirá si estás listo o qué te falta.</li>
</ul>
<img src="/images/guides/ES/TeshinES.webp"data-ai-hint="warframe teshin" alt="Teshin en el repetidor" class="rounded-lg my-4"/>
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
    <li><b>Supervivencia:</b> Usa mods como Adaptación y Guardia Ondulante.</li>
    <li><b>Compañeros:</b> El Panzer Vulpaphyla es una excelente opción por su inmortalidad y esporas virales.</li>
    <li><b>Juega en equipo:</b> Coordinarse con otros Tenno facilita mucho las cosas.</li>
</ul>
<p>¡Mucha suerte, Tenno!</p>`,
    en: `
<p>The Steel Path is Warframe's "endgame" content, offering much harder versions of all missions on the star chart. In return, you'll get Steel Essence to buy valuable items from Teshin. 🦾</p>
<img src="/images/guides/EN/SteelPath/SteelpathEN.webp" data-ai-hint="warframe steel path" alt="Steel Path Banner" class="rounded-lg my-4"/>
<h3>Main Requirements ✅</h3>
<p>To unlock the Steel Path, you must meet the following requirements:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Complete ALL nodes on the "normal" Star Chart:</b> Every node on every planet must be completed.</li>
    <li><b>Special zones to consider:</b> Lua, Kuva Fortress, Deimos (Albrecht's Laboratories), and the Zariman must be fully explored.</li>
    <li><b>Complete Key Quests:</b> "Chimera Prologue" and "Angels of the Zariman" are crucial.</li>
    <li><b>Complete the three Duviri modes:</b> You need to complete the Murmur Worm at least once in The Circuit, The Duviri Experience, and The Lone Story.</li>
</ul>
<div class="p-4 bg-muted/50 border-l-4 border-accent rounded-r-lg my-4">
    <p class="font-semibold">Note:</p>
    <p class="text-sm text-muted-foreground">Although some quests like "Angels of the Zariman" are no longer a strict requirement, it is highly recommended to complete them to avoid issues and for the full experience.</p>
</div>
<h3>How to check if you're missing something? 🤔</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Check your star chart:</b> Look for any node that isn't blue.</li>
    <li><b>Talk to Teshin:</b> In any Relay, Teshin will tell you if you are ready or what you are missing.</li>
</ul>
<img src="/images/guides/EN/SteelPath/TeshinEN.webp" data-ai-hint="warframe teshin" alt="Teshin in the relay" class="rounded-lg my-4"/>
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
    <li><b>Survivability:</b> Use mods like Adaptation and Rolling Guard.</li>
    <li><b>Companions:</b> The Panzer Vulpaphyla is an excellent choice for its immortality and viral spores.</li>
    <li><b>Play in a team:</b> Coordinating with other Tenno makes things much easier.</li>
</ul>
<p>Good luck, Tenno!</p>`,
  },
};
