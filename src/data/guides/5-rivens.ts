import type { Guide } from '@/models/guide';

export const rivensGuide: Guide = {
  id: 5,
  title: {
    es: 'Guía de Rivens: Entendiendo los "Good/God Rolls"',
    en: 'Rivens Guide: Understanding "Good/God Rolls"',
  },
  category: 'Rivens',
  content: {
    es: `
<p>Los Mods Agrietados (Rivens) pueden ser confusos, pero esta guía te ayudará a entender qué estadísticas (stats) buscar para tener un Riven "bueno" o "dios". riven.cv les puede ayudar a ver los precios de los mods agrietados.</p>
<h3>📋 Tabla de Abreviaturas y Significados</h3>
<p>Aquí tienes una lista de las abreviaturas más comunes que verás en la comunidad y su significado.</p>
<div class="overflow-x-auto rounded-lg border my-4">
  <table class="min-w-full">
    <thead class="bg-muted/50">
      <tr>
        <th class="px-4 py-2 text-left text-sm font-semibold">Abreviatura</th>
        <th class="px-4 py-2 text-left text-sm font-semibold">Significado en Español</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td>CD</td><td>Daño Crítico</td></tr>
      <tr class="border-b"><td>CC</td><td>Probabilidad Crítica</td></tr>
      <tr class="border-b"><td>DMG</td><td>Daño</td></tr>
      <tr class="border-b"><td>MS</td><td>Multidisparo</td></tr>
      <tr class="border-b"><td>FR</td><td>Cadencia de Fuego</td></tr>
      <tr class="border-b"><td>RLS</td><td>Velocidad de Recarga</td></tr>
      <tr class="border-b"><td>TOX</td><td>Toxina</td></tr>
      <tr class="border-b"><td>DTC</td><td>Daño a Corpus</td></tr>
      <tr class="border-b"><td>DTI</td><td>Daño a Infestados</td></tr>
      <tr class="border-b"><td>DTG</td><td>Daño a Grineer</td></tr>
      <tr class="border-b"><td>PUNC</td><td>Perforación</td></tr>
      <tr class="border-b"><td>IMP</td><td>Impacto</td></tr>
      <tr class="border-b"><td>MAG</td><td>Capacidad de Cargador</td></tr>
      <tr class="border-b"><td>REC</td><td>Retroceso</td></tr>
      <tr class="border-b"><td>SC</td><td>Probabilidad de Estado</td></tr>
      <tr class="border-b"><td>PT</td><td>Perforación de Proyectil</td></tr>
      <tr class="border-b"><td>PFS</td><td>Velocidad de Vuelo del Proyectil</td></tr>
      <tr class="border-b"><td>AS</td><td>Velocidad de Ataque</td></tr>
      <tr class="border-b"><td>IC</td><td>Combo Inicial</td></tr>
      <tr class="border-b"><td>EFF</td><td>Eficiencia de Ataque Pesado</td></tr>
      <tr class="border-b"><td>SLIDE</td><td>Golpe Crítico en Deslizamiento</td></tr>
      <tr class="border-b"><td>FIN</td><td>Daño de Ejecución</td></tr>
      <tr><td>ELEC</td><td>Electricidad</td></tr>
      <tr><td>SD</td><td>Duración de Estado</td></tr>
    </tbody>
  </table>
</div>

<h3>📖 ¿Cómo Leer las Recomendaciones de Rolls?</h3>
<p>En las comunidades, a menudo verás recomendaciones de "rolls" escritas de forma abreviada. Así se interpretan:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Ejemplo 1: <code>CD MS/TOX/DMG/FR/CC/PT</code></b><br>
    Significa que el stat <b>CD es obligatorio</b>, y debe ir acompañado de <b>dos stats más</b> de la lista (MS, TOX, DMG, FR, CC o PT).</li>
    <li><b>Ejemplo 2: <code>CC MS FR/CD/DMG/HEAT</code></b><br>
    Significa que <b>CC y MS son obligatorios</b>, y deben ir acompañados de <b>un stat más</b> de la lista (FR, CD, DMG o HEAT).</li>
    <li><b>Ejemplo 3: <code>CD AS RANGE</code></b><br>
    Significa que los tres stats (CD, AS, RANGE) son obligatorios.</li>
</ul>

<h3>🚨 La Regla de Oro: ¿Qué Hace a un Riven Bueno?</h3>
<p>Un Riven se considera de alta calidad (en el 99% de los casos) si cumple con esta estructura:</p>
<div class="p-4 bg-muted/50 border-l-4 border-accent rounded-r-lg my-4">
    <p class="font-semibold text-lg">2 Stats Positivos Útiles + 1 Negativo Inofensivo</p>
</div>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Stats Positivos Deseados:</b> Generalmente son CD, CC, MS, DMG, FR, TOX.</li>
    <li><b>Negativo Inofensivo:</b> Un stat negativo que no afecta el rendimiento del arma. Los mejores son:
        <ul class="list-disc pl-5 space-y-1 my-2">
            <li>- Daño a una facción que no usarás (ej. - Daño a Infestados).</li>
            <li>- Retroceso (Zoom).</li>
            <li>- Daño de Impacto o Perforación (en armas que no dependen de ellos).</li>
            <li>- Capacidad del cargador (si el arma recarga rápido).</li>
        </ul>
    </li>
    <li>Si hay un <b>tercer positivo</b>, debe ser útil y no algo como "+Daño de Impacto".</li>
</ul>

<h3>🔥 Ejemplos Prácticos</h3>
<h4>Riven "God Roll" (Muy Bueno) ✅</h4>
<p><code>CD + MS + CC - Daño a Infestados</code></p>
<p class="text-muted-foreground">Este Riven es excelente porque tiene tres de los mejores stats ofensivos y un negativo que es prácticamente inofensivo en la mayoría del contenido del juego.</p>

<h4>Riven Malo ❌</h4>
<p><code>DMG + SC + PUNC - Multidisparo</code></p>
<p class="text-muted-foreground">Aunque tiene Daño (DMG), el negativo (-Multidisparo) arruina completamente el arma, haciéndolo inútil. El stat de Perforación (PUNC) rara vez es deseado.</p>

<h4>Riven Chatarra 🗑️</h4>
<p><code>IMP + MAG + REC</code></p>
<p class="text-muted-foreground">Todos los stats son considerados "basura" en la mayoría de las builds. No aportan un aumento de daño significativo y ocupan el espacio de stats que sí lo harían.</p>

<h3>📌 Notas Adicionales</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Un negativo es bueno:</b> Un Riven con un negativo inofensivo tiene valores más altos en sus stats positivos. Por eso se buscan.</li>
    <li><b>Kitguns:</b> Se consideran armas secundarias para propósitos de Rivens.</li>
    <li><b>Disposición:</b> Un arma con disposición alta (●●●●●) recibirá valores mucho más altos de un Riven que un arma con disposición baja (●○○○○).</li>
</ul>
`,
    en: `
<p>Riven Mods can be confusing, but this guide will help you understand which stats to look for to get a "good" or "god" roll Riven. riven.cv can help you check the prices of riven mods.</p>
<h3>📋 Abbreviations and Meanings Table</h3>
<p>Here is a list of the most common abbreviations you'll see in the community and what they mean.</p>
<div class="overflow-x-auto rounded-lg border my-4">
  <table class="min-w-full">
    <thead class="bg-muted/50">
      <tr>
        <th class="px-4 py-2 text-left text-sm font-semibold">Abbreviation</th>
        <th class="px-4 py-2 text-left text-sm font-semibold">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td>CD</td><td>Critical Damage</td></tr>
      <tr class="border-b"><td>CC</td><td>Critical Chance</td></tr>
      <tr class="border-b"><td>DMG</td><td>Damage</td></tr>
      <tr class="border-b"><td>MS</td><td>Multishot</td></tr>
      <tr class="border-b"><td>FR</td><td>Fire Rate</td></tr>
      <tr class="border-b"><td>RLS</td><td>Reload Speed</td></tr>
      <tr class="border-b"><td>TOX</td><td>Toxin</td></tr>
      <tr class="border-b"><td>DTC</td><td>Damage to Corpus</td></tr>
      <tr class="border-b"><td>DTI</td><td>Damage to Infested</td></tr>
      <tr class="border-b"><td>DTG</td><td>Damage to Grineer</td></tr>
      <tr class="border-b"><td>PUNC</td><td>Puncture</td></tr>
      <tr class="border-b"><td>IMP</td><td>Impact</td></tr>
      <tr class="border-b"><td>MAG</td><td>Magazine Capacity</td></tr>
      <tr class="border-b"><td>REC</td><td>Recoil</td></tr>
      <tr class="border-b"><td>SC</td><td>Status Chance</td></tr>
      <tr class="border-b"><td>PT</td><td>Projectile Punch Through</td></tr>
      <tr class="border-b"><td>PFS</td><td>Projectile Flight Speed</td></tr>
      <tr class="border-b"><td>AS</td><td>Attack Speed</td></tr>
      <tr class="border-b"><td>IC</td><td>Initial Combo</td></tr>
      <tr class="border-b"><td>EFF</td><td>Heavy Attack Efficiency</td></tr>
      <tr class="border-b"><td>SLIDE</td><td>Slide Critical Strike</td></tr>
      <tr class="border-b"><td>FIN</td><td>Finisher Damage</td></tr>
      <tr><td>ELEC</td><td>Electricity</td></tr>
      <tr><td>SD</td><td>Status Duration</td></tr>
    </tbody>
  </table>
</div>

<h3>📖 How to Read Roll Recommendations</h3>
<p>In communities, you'll often see roll recommendations written in shorthand. Here's how to interpret them:</p>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Example 1: <code>CD MS/TOX/DMG/FR/CC/PT</code></b><br>
    This means the <b>CD stat is mandatory</b>, and it must be accompanied by <b>two other stats</b> from the list (MS, TOX, DMG, FR, CC, or PT).</li>
    <li><b>Example 2: <code>CC MS FR/CD/DMG/HEAT</code></b><br>
    This means that <b>CC and MS are mandatory</b>, and they must be accompanied by <b>one more stat</b> from the list (FR, CD, DMG, or HEAT).</li>
    <li><b>Example 3: <code>CD AS RANGE</code></b><br>
    This means all three stats (CD, AS, RANGE) are mandatory.</li>
</ul>

<h3>🚨 The Golden Rule: What Makes a Riven Good?</h3>
<p>A Riven is considered high-quality (in 99% of cases) if it follows this structure:</p>
<div class="p-4 bg-muted/50 border-l-4 border-accent rounded-r-lg my-4">
    <p class="font-semibold text-lg">2 Useful Positive Stats + 1 Harmless Negative Stat</p>
</div>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>Desired Positive Stats:</b> Generally CD, CC, MS, DMG, FR, TOX.</li>
    <li><b>Harmless Negative:</b> A negative stat that doesn't affect the weapon's performance. The best ones are:
        <ul class="list-disc pl-5 space-y-1 my-2">
            <li>- Damage to a faction you won't use it against (e.g., -Dmg to Infested).</li>
            <li>- Recoil (Zoom).</li>
            <li>- Impact or Puncture damage (on weapons that don't rely on them).</li>
            <li>- Magazine Capacity (if the weapon reloads quickly).</li>
        </ul>
    </li>
    <li>If there's a <b>third positive</b>, it must be useful and not something like "+Impact Damage".</li>
</ul>

<h3>🔥 Practical Examples</h3>
<h4>"God Roll" Riven (Very Good) ✅</h4>
<p><code>CD + MS + CC - Damage to Infested</code></p>
<p class="text-muted-foreground">This Riven is excellent because it has three of the best offensive stats and a negative that is practically harmless in most game content.</p>

<h4>Bad Riven ❌</h4>
<p><code>DMG + SC + PUNC - Multishot</code></p>
<p class="text-muted-foreground">Although it has Damage (DMG), the negative (-Multishot) completely ruins the weapon, making it useless. The Puncture (PUNC) stat is rarely desired.</p>

<h4>Trash Riven 🗑️</h4>
<p><code>IMP + MAG + REC</code></p>
<p class="text-muted-foreground">All these stats are considered "junk" in most builds. They don't provide a significant damage increase and take up space that useful stats could occupy.</p>

<h3>📌 Additional Notes</h3>
<ul class="list-disc pl-5 space-y-2 my-4">
    <li><b>A negative is good:</b> A Riven with a harmless negative has higher values on its positive stats. That's why they are sought after.</li>
    <li><b>Kitguns:</b> Are considered secondary weapons for Riven purposes.</li>
    <li><b>Disposition:</b> A weapon with a high disposition (●●●●●) will get much higher values from a Riven than a weapon with a low disposition (●○○○○).</li>
</ul>
`,
  },
};
