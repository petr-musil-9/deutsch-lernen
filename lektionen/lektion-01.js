// =====================================================================
// LEKTION 1 – Städte, Himmelsrichtungen, Beruf
// To make a new lesson: copy this file to lektion-02.js, change the
// content, and add <script src="lektionen/lektion-02.js"></script>
// in deutsch-lernen.html (next to the line for lektion-01.js).
// =====================================================================
(function () {
  const VERBS = [
    ["machen","hat gemacht","to do/make"],["arbeiten","hat gearbeitet","to work"],
    ["kaufen","hat gekauft","to buy"],["verkaufen","hat verkauft","to sell"],
    ["wohnen","hat gewohnt","to live"],["lernen","hat gelernt","to learn"],
    ["spielen","hat gespielt","to play"],["besuchen","hat besucht","to visit"],
    ["studieren","hat studiert","to study"],["einkaufen","hat eingekauft","to go shopping"],
    ["essen","hat gegessen","to eat"],["trinken","hat getrunken","to drink"],
    ["sehen","hat gesehen","to see"],["lesen","hat gelesen","to read"],
    ["schreiben","hat geschrieben","to write"],["sprechen","hat gesprochen","to speak"],
    ["finden","hat gefunden","to find"],["nehmen","hat genommen","to take"],
    ["verstehen","hat verstanden","to understand"],["bringen","hat gebracht","to bring"],
    ["gehen","ist gegangen","to go"],["fahren","ist gefahren","to drive/ride"],
    ["fliegen","ist geflogen","to fly"],["kommen","ist gekommen","to come"],
    ["aufstehen","ist aufgestanden","to get up"],["bleiben","ist geblieben","to stay"],
    ["sein","ist gewesen","to be"],["werden","ist geworden","to become"],
  ];
  const KOMP = [
    ["groß","größer","am größten"],["alt","älter","am ältesten"],["jung","jünger","am jüngsten"],
    ["gut","besser","am besten"],["viel","mehr","am meisten"],["gern","lieber","am liebsten"],
    ["hoch","höher","am höchsten"],["nah","näher","am nächsten"],["teuer","teurer","am teuersten"],
    ["schnell","schneller","am schnellsten"],["klein","kleiner","am kleinsten"],["berühmt","berühmter","am berühmtesten"],
  ];
  const MATCH_R = ["inhabitant / obyvatel", "workshop, garage / dílna, autoservis", "famous / slavný",
    "different, various / různý", "to sell / prodávat"];

  window.LESSONS = window.LESSONS || [];
  window.LESSONS.push({
    id: 1,
    title: "Lektion 1",
    topic: "Städte, Himmelsrichtungen, Beruf · weil · Komparativ & Superlativ · Perfekt",

    // ---------- Wörterbuch ----------
    words: [
      { de: "im Norden", g: "der Norden", en: "in the north", cz: "na severu",
        ex: "Hamburg liegt im Norden von Deutschland.", ext: "Hamburg is in the north of Germany." },
      { de: "im Süden", g: "der Süden", en: "in the south", cz: "na jihu",
        ex: "München liegt im Süden.", ext: "Munich is in the south." },
      { de: "im Osten", g: "der Osten", en: "in the east", cz: "na východě",
        ex: "Dresden liegt im Osten von Deutschland.", ext: "Dresden is in the east of Germany." },
      { de: "im Westen", g: "der Westen", en: "in the west", cz: "na západě",
        ex: "Köln liegt im Westen.", ext: "Cologne is in the west." },
      { de: "der Einwohner", g: "-, die Einwohner · f: die Einwohnerin, -nen", en: "inhabitant, resident", cz: "obyvatel",
        ex: "Berlin hat 3,7 Millionen Einwohner.", ext: "Berlin has 3.7 million inhabitants." },
      { de: "im Beruf", g: "der Beruf, -e", en: "at work, in one's job", cz: "v zaměstnání, v práci",
        ex: "Im Beruf spreche ich oft Englisch.", ext: "At work I often speak English." },
      { de: "berühmt", g: "adj. · berühmter, am berühmtesten", en: "famous", cz: "slavný, proslulý",
        ex: "Die Stadt ist für ihr Bier berühmt.", ext: "The city is famous for its beer. (berühmt für + Akk.)" },
      { de: "zweitgrößte", g: "adj. (zweit- + größte)", en: "second largest", cz: "druhý největší",
        ex: "Hamburg ist die zweitgrößte Stadt Deutschlands.", ext: "Hamburg is the second-largest city in Germany." },
      { de: "verkaufen", g: "verkauft, verkaufte, hat verkauft", en: "to sell", cz: "prodávat, prodat",
        ex: "Die Firma verkauft Fahrräder.", ext: "The company sells bicycles. (opposite: kaufen = buy)" },
      { de: "die Werkstatt", g: "-, die Werkstätten", en: "workshop; car repair garage", cz: "dílna; autoservis",
        ex: "Mein Auto ist in der Werkstatt.", ext: "My car is at the garage." },
      { de: "verschieden", g: "adj.", en: "different, various", cz: "různý, rozdílný",
        ex: "Wir verkaufen verschiedene Räder.", ext: "We sell various bikes." },
      { de: "das Rad", g: "-(e)s, die Räder", en: "wheel; bike (= Fahrrad)", cz: "kolo",
        ex: "Ich fahre jeden Tag mit dem Rad zur Arbeit.", ext: "I ride my bike to work every day." },
    ],

    // extra HTML shown under the dictionary table (optional)
    dictExtra: `
      <h3 style="margin-top:0">Himmelsrichtungen (světové strany)</h3>
      <div class="compass">
        <div></div><div class="d">im Norden<br><small>sever</small></div><div></div>
        <div class="d">im Westen<br><small>západ</small></div><div>🧭</div><div class="d">im Osten<br><small>východ</small></div>
        <div></div><div class="d">im Süden<br><small>jih</small></div><div></div>
      </div>
      <p class="tip">All four are masculine: <b>der</b> Norden → <b>im</b> (= in dem) Norden. You'll also see
        <i>Norddeutschland, Süddeutschland</i>, and <i>nördlich / südlich / westlich / östlich von</i> (north/south/west/east of).</p>`,

    // ---------- Grammatik (one tab each) ----------
    grammar: [
      { id: "weil", tab: "🔗 weil", html: `
  <h2>Konjunktion <i>weil</i> (because / protože)</h2>
  <div class="card">
    <div class="rule"><b>Main rule:</b> <i>weil</i> starts a subordinate clause, so the <b>conjugated verb goes to the very end</b>.</div>
    <div class="formula">Hauptsatz , weil + Subjekt + … + <span class="v">Verb</span>.</div>
    <div class="ex"><span class="de">Ich lerne Deutsch, weil ich in Deutschland <mark>arbeite</mark>.</span>
      <span class="tr">I learn German because I work in Germany.</span></div>
    <div class="ex"><span class="de">Hamburg ist berühmt, weil es einen großen Hafen <mark>hat</mark>.</span>
      <span class="tr">Hamburg is famous because it has a big port.</span></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">1. Modal verbs → modal verb is last</h3>
    <div class="ex"><span class="de">Ich komme nicht, weil ich arbeiten <mark>muss</mark>.</span>
      <span class="tr">I'm not coming because I have to work.</span></div>
    <h3>2. Perfekt → hat / ist is last</h3>
    <div class="ex"><span class="de">Er ist müde, weil er lange gearbeitet <mark>hat</mark>.</span>
      <span class="tr">He is tired because he worked for a long time.</span></div>
    <div class="ex"><span class="de">Sie ist nicht da, weil sie nach Wien gefahren <mark>ist</mark>.</span>
      <span class="tr">She isn't here because she went to Vienna.</span></div>
    <h3>3. Separable verbs → join back together at the end</h3>
    <div class="ex"><span class="de">Ich bin müde, weil ich um 5 Uhr <mark>aufstehe</mark>.</span>
      <span class="tr">(aufstehen: <i>ich stehe auf</i> → <i>weil ich aufstehe</i>)</span></div>
    <h3>4. Negation <i>nicht</i> → before the verb</h3>
    <div class="ex"><span class="de">Er kauft das Rad, weil es nicht teuer <mark>ist</mark>.</span>
      <span class="tr">He buys the bike because it isn't expensive.</span></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">5. weil-clause first → "verb, verb"</h3>
    <p>The whole weil-clause counts as position 1, so the main clause starts with its <b>verb</b>.</p>
    <div class="formula">Weil … <span class="v">Verb</span>, <span class="v">Verb</span> + Subjekt …</div>
    <div class="ex"><span class="de">Weil es <mark>regnet</mark>, <mark>bleibe</mark> ich zu Hause.</span>
      <span class="tr">Because it is raining, I'm staying at home.</span></div>
    <div class="ex"><span class="de">Weil die Werkstatt geschlossen <mark>ist</mark>, <mark>kann</mark> ich das Auto nicht abholen.</span>
      <span class="tr">Because the garage is closed, I can't pick up the car.</span></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">weil vs. denn (both = because)</h3>
    <div class="tablewrap"><table>
      <tr><th></th><th>Word order</th><th>Example</th></tr>
      <tr><td><b>weil</b></td><td>verb at the END</td><td>…, weil ich krank <mark>bin</mark>.</td></tr>
      <tr><td><b>denn</b></td><td>normal order (verb 2nd)</td><td>…, denn ich <mark>bin</mark> krank.</td></tr>
    </table></div>
    <p class="tip">Answering <i>Warum?</i> you can start with weil alone: <i>Warum lernst du Deutsch? – Weil ich in Österreich wohne.</i>
      Always put a comma before <i>weil</i>.</p>
  </div>` },

      { id: "komp", tab: "📈 Komparativ / Superlativ", html: `
  <h2>Komparativ (2. stupeň) &amp; Superlativ (3. stupeň)</h2>
  <div class="grid2">
    <div class="card">
      <h3 style="margin-top:0">Komparativ: adjective + <b>-er</b> (+ als)</h3>
      <div class="formula">schnell → schnell<b>er</b> als</div>
      <div class="ex"><span class="de">Berlin ist <mark>größer als</mark> Hamburg.</span>
        <span class="tr">Berlin is bigger than Hamburg.</span></div>
      <div class="ex"><span class="de">Das Rad ist <mark>billiger als</mark> das Auto.</span>
        <span class="tr">The bike is cheaper than the car.</span></div>
      <p class="tip">"than" = <b>als</b> (never <i>wie</i>).<br>Equal: <b>so … wie</b> – <i>Er ist so alt wie ich.</i> (as old as me)</p>
    </div>
    <div class="card">
      <h3 style="margin-top:0">Superlativ: <b>am</b> + adjective + <b>-sten</b></h3>
      <div class="formula">schnell → am schnell<b>sten</b></div>
      <div class="ex"><span class="de">Berlin ist <mark>am größten</mark>.</span>
        <span class="tr">Berlin is the biggest.</span></div>
      <p class="tip">After <b>-d, -t, -s, -ß, -z, -sch</b> add an extra <b>-e-</b>:
        <i>am ältesten, am heißesten, am kürzesten</i>.</p>
    </div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Before a noun → normal adjective endings</h3>
    <div class="formula">der/die/das + adj. + <b>-ste</b> + noun</div>
    <div class="ex"><span class="de">Berlin ist <mark>die größte</mark> Stadt Deutschlands.</span>
      <span class="tr">Berlin is the largest city in Germany.</span></div>
    <div class="ex"><span class="de">Hamburg ist <mark>die zweitgrößte</mark> Stadt Deutschlands.</span>
      <span class="tr">Hamburg is the second-largest city. (zweit- + größte; also <i>drittgrößte</i> = third largest)</span></div>
    <div class="ex"><span class="de">Ich habe ein <mark>schnelleres</mark> Auto gekauft.</span>
      <span class="tr">Comparative before a noun also takes endings: a faster car.</span></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Umlaut: short adjectives with a, o, u often get ä, ö, ü</h3>
    <div class="tablewrap"><table>
      <thead><tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>alt</td><td>älter</td><td>am ältesten</td><td>old</td></tr>
        <tr><td>groß</td><td>größer</td><td>am größten</td><td>big</td></tr>
        <tr><td>jung</td><td>jünger</td><td>am jüngsten</td><td>young</td></tr>
        <tr><td>kurz</td><td>kürzer</td><td>am kürzesten</td><td>short</td></tr>
        <tr><td>lang</td><td>länger</td><td>am längsten</td><td>long</td></tr>
        <tr><td>warm / kalt</td><td>wärmer / kälter</td><td>am wärmsten / am kältesten</td><td>warm / cold</td></tr>
      </tbody>
    </table></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Irregular – learn by heart</h3>
    <div class="tablewrap"><table>
      <thead><tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th><th>English</th></tr></thead>
      <tbody>
        <tr><td><b>gut</b></td><td>besser</td><td>am besten</td><td>good / better / best</td></tr>
        <tr><td><b>viel</b></td><td>mehr</td><td>am meisten</td><td>much / more / most</td></tr>
        <tr><td><b>gern</b></td><td>lieber</td><td>am liebsten</td><td>gladly / rather / most of all</td></tr>
        <tr><td><b>hoch</b></td><td>höher</td><td>am höchsten</td><td>high</td></tr>
        <tr><td><b>nah</b></td><td>näher</td><td>am nächsten</td><td>near</td></tr>
        <tr><td><b>teuer</b></td><td>teurer</td><td>am teuersten</td><td>expensive (drops -e-)</td></tr>
      </tbody>
    </table></div>
    <div class="ex"><span class="de">Ich trinke gern Tee, lieber Kaffee und <mark>am liebsten</mark> Bier.</span>
      <span class="tr">I like tea, prefer coffee and like beer most of all.</span></div>
  </div>` },

      { id: "perf", tab: "⏪ Perfekt", html: `
  <h2>Perfekt – hat / ist + Partizip II</h2>
  <div class="card">
    <div class="rule">The Perfekt is the normal spoken past tense. <b>haben</b> or <b>sein</b> is conjugated in position 2,
      and the <b>Partizip II</b> (3rd form) goes to the end.</div>
    <div class="formula">Subjekt + <span class="v">hat / ist</span> + … + <span class="v">Partizip II</span></div>
    <div class="ex"><span class="de">Er <mark>hat</mark> sein Rad <mark>verkauft</mark>.</span>
      <span class="tr">He sold his bike.</span></div>
    <div class="ex"><span class="de">Wir <mark>sind</mark> in den Norden <mark>gefahren</mark>.</span>
      <span class="tr">We drove to the north.</span></div>
  </div>
  <div class="grid2">
    <div class="card">
      <h3 style="margin-top:0">haben – most verbs</h3>
      <p>All verbs with an accusative object, reflexive verbs, and most others.</p>
      <div class="ex"><span class="de">Ich habe gegessen / gearbeitet / gekauft.</span></div>
    </div>
    <div class="card">
      <h3 style="margin-top:0">sein – movement &amp; change</h3>
      <p>• <b>movement A → B:</b> gehen, fahren, fliegen, kommen, laufen<br>
         • <b>change of state:</b> aufstehen, einschlafen, werden, sterben<br>
         • <b>exceptions:</b> sein, bleiben, passieren</p>
      <div class="ex"><span class="de">Ich bin gestern zu Hause geblieben.</span></div>
    </div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">How to form the Partizip II</h3>
    <div class="tablewrap"><table>
      <thead><tr><th>Type</th><th>Pattern</th><th>Examples</th></tr></thead>
      <tbody>
        <tr><td>regular (weak)</td><td><b>ge</b>- stem -<b>t</b></td><td>machen → gemacht, kaufen → gekauft, wohnen → gewohnt, arbeiten → gearbeit<b>et</b></td></tr>
        <tr><td>irregular (strong)</td><td><b>ge</b>- stem -<b>en</b> (stem vowel often changes)</td><td>sehen → gesehen, fahren → gefahren, schreiben → geschrieben, trinken → getrunken, gehen → gegangen</td></tr>
        <tr><td>separable</td><td>prefix + <b>ge</b> + stem</td><td>einkaufen → ein<b>ge</b>kauft, aufstehen → auf<b>ge</b>standen</td></tr>
        <tr><td>inseparable prefix<br><small>be-, ver-, er-, ent-, emp-, ge-, zer-, miss-</small></td><td><b>no ge-</b></td><td>verkaufen → verkauft, besuchen → besucht, verstehen → verstanden</td></tr>
        <tr><td>-ieren</td><td><b>no ge-</b>, ends -t</td><td>studieren → studiert, telefonieren → telefoniert</td></tr>
        <tr><td>mixed</td><td><b>ge</b>- changed stem -<b>t</b></td><td>bringen → gebracht, denken → gedacht, kennen → gekannt</td></tr>
      </tbody>
    </table></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">haben &amp; sein – present tense</h3>
    <div class="tablewrap"><table>
      <thead><tr><th></th><th>haben</th><th>sein</th></tr></thead>
      <tbody>
        <tr><td>ich</td><td>habe</td><td>bin</td></tr>
        <tr><td>du</td><td>hast</td><td>bist</td></tr>
        <tr><td>er / sie / es</td><td>hat</td><td>ist</td></tr>
        <tr><td>wir</td><td>haben</td><td>sind</td></tr>
        <tr><td>ihr</td><td>habt</td><td>seid</td></tr>
        <tr><td>sie / Sie</td><td>haben</td><td>sind</td></tr>
      </tbody>
    </table></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Common verbs</h3>
    <div class="tablewrap"><table>
      <thead><tr><th>Infinitiv</th><th>Perfekt</th><th>English</th></tr></thead>
      <tbody>${VERBS.map(([i, p, e]) =>
        `<tr><td>${i}</td><td><b class="${p.startsWith("ist") ? "v" : ""}">${p}</b></td><td>${e}</td></tr>`).join("")}</tbody>
    </table></div>
  </div>` },
    ],

    // ---------- Karteikarten: extra decks (the word deck is automatic) ----------
    decks: [
      { name: "Perfekt", cards: VERBS.map(([i, p, e]) => ({ a: i, b: p, hint: e, fixed: true })) },
      { name: "Komparativ", cards: KOMP.map(([g, k, s]) => ({ a: g, b: `${k} · ${s}`, hint: "Komparativ · Superlativ", fixed: true })) },
    ],

    // ---------- Übungen (1 item = 1 point) ----------
    // types: sel (dropdown), mc (multiple choice), gap (type), order (build sentence)
    exercises: [
      { title: "A · Zuordnen (match the word)", desc: "Choose the right meaning.", items: [
        { t: "sel", q: "der Einwohner", opts: MATCH_R, a: MATCH_R[0] },
        { t: "sel", q: "die Werkstatt", opts: MATCH_R, a: MATCH_R[1] },
        { t: "sel", q: "berühmt", opts: MATCH_R, a: MATCH_R[2] },
        { t: "sel", q: "verschieden", opts: MATCH_R, a: MATCH_R[3] },
        { t: "sel", q: "verkaufen", opts: MATCH_R, a: MATCH_R[4] },
      ]},
      { title: "B · Wortschatz – Multiple Choice", desc: "Choose the correct option.", items: [
        { t: "mc", q: "Wien liegt ___ von Österreich. <span class='tip'>(east)</span>", opts: ["im Osten", "im Westen", "im Süden", "im Norden"], a: "im Osten" },
        { t: "mc", q: "Hamburg ist die ___ Stadt Deutschlands.", opts: ["zweitgrößte", "zweite größer", "zweitgroße", "größte zweite"], a: "zweitgrößte" },
        { t: "mc", q: "Mein Auto ist kaputt. Ich bringe es in die ___.", opts: ["Werkstatt", "Einwohner", "Beruf", "Räder"], a: "Werkstatt" },
      ]},
      { title: "C · Wortschatz – Lücken (type the word)", desc: "Write the missing word.", items: [
        { t: "gap", q: "Ein Fahrrad hat zwei ___. <span class='tip'>(wheels)</span>", a: ["Räder"] },
        { t: "gap", q: "München hat 1,5 Millionen ___. <span class='tip'>(inhabitants)</span>", a: ["Einwohner"] },
        { t: "gap", q: "Ich spreche ___ oft Englisch. <span class='tip'>(at work – 2 words)</span>", a: ["im Beruf"] },
        { t: "gap", q: "Die Firma ___ Fahrräder. <span class='tip'>(verkaufen, Präsens)</span>", a: ["verkauft"] },
      ]},
      { title: "D · weil – Satzbau (build the sentence)", desc: "Click the words in the correct order. Click a word in the box to remove it.", items: [
        { t: "order", q: "Ich bleibe zu Hause, weil …", w: ["es", "heute", "regnet"], a: ["es heute regnet"] },
        { t: "order", q: "Er ist müde, weil …", w: ["er", "lange", "gearbeitet", "hat"], a: ["er lange gearbeitet hat"] },
        { t: "order", q: "Ich lerne Deutsch, weil …", w: ["ich", "im Beruf", "Deutsch", "sprechen", "muss"],
          a: ["ich im Beruf Deutsch sprechen muss", "ich Deutsch im Beruf sprechen muss"] },
        { t: "order", q: "Weil die Werkstatt geschlossen ist, …", w: ["kann", "ich", "das Auto", "nicht", "abholen"],
          a: ["kann ich das Auto nicht abholen"] },
      ]},
      { title: "E · weil oder denn?", desc: "Look at the word order.", items: [
        { t: "mc", q: "Ich kaufe das Rad, ___ es ist billig.", opts: ["weil", "denn"], a: "denn" },
      ]},
      { title: "F · Komparativ & Superlativ", desc: "Write the correct form of the adjective in brackets.", items: [
        { t: "gap", q: "Berlin ist ___ als Hamburg. <span class='tip'>(groß)</span>", a: ["größer"] },
        { t: "gap", q: "Mein Bruder ist ___ als ich. <span class='tip'>(alt)</span>", a: ["älter"] },
        { t: "gap", q: "Tee trinke ich gern, aber Kaffee trinke ich ___. <span class='tip'>(gern)</span>", a: ["lieber"] },
        { t: "gap", q: "Die Zugspitze ist der ___ Berg Deutschlands. <span class='tip'>(hoch, Superlativ)</span>", a: ["höchste"] },
        { t: "mc", q: "Mein Rad ist so teuer ___ dein Rad.", opts: ["als", "wie", "dass"], a: "wie" },
      ]},
      { title: "G · Perfekt – hat oder ist?", desc: "Choose the auxiliary verb.", items: [
        { t: "mc", q: "Wir ___ in den Süden gefahren.", opts: ["haben", "sind"], a: "sind" },
        { t: "mc", q: "Er ___ sein Auto verkauft.", opts: ["hat", "ist"], a: "hat" },
        { t: "mc", q: "Ich ___ heute um 6 Uhr aufgestanden.", opts: ["habe", "bin"], a: "bin" },
        { t: "mc", q: "Sie ___ zwei Jahre in der Werkstatt gearbeitet.", opts: ["hat", "ist"], a: "hat" },
      ]},
      { title: "H · Perfekt – Partizip II", desc: "Write the 3rd form of the verb in brackets.", items: [
        { t: "gap", q: "Ich habe ein neues Rad ___. <span class='tip'>(kaufen)</span>", a: ["gekauft"] },
        { t: "gap", q: "Wir haben den Film schon ___. <span class='tip'>(sehen)</span>", a: ["gesehen"] },
        { t: "gap", q: "Sie hat in Prag Deutsch ___. <span class='tip'>(studieren)</span>", a: ["studiert"] },
        { t: "gap", q: "Ich habe am Samstag ___. <span class='tip'>(einkaufen)</span>", a: ["eingekauft"] },
      ]},
    ],
  });
})();
