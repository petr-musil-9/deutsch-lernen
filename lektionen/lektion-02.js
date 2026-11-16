// =====================================================================
// LEKTION 2 – Auf dem Bild · so … wie · Familie · Possessivartikel im Dativ
// =====================================================================
(function () {
  const MATCH_R = ["to take place / konat se", "distant, away / vzdálený", "crazy / šílený, bláznivý",
    "to blow / foukat", "secret / tajný", "to be missing / chybět"];

  // [Nominativ-Phrase with hint, Dativ answer] for the flashcard deck
  const POSS = [
    ["mit (mein) Vater", "mit meinem Vater"], ["mit (mein) Mutter", "mit meiner Mutter"],
    ["mit (mein) Kind", "mit meinem Kind"], ["mit (mein) Eltern", "mit meinen Eltern"],
    ["bei (dein) Bruder", "bei deinem Bruder"], ["bei (dein) Schwester", "bei deiner Schwester"],
    ["zu (sein) Oma", "zu seiner Oma"], ["von (sein) Onkel", "von seinem Onkel"],
    ["mit (ihr) Mann", "mit ihrem Mann"], ["bei (ihr) Kindern", "bei ihren Kindern"],
    ["zu (unser) Tante", "zu unserer Tante"], ["von (unser) Großeltern", "von unseren Großeltern"],
    ["mit (euer) Cousin", "mit eurem Cousin"], ["bei (euer) Familie", "bei eurer Familie"],
    ["mit (Ihr) Frau", "mit Ihrer Frau"], ["von (mein) Neffe", "von meinem Neffen"],
  ];

  const FAM = "👨‍👩‍👧 Familie";

  window.LESSONS = window.LESSONS || [];
  window.LESSONS.push({
    id: 2,
    title: "Lektion 2",
    topic: "Auf dem Bild – oben, unten, links, rechts · so … wie · Familie · Possessivartikel im Dativ",

    // ---------- Wörterbuch ----------
    words: [
      { grp: "📍 Wortschatz der Lektion", de: "stattfinden", g: "findet statt, fand statt, hat stattgefunden · separable", en: "to take place, to happen", cz: "konat se, uskutečnit se",
        ex: "Das Konzert findet am Samstag statt.", ext: "The concert takes place on Saturday." },
      { grp: "📍 Wortschatz der Lektion", de: "entfernt", g: "adj. · (weit) entfernt von + Dat.", en: "distant, away", cz: "vzdálený",
        ex: "Brünn ist 200 Kilometer von Prag entfernt.", ext: "Brno is 200 km away from Prague." },
      { grp: "📍 Wortschatz der Lektion", de: "verrückt", g: "adj. · verrückt nach + Dat.", en: "crazy, mad", cz: "šílený, bláznivý",
        ex: "Mein Bruder ist verrückt nach Fußball.", ext: "My brother is crazy about football." },
      { grp: "📍 Wortschatz der Lektion", de: "pusten", g: "pustet, pustete, hat gepustet · auspusten", en: "to blow", cz: "foukat",
        ex: "Das Kind pustet die Kerzen aus.", ext: "The child blows out the candles." },
      { grp: "📍 Wortschatz der Lektion", de: "der Raum", g: "-(e)s, die Räume", en: "room; space", cz: "místnost; prostor",
        ex: "Der Kurs findet in Raum 12 statt.", ext: "The course takes place in room 12." },
      { grp: "📍 Wortschatz der Lektion", de: "daneben", g: "adv. (= neben + es/das)", en: "next to it, beside it", cz: "vedle (toho)",
        ex: "In der Mitte ist ein Haus. Daneben steht ein Baum.", ext: "In the middle there's a house. Next to it is a tree." },
      { grp: "📍 Wortschatz der Lektion", de: "da vorn", g: "adv. · also: da vorne", en: "over there at the front", cz: "tam vepředu",
        ex: "Da vorn ist die Bushaltestelle.", ext: "The bus stop is over there in front." },
      { grp: "📍 Wortschatz der Lektion", de: "da hinten", g: "adv.", en: "over there at the back", cz: "tam vzadu",
        ex: "Da hinten sitzt meine Schwester.", ext: "My sister is sitting over there at the back." },
      { grp: "📍 Wortschatz der Lektion", de: "oben", g: "adv. ↔ unten", en: "above, at the top; upstairs", cz: "nahoře",
        ex: "Oben links ist die Sonne.", ext: "At the top left is the sun." },
      { grp: "📍 Wortschatz der Lektion", de: "unten", g: "adv. ↔ oben", en: "below, at the bottom; downstairs", cz: "dole",
        ex: "Unten rechts sitzt ein Hund.", ext: "At the bottom right sits a dog." },
      { grp: "📍 Wortschatz der Lektion", de: "vorn", g: "adv. ↔ hinten · also: vorne", en: "at the front", cz: "vpředu",
        ex: "Der Lehrer steht vorn an der Tafel.", ext: "The teacher stands at the front by the board." },
      { grp: "📍 Wortschatz der Lektion", de: "hinten", g: "adv. ↔ vorn", en: "at the back", cz: "vzadu",
        ex: "Im Bus sitze ich immer hinten.", ext: "On the bus I always sit at the back." },
      { grp: "📍 Wortschatz der Lektion", de: "links", g: "adv. · links von + Dat.", en: "on the left", cz: "vlevo, nalevo",
        ex: "Links von meinem Vater steht meine Mutter.", ext: "To the left of my father stands my mother." },
      { grp: "📍 Wortschatz der Lektion", de: "rechts", g: "adv. · rechts von + Dat.", en: "on the right", cz: "vpravo, napravo",
        ex: "Die Bank ist rechts.", ext: "The bank is on the right." },
      { grp: "📍 Wortschatz der Lektion", de: "in der Mitte", g: "die Mitte", en: "in the middle", cz: "uprostřed",
        ex: "In der Mitte sitzt meine Oma.", ext: "My grandma is sitting in the middle." },
      { grp: "📍 Wortschatz der Lektion", de: "auf dem Bild", g: "das Bild, -er · auf + Dat.", en: "in the picture", cz: "na obrázku",
        ex: "Auf dem Bild sieht man meine Familie.", ext: "In the picture you can see my family. (German says AUF, not in!)" },
      { grp: "📍 Wortschatz der Lektion", de: "fehlen", g: "fehlt, fehlte, hat gefehlt · jdm. fehlen (+ Dat.)", en: "to be missing; to miss (sb.)", cz: "chybět",
        ex: "Auf dem Bild fehlt mein Bruder. – Du fehlst mir!", ext: "My brother is missing in the picture. – I miss you! (lit. you are missing to me)" },
      { grp: "📍 Wortschatz der Lektion", de: "geheim", g: "adj. · das Geheimnis, -se", en: "secret", cz: "tajný",
        ex: "Das ist geheim! Sag es niemandem.", ext: "That's secret! Don't tell anyone." },

      // ----- Familie -----
      { grp: FAM, de: "die Familie", g: "-, die Familien", en: "family", cz: "rodina",
        ex: "Meine Familie ist groß.", ext: "My family is big." },
      { grp: FAM, de: "die Eltern", g: "Pl. only", en: "parents", cz: "rodiče",
        ex: "Ich wohne bei meinen Eltern.", ext: "I live with my parents." },
      { grp: FAM, de: "der Vater", g: "-s, die Väter · der Papa", en: "father", cz: "otec, táta",
        ex: "Mein Vater ist Ingenieur.", ext: "My father is an engineer." },
      { grp: FAM, de: "die Mutter", g: "-, die Mütter · die Mama", en: "mother", cz: "matka, máma",
        ex: "Ich telefoniere oft mit meiner Mutter.", ext: "I often phone my mother." },
      { grp: FAM, de: "das Kind", g: "-(e)s, die Kinder", en: "child", cz: "dítě",
        ex: "Wir haben zwei Kinder.", ext: "We have two children." },
      { grp: FAM, de: "der Sohn", g: "-(e)s, die Söhne", en: "son", cz: "syn",
        ex: "Mein Sohn ist fünf Jahre alt.", ext: "My son is five years old." },
      { grp: FAM, de: "die Tochter", g: "-, die Töchter", en: "daughter", cz: "dcera",
        ex: "Ihre Tochter studiert in Wien.", ext: "Her daughter studies in Vienna." },
      { grp: FAM, de: "die Geschwister", g: "Pl. only", en: "siblings", cz: "sourozenci",
        ex: "Hast du Geschwister? – Nein, ich bin Einzelkind.", ext: "Do you have siblings? – No, I'm an only child." },
      { grp: FAM, de: "der Bruder", g: "-s, die Brüder", en: "brother", cz: "bratr",
        ex: "Mein Bruder ist älter als ich.", ext: "My brother is older than me." },
      { grp: FAM, de: "die Schwester", g: "-, die Schwestern", en: "sister", cz: "sestra",
        ex: "Meine Schwester ist so groß wie ich.", ext: "My sister is as tall as me." },
      { grp: FAM, de: "die Zwillinge", g: "Pl. · der Zwilling, -e", en: "twins", cz: "dvojčata",
        ex: "Meine Cousinen sind Zwillinge.", ext: "My (female) cousins are twins." },
      { grp: FAM, de: "die Großeltern", g: "Pl. only", en: "grandparents", cz: "prarodiče",
        ex: "Am Sonntag fahren wir zu unseren Großeltern.", ext: "On Sunday we're going to our grandparents'." },
      { grp: FAM, de: "der Großvater", g: "-s, die Großväter · der Opa", en: "grandfather, grandpa", cz: "dědeček, děda",
        ex: "Mein Opa ist 80 Jahre alt.", ext: "My grandpa is 80." },
      { grp: FAM, de: "die Großmutter", g: "-, die Großmütter · die Oma", en: "grandmother, grandma", cz: "babička",
        ex: "Ich helfe meiner Oma im Garten.", ext: "I help my grandma in the garden." },
      { grp: FAM, de: "der Enkel", g: "-s, die Enkel · f: die Enkelin, -nen", en: "grandson / granddaughter", cz: "vnuk / vnučka",
        ex: "Meine Oma hat sechs Enkel.", ext: "My grandma has six grandchildren." },
      { grp: FAM, de: "das Enkelkind", g: "-(e)s, die Enkelkinder", en: "grandchild", cz: "vnouče",
        ex: "Opa spielt mit seinen Enkelkindern.", ext: "Grandpa plays with his grandchildren." },
      { grp: FAM, de: "der Urgroßvater", g: "die Urgroßmutter · die Urgroßeltern", en: "great-grandfather / -mother", cz: "pradědeček / prababička",
        ex: "Meine Urgroßmutter ist 95.", ext: "My great-grandmother is 95." },
      { grp: FAM, de: "der Onkel", g: "-s, die Onkel", en: "uncle", cz: "strýc",
        ex: "Der Bruder von meiner Mutter ist mein Onkel.", ext: "My mother's brother is my uncle." },
      { grp: FAM, de: "die Tante", g: "-, die Tanten", en: "aunt", cz: "teta",
        ex: "Meine Tante wohnt weit entfernt.", ext: "My aunt lives far away." },
      { grp: FAM, de: "der Cousin", g: "-s, die Cousins · f: die Cousine, -n", en: "cousin (m / f)", cz: "bratranec / sestřenice",
        ex: "Mein Cousin und meine Cousine kommen auch.", ext: "My (male) cousin and (female) cousin are coming too." },
      { grp: FAM, de: "der Neffe", g: "-n, die Neffen · n-Deklination!", en: "nephew", cz: "synovec",
        ex: "Ich gratuliere meinem Neffen.", ext: "I congratulate my nephew. (Dativ: dem Neffen)" },
      { grp: FAM, de: "die Nichte", g: "-, die Nichten", en: "niece", cz: "neteř",
        ex: "Meine Nichte pustet die Kerzen aus.", ext: "My niece blows out the candles." },
      { grp: FAM, de: "der (Ehe)mann", g: "-(e)s, die (Ehe)männer", en: "husband", cz: "manžel",
        ex: "Das ist mein Mann, Peter.", ext: "This is my husband, Peter." },
      { grp: FAM, de: "die (Ehe)frau", g: "-, die (Ehe)frauen", en: "wife", cz: "manželka",
        ex: "Er fährt mit seiner Frau nach Italien.", ext: "He's going to Italy with his wife." },
      { grp: FAM, de: "der Partner", g: "-s, - · f: die Partnerin, -nen", en: "partner", cz: "partner / partnerka",
        ex: "Ich wohne mit meiner Partnerin zusammen.", ext: "I live together with my (female) partner." },
      { grp: FAM, de: "die Schwiegereltern", g: "Pl. · der Schwiegervater / die Schwiegermutter", en: "parents-in-law (father- / mother-in-law)", cz: "tchán a tchyně",
        ex: "Wir besuchen unsere Schwiegereltern.", ext: "We're visiting our parents-in-law." },
      { grp: FAM, de: "der Schwiegersohn", g: "f: die Schwiegertochter", en: "son-in-law / daughter-in-law", cz: "zeť / snacha",
        ex: "Ihr Schwiegersohn kommt aus Polen.", ext: "Her son-in-law is from Poland." },
      { grp: FAM, de: "der Schwager", g: "-s, die Schwäger · f: die Schwägerin, -nen", en: "brother-in-law / sister-in-law", cz: "švagr / švagrová",
        ex: "Der Mann von meiner Schwester ist mein Schwager.", ext: "My sister's husband is my brother-in-law." },
      { grp: FAM, de: "der Stiefvater", g: "f: die Stiefmutter", en: "stepfather / stepmother", cz: "otčím / macecha",
        ex: "Mein Stiefvater ist sehr nett.", ext: "My stepfather is very nice." },
      { grp: FAM, de: "der Halbbruder", g: "f: die Halbschwester", en: "half-brother / half-sister", cz: "nevlastní bratr / sestra",
        ex: "Ich habe einen Halbbruder.", ext: "I have a half-brother." },
      { grp: FAM, de: "das Einzelkind", g: "-(e)s, die Einzelkinder", en: "only child", cz: "jedináček",
        ex: "Meine Frau ist Einzelkind.", ext: "My wife is an only child." },
      { grp: FAM, de: "verheiratet", g: "adj. · ledig, geschieden, verwitwet", en: "married (single, divorced, widowed)", cz: "ženatý / vdaná (svobodný, rozvedený, ovdovělý)",
        ex: "Mein Bruder ist seit zwei Jahren verheiratet.", ext: "My brother has been married for two years." },
    ],

    dictExtra: `
      <h3 style="margin-top:0">Wörter mit Tücken (watch out)</h3>
      <p><b>stattfinden</b> is separable: <i>Die Party <mark>findet</mark> bei uns <mark>statt</mark>.</i> · Perfekt: <i>hat stattgefunden</i>.
        Used only for events (Konzert, Kurs, Party, Hochzeit) – never for people.<br>
        <span class="tip">CZ: konat se · EN: take place</span></p>
      <p><b>entfernt</b> – <i>10 km <mark>von</mark> Prag entfernt</i> (10 km away from Prague). <i>weit entfernt</i> = far away.</p>
      <p><b>verrückt nach</b> + Dat. – <i>Sie ist verrückt nach Schokolade.</i> (crazy about / blázen do)</p>
      <p><b>pusten</b> → <b>aus</b>pusten (blow out): <i>Puste die Kerzen aus!</i></p>
      <p><b>der Raum</b> = room as a space (Raum 12, Büroraum); <b>das Zimmer</b> = room in a flat (Schlafzimmer).</p>
      <p><b>fehlen</b> + Dativ – the person who misses is in the Dativ:
        <i>Du fehlst <mark>mir</mark>.</i> = I miss you (lit. "you are missing to me"). <i>Mein Bruder fehlt <mark>meiner Mutter</mark>.</i> = My mother misses my brother.</p>
      <p><b>geheim</b> (adj.) → <b>das Geheimnis</b> (a secret): <i>Das ist mein Geheimnis.</i></p>`,

    // ---------- Grammatik ----------
    grammar: [
      { id: "bild", tab: "📍 Auf dem Bild", html: `
  <h2>Wo? – Positionen auf dem Bild</h2>
  <div class="grid2">
    <div class="card">
      <h3 style="margin-top:0">The picture grid</h3>
      <div class="pic lbl">
        <div>oben links</div><div>oben</div><div>oben rechts</div>
        <div>links</div><div>in der Mitte</div><div>rechts</div>
        <div>unten links</div><div>unten</div><div>unten rechts</div>
      </div>
      <p class="tip">German order: <b>oben / unten first</b>, then links / rechts: <i>oben links</i> (top left), <i>unten rechts</i> (bottom right).</p>
    </div>
    <div class="card">
      <h3 style="margin-top:0">Depth: vorn ↔ hinten</h3>
      <div class="ex"><span class="de">Vorn sitzen die Kinder, hinten stehen die Eltern.</span>
        <span class="tr">At the front sit the children, at the back stand the parents. (vpředu / vzadu)</span></div>
      <h3>Pointing: da vorn / da hinten</h3>
      <div class="ex"><span class="de">Wo ist dein Bruder? – <mark>Da hinten</mark>, neben dem Fenster.</span>
        <span class="tr">Over there at the back, next to the window.</span></div>
      <div class="ex"><span class="de"><mark>Da vorn</mark> ist der Ausgang.</span>
        <span class="tr">The exit is over there in front.</span></div>
      <p class="tip"><i>vorn</i> = <i>vorne</i> (both are correct, <i>vorne</i> is more spoken).</p>
    </div>
  </div>
  <div class="card">
    <div class="rule"><b>auf dem Bild</b> = in the picture / na obrázku. German uses <b>auf</b> (not <i>in</i>) + Dativ.</div>
    <h3>Describing a picture – useful phrases</h3>
    <div class="ex"><span class="de">Auf dem Bild sieht man meine Familie.</span><span class="tr">In the picture you can see my family.</span></div>
    <div class="ex"><span class="de">Oben links ist die Sonne. In der Mitte steht ein Haus.</span><span class="tr">Top left is the sun. In the middle there's a house.</span></div>
    <div class="ex"><span class="de">Links ist ein Baum, und <mark>daneben</mark> sitzt eine Katze.</span><span class="tr">On the left is a tree, and next to it sits a cat.</span></div>
    <div class="ex"><span class="de">Was <mark>fehlt</mark> auf dem Bild? – Der Hund <mark>fehlt</mark>. / Zwei Personen <mark>fehlen</mark>.</span>
      <span class="tr">What is missing in the picture? – The dog is missing. / Two people are missing. (fehlt = sg., fehlen = pl.)</span></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Adverb alone vs. preposition + Dativ</h3>
    <p>The adverb stands <b>alone</b>. If you say <i>what</i> it is next to / above …, use a preposition + <b>Dativ</b>.</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Adverb (alone)</th><th>Preposition + Dativ</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>oben</td><td>über <b>dem</b> Haus</td><td>above (the house)</td></tr>
        <tr><td>unten</td><td>unter <b>dem</b> Tisch</td><td>below (the table)</td></tr>
        <tr><td>vorn</td><td>vor <b>dem</b> Haus</td><td>in front (of the house)</td></tr>
        <tr><td>hinten</td><td>hinter <b>dem</b> Haus</td><td>at the back / behind (the house)</td></tr>
        <tr><td>daneben</td><td>neben <b>meinem</b> Vater</td><td>next to it / next to my father</td></tr>
        <tr><td>links / rechts</td><td>links / rechts von <b>meiner</b> Mutter</td><td>(to the) left / right of my mother</td></tr>
      </tbody>
    </table></div>
    <p class="tip"><b>da-</b> words replace "preposition + it": daneben (next to it), dahinter (behind it), davor (in front of it),
      darüber (above it), darunter (under it), dazwischen (between them).</p>
  </div>` },

      { id: "sowie", tab: "⚖️ so … wie", html: `
  <h2>Vergleich: so … wie (as … as / stejně … jako)</h2>
  <div class="card">
    <div class="rule"><b>Equal</b> → <b>so</b> + adjective in its <b>basic form</b> + <b>wie</b>.</div>
    <div class="formula">so + <span class="v">Grundform</span> + wie</div>
    <div class="ex"><span class="de">Meine Schwester ist <mark>so groß wie</mark> mein Vater.</span>
      <span class="tr">My sister is as tall as my father. (stejně vysoká jako)</span></div>
    <div class="ex"><span class="de">Prag ist <mark>so schön wie</mark> Wien.</span>
      <span class="tr">Prague is as beautiful as Vienna.</span></div>
  </div>
  <div class="grid2">
    <div class="card">
      <h3 style="margin-top:0">nicht so … wie (not as … as)</h3>
      <div class="ex"><span class="de">Brünn ist <mark>nicht so groß wie</mark> Prag.</span>
        <span class="tr">Brno is not as big as Prague.</span></div>
      <div class="ex"><span class="de">Mein Opa ist <mark>nicht so alt wie</mark> meine Oma.</span>
        <span class="tr">My grandpa isn't as old as my grandma.</span></div>
    </div>
    <div class="card">
      <h3 style="margin-top:0">Stronger / weaker</h3>
      <div class="ex"><span class="de"><mark>genauso</mark> … wie</span><span class="tr">just as … as (přesně tak … jako)</span></div>
      <div class="ex"><span class="de"><mark>fast so</mark> … wie</span><span class="tr">almost as … as</span></div>
      <div class="ex"><span class="de"><mark>doppelt so</mark> … wie</span><span class="tr">twice as … as</span></div>
      <div class="ex"><span class="de">Mein Bruder ist genauso alt wie mein Cousin.</span></div>
    </div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">so … wie vs. Komparativ + als</h3>
    <div class="tablewrap"><table>
      <thead><tr><th>Meaning</th><th>Structure</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>A = B</td><td>so + <b>Grundform</b> + <b>wie</b></td><td>Anna ist so groß wie Eva.</td></tr>
        <tr><td>A &lt; B</td><td>nicht so + Grundform + wie</td><td>Anna ist nicht so groß wie Eva.</td></tr>
        <tr><td>A &gt; B</td><td><b>Komparativ</b> + <b>als</b></td><td>Anna ist größer als Eva.</td></tr>
      </tbody>
    </table></div>
    <p class="tip">Memory trick: <b>wie</b> ↔ basic form, <b>als</b> ↔ -er form. Never ✗ <i>so größer wie</i>, never ✗ <i>größer wie</i>.</p>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Watch out</h3>
    <p><b>1. After wie / als → Nominativ</b> (the same case as the other person):</p>
    <div class="ex"><span class="de">Er ist so alt wie <mark>ich</mark>. · Sie ist so groß wie <mark>er</mark>.</span>
      <span class="tr">(not ✗ wie mich / wie ihn)</span></div>
    <p><b>2. Irregular words stay in the basic form:</b></p>
    <div class="ex"><span class="de">Ich trinke Tee <mark>so gern wie</mark> Kaffee. · Er arbeitet <mark>so viel wie</mark> sein Vater. · Sie spielt <mark>so gut wie</mark> ihre Schwester.</span>
      <span class="tr">I like tea as much as coffee. · He works as much as his father. · She plays as well as her sister.</span></div>
    <p class="tip">Bonus: <i>so gut wie</i> can also mean "practically, almost": <i>Ich bin so gut wie fertig.</i> = I'm practically done.</p>
  </div>` },

      { id: "fam", tab: "👨‍👩‍👧 Familie", html: `
  <h2>Die Familie – alle Familienmitglieder</h2>
  <div class="card tablewrap">
    <table>
      <thead><tr><th>Generation</th><th>♂ männlich</th><th>♀ weiblich</th><th>Plural / both</th></tr></thead>
      <tbody>
        <tr><td>+3</td><td>der Urgroßvater</td><td>die Urgroßmutter</td><td>die Urgroßeltern <small>(praprarodiče)</small></td></tr>
        <tr><td>+2</td><td>der Großvater · Opa</td><td>die Großmutter · Oma</td><td>die Großeltern <small>(prarodiče)</small></td></tr>
        <tr><td>+1</td><td>der Vater · Papa</td><td>die Mutter · Mama</td><td>die Eltern <small>(rodiče)</small></td></tr>
        <tr><td>+1</td><td>der Onkel</td><td>die Tante</td><td>–</td></tr>
        <tr><td>+1</td><td>der Schwiegervater</td><td>die Schwiegermutter</td><td>die Schwiegereltern <small>(tchán a tchyně)</small></td></tr>
        <tr><td>+1</td><td>der Stiefvater</td><td>die Stiefmutter</td><td><small>(otčím / macecha)</small></td></tr>
        <tr><td><b>0</b></td><td>der Bruder</td><td>die Schwester</td><td>die Geschwister <small>(sourozenci)</small></td></tr>
        <tr><td>0</td><td>der Halbbruder</td><td>die Halbschwester</td><td><small>(nevlastní sourozenci)</small></td></tr>
        <tr><td>0</td><td>der Cousin</td><td>die Cousine</td><td>die Cousins / Cousinen <small>(bratranec / sestřenice)</small></td></tr>
        <tr><td>0</td><td>der (Ehe)mann</td><td>die (Ehe)frau</td><td>das Ehepaar <small>(manželé)</small></td></tr>
        <tr><td>0</td><td>der Schwager</td><td>die Schwägerin</td><td><small>(švagr / švagrová)</small></td></tr>
        <tr><td>0</td><td>der Partner · Freund</td><td>die Partnerin · Freundin</td><td><small>(partner, přítel / přítelkyně)</small></td></tr>
        <tr><td>−1</td><td>der Sohn</td><td>die Tochter</td><td>die Kinder <small>(děti)</small></td></tr>
        <tr><td>−1</td><td>der Neffe</td><td>die Nichte</td><td><small>(synovec / neteř)</small></td></tr>
        <tr><td>−1</td><td>der Schwiegersohn</td><td>die Schwiegertochter</td><td><small>(zeť / snacha)</small></td></tr>
        <tr><td>−2</td><td>der Enkel</td><td>die Enkelin</td><td>die Enkel · Enkelkinder <small>(vnoučata)</small></td></tr>
      </tbody>
    </table>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Wer ist das? – von + Dativ</h3>
    <p>To explain a relationship, use <b>von + Dativ</b> (more spoken) – a good place to practise the Dativ endings!</p>
    <div class="ex"><span class="de">Der Bruder <mark>von meiner</mark> Mutter ist mein Onkel.</span><span class="tr">My mother's brother is my uncle.</span></div>
    <div class="ex"><span class="de">Die Tochter <mark>von meinem</mark> Bruder ist meine Nichte.</span><span class="tr">My brother's daughter is my niece.</span></div>
    <div class="ex"><span class="de">Die Eltern <mark>von meinem</mark> Mann sind meine Schwiegereltern.</span><span class="tr">My husband's parents are my parents-in-law.</span></div>
    <div class="ex"><span class="de">Die Kinder <mark>von meinen</mark> Kindern sind meine Enkel.</span><span class="tr">My children's children are my grandchildren.</span></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Useful sentences</h3>
    <div class="ex"><span class="de">Wie viele Geschwister hast du? – Ich habe einen Bruder und zwei Schwestern.</span><span class="tr">How many siblings do you have? – I have one brother and two sisters.</span></div>
    <div class="ex"><span class="de">Ich habe keine Geschwister. Ich bin Einzelkind.</span><span class="tr">I don't have any siblings. I'm an only child.</span></div>
    <div class="ex"><span class="de">Bist du verheiratet? – Nein, ich bin ledig. / Ich bin geschieden.</span><span class="tr">Are you married? – No, I'm single. / I'm divorced.</span></div>
    <p class="tip"><b>die Eltern</b>, <b>die Geschwister</b>, <b>die Großeltern</b> exist only in the plural.
      <b>der Neffe</b> is n-declension: <i>den / dem Neffen</i>.</p>
  </div>` },

      { id: "possdat", tab: "🎁 Possessiv – Dativ", html: `
  <h2>Possessivartikel im Dativ (3. pád přivlastňovacích zájmen)</h2>
  <div class="card">
    <div class="rule">In the Dativ, <b>mein, dein, sein …</b> take the same endings as the definite article <b>dem / der / dem / den</b>.</div>
    <div class="tablewrap"><table>
      <thead><tr><th></th><th>m (der)</th><th>f (die)</th><th>n (das)</th><th>Plural (die)</th></tr></thead>
      <tbody>
        <tr><td>Artikel Dativ</td><td>de<b>m</b></td><td>de<b>r</b></td><td>de<b>m</b></td><td>de<b>n</b> + -n</td></tr>
        <tr><td><b>Possessiv Dativ</b></td><td>mein<b class="v">em</b> Vater</td><td>mein<b class="v">er</b> Mutter</td><td>mein<b class="v">em</b> Kind</td><td>mein<b class="v">en</b> Kinder<b class="v">n</b></td></tr>
      </tbody>
    </table></div>
    <p class="tip">Plural Dativ: the noun gets an extra <b>-n</b> (Kinder → Kinder<b>n</b>, Brüder → Brüder<b>n</b>), unless it already ends in -n or -s
      (Eltern, Schwestern, Cousins).</p>
  </div>
  <div class="card">
    <h3 style="margin-top:0">All persons</h3>
    <div class="tablewrap"><table>
      <thead><tr><th>Person</th><th>Nominativ</th><th>m / n Dativ</th><th>f Dativ</th><th>Pl Dativ</th></tr></thead>
      <tbody>
        <tr><td>ich</td><td>mein</td><td>meinem</td><td>meiner</td><td>meinen</td></tr>
        <tr><td>du</td><td>dein</td><td>deinem</td><td>deiner</td><td>deinen</td></tr>
        <tr><td>er / es</td><td>sein</td><td>seinem</td><td>seiner</td><td>seinen</td></tr>
        <tr><td>sie (she)</td><td>ihr</td><td>ihrem</td><td>ihrer</td><td>ihren</td></tr>
        <tr><td>wir</td><td>unser</td><td>unserem</td><td>unserer</td><td>unseren</td></tr>
        <tr><td>ihr (you pl.)</td><td>euer</td><td><b>eurem</b></td><td><b>eurer</b></td><td><b>euren</b></td></tr>
        <tr><td>sie (they) / Sie</td><td>ihr / Ihr</td><td>ihrem / Ihrem</td><td>ihrer / Ihrer</td><td>ihren / Ihren</td></tr>
      </tbody>
    </table></div>
    <p class="tip"><b>euer</b> loses its -e-: euer → <b>eur</b>em (not ✗ euerem). · <b>sein</b> = his/its, <b>ihr</b> = her/their:
      <i>Peter fährt mit <mark>seiner</mark> Schwester, Anna fährt mit <mark>ihrer</mark> Schwester.</i></p>
  </div>
  <div class="card">
    <h3 style="margin-top:0">Nominativ – Akkusativ – Dativ side by side (mein)</h3>
    <div class="tablewrap"><table>
      <thead><tr><th></th><th>m</th><th>f</th><th>n</th><th>Pl</th></tr></thead>
      <tbody>
        <tr><td>Nom. (wer?)</td><td>mein</td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td>Akk. (wen?)</td><td>meinen</td><td>meine</td><td>mein</td><td>meine</td></tr>
        <tr><td><b>Dat. (wem?)</b></td><td><b>meinem</b></td><td><b>meiner</b></td><td><b>meinem</b></td><td><b>meinen</b> +n</td></tr>
      </tbody>
    </table></div>
  </div>
  <div class="card">
    <h3 style="margin-top:0">When do I use the Dativ?</h3>
    <p><b>1. After these prepositions – always:</b> <i>aus, bei, mit, nach, seit, von, zu</i> (+ gegenüber)</p>
    <div class="ex"><span class="de">Ich wohne <mark>bei meinen</mark> Eltern. · Wir fahren <mark>zu unserer</mark> Oma. · Das Geschenk ist <mark>von meinem</mark> Onkel.</span>
      <span class="tr">I live with my parents. · We're going to our grandma's. · The present is from my uncle.</span></div>
    <p><b>2. Position (Wo?)</b> with <i>in, an, auf, neben, hinter, vor, über, unter, zwischen</i>:</p>
    <div class="ex"><span class="de">Auf dem Bild sitze ich <mark>neben meinem</mark> Bruder.</span><span class="tr">In the picture I'm sitting next to my brother.</span></div>
    <p><b>3. Verbs with Dativ:</b> <i>helfen, danken, gehören, gefallen, gratulieren, schmecken, <mark>fehlen</mark></i></p>
    <div class="ex"><span class="de">Ich helfe <mark>meiner</mark> Schwester. · Das Auto gehört <mark>unserem</mark> Vater. · Du fehlst <mark>deiner</mark> Mutter.</span>
      <span class="tr">I help my sister. · The car belongs to our father. · Your mother misses you.</span></div>
    <p><b>4. Indirect object (to whom? – wem?)</b> with <i>geben, schenken, zeigen, sagen</i>:</p>
    <div class="ex"><span class="de">Ich schenke <mark>meinem</mark> Sohn ein Rad.</span><span class="tr">I'm giving my son a bike.</span></div>
  </div>` },
    ],

    // ---------- Karteikarten ----------
    decks: [
      { name: "Familie", cards: [] },   // filled below from the word list
      { name: "Possessiv Dativ", cards: POSS.map(([a, b]) => ({ a, b, hint: "Dativ", fixed: true })) },
    ],

    // ---------- Übungen ----------
    exercises: [
      { title: "A · Zuordnen (match the word)", desc: "Choose the right meaning.", items: [
        { t: "sel", q: "stattfinden", opts: MATCH_R, a: MATCH_R[0] },
        { t: "sel", q: "entfernt", opts: MATCH_R, a: MATCH_R[1] },
        { t: "sel", q: "verrückt", opts: MATCH_R, a: MATCH_R[2] },
        { t: "sel", q: "pusten", opts: MATCH_R, a: MATCH_R[3] },
        { t: "sel", q: "geheim", opts: MATCH_R, a: MATCH_R[4] },
        { t: "sel", q: "fehlen", opts: MATCH_R, a: MATCH_R[5] },
      ]},
      { title: "B · Auf dem Bild", desc: `Look at the picture and complete the sentences.
        <div class="pic" style="margin-top:8px">
          <div>☀️</div><div></div><div>🐦</div>
          <div>🌳</div><div>🏠</div><div>🚗</div>
          <div>🐱</div><div></div><div>🐶</div>
        </div>`, items: [
        { t: "mc", q: "Die Sonne ist ___.", opts: ["oben links", "oben rechts", "unten links", "unten rechts"], a: "oben links" },
        { t: "mc", q: "Der Vogel ist ___.", opts: ["oben links", "oben rechts", "unten links", "in der Mitte"], a: "oben rechts" },
        { t: "mc", q: "Das Haus steht ___.", opts: ["in der Mitte", "oben", "unten", "da hinten"], a: "in der Mitte" },
        { t: "mc", q: "Die Katze sitzt ___.", opts: ["unten links", "unten rechts", "oben links", "in der Mitte"], a: "unten links" },
        { t: "mc", q: "Der Hund ist ___ rechts.", opts: ["unten", "oben", "vorn"], a: "unten" },
        { t: "mc", q: "Das Auto steht ___ vom Haus.", opts: ["rechts", "links", "über"], a: "rechts" },
        { t: "gap", q: "In der Mitte ist ein Haus. Links ___ steht ein Baum. <span class='tip'>(next to it)</span>", a: ["daneben"] },
        { t: "gap", q: "Auf dem Bild ___ ein Mensch. <span class='tip'>(fehlen)</span>", a: ["fehlt"] },
        { t: "mc", q: "___ sieht man ein Haus und ein Auto.", opts: ["Auf dem Bild", "In dem Bild", "Am Bild"], a: "Auf dem Bild" },
      ]},
      { title: "C · Gegenteile (opposites)", desc: "Write the opposite.", items: [
        { t: "gap", q: "oben ↔ ___", a: ["unten"] },
        { t: "gap", q: "links ↔ ___", a: ["rechts"] },
        { t: "gap", q: "vorn ↔ ___", a: ["hinten"] },
        { t: "gap", q: "da hinten ↔ ___", a: ["da vorn", "da vorne"] },
        { t: "mc", q: "Im Kino sitze ich immer in der letzten Reihe, ganz ___.", opts: ["hinten", "vorn", "oben"], a: "hinten" },
        { t: "mc", q: "Wo ist der Ausgang? – ___, direkt vor dir!", opts: ["Da vorn", "Da hinten", "Daneben"], a: "Da vorn" },
      ]},
      { title: "D · Wortschatz – Lücken", desc: "Write the missing word.", items: [
        { t: "gap", q: "Das Konzert findet am Freitag ___. <span class='tip'>(takes place)</span>", a: ["statt"] },
        { t: "gap", q: "Die Party hat gestern bei uns ___. <span class='tip'>(stattfinden, Perfekt)</span>", a: ["stattgefunden"] },
        { t: "gap", q: "Brünn ist 200 Kilometer von Prag ___. <span class='tip'>(away)</span>", a: ["entfernt"] },
        { t: "gap", q: "Das Kind ___ die Kerzen aus. <span class='tip'>(pusten)</span>", a: ["pustet"] },
        { t: "gap", q: "Der Deutschkurs ist in ___ 12. <span class='tip'>(room)</span>", a: ["Raum"] },
        { t: "gap", q: "Das ist ___! Sag es niemandem. <span class='tip'>(secret)</span>", a: ["geheim"] },
        { t: "gap", q: "Mein Bruder ist ___ nach Fußball. <span class='tip'>(crazy)</span>", a: ["verrückt"] },
        { t: "gap", q: "Du ___ mir! <span class='tip'>(I miss you – fehlen)</span>", a: ["fehlst"] },
      ]},
      { title: "E · so … wie oder als?", desc: "Choose or write the correct form.", items: [
        { t: "mc", q: "Anna ist so groß ___ Eva.", opts: ["wie", "als"], a: "wie" },
        { t: "mc", q: "Anna ist größer ___ Eva.", opts: ["wie", "als"], a: "als" },
        { t: "mc", q: "Brünn ist nicht so groß ___ Prag.", opts: ["wie", "als"], a: "wie" },
        { t: "mc", q: "Mein Opa ist nicht so ___ wie meine Oma.", opts: ["alt", "älter", "am ältesten"], a: "alt" },
        { t: "gap", q: "Meine Schwester ist so ___ wie mein Vater. <span class='tip'>(groß)</span>", a: ["groß"] },
        { t: "gap", q: "Tee trinke ich ___ gern wie Kaffee.", a: ["so", "genauso"] },
        { t: "gap", q: "Er arbeitet so ___ wie sein Vater. <span class='tip'>(viel)</span>", a: ["viel"] },
        { t: "mc", q: "Mein Cousin ist so alt wie ___.", opts: ["ich", "mich", "mir"], a: "ich" },
        { t: "mc", q: "Mein Bruder ist ___ alt wie mein Cousin – beide sind 25.", opts: ["genauso", "mehr", "doppelt"], a: "genauso" },
        { t: "order", q: "My sister is as old as my brother.", w: ["Meine Schwester", "ist", "so", "alt", "wie", "mein Bruder"],
          a: ["Meine Schwester ist so alt wie mein Bruder"] },
        { t: "order", q: "Brno is not as far away as Vienna.", w: ["Brünn", "ist", "nicht", "so", "weit entfernt", "wie", "Wien"],
          a: ["Brünn ist nicht so weit entfernt wie Wien"] },
      ]},
      { title: "F · Familie – Wer ist das?", desc: "Write the family member (without article).", items: [
        { t: "gap", q: "Der Bruder von meiner Mutter ist mein ___.", a: ["Onkel"] },
        { t: "gap", q: "Die Schwester von meinem Vater ist meine ___.", a: ["Tante"] },
        { t: "gap", q: "Die Mutter von meiner Mutter ist meine ___.", a: ["Großmutter", "Oma"] },
        { t: "gap", q: "Der Sohn von meiner Tante ist mein ___.", a: ["Cousin"] },
        { t: "gap", q: "Die Tochter von meinem Onkel ist meine ___.", a: ["Cousine", "Kusine"] },
        { t: "gap", q: "Der Sohn von meinem Bruder ist mein ___.", a: ["Neffe"] },
        { t: "gap", q: "Die Tochter von meiner Schwester ist meine ___.", a: ["Nichte"] },
        { t: "gap", q: "Mein Bruder und meine Schwester sind meine ___.", a: ["Geschwister"] },
        { t: "gap", q: "Der Vater von meiner Frau ist mein ___.", a: ["Schwiegervater"] },
        { t: "gap", q: "Der Mann von meiner Schwester ist mein ___.", a: ["Schwager"] },
        { t: "gap", q: "Die Kinder von meinem Sohn sind meine ___.", a: ["Enkel", "Enkelkinder"] },
        { t: "gap", q: "Mein Vater und meine Mutter sind meine ___.", a: ["Eltern"] },
        { t: "mc", q: "Ich habe keine Geschwister. Ich bin ___.", opts: ["Einzelkind", "Zwilling", "Enkel"], a: "Einzelkind" },
      ]},
      { title: "G · Possessivartikel im Dativ", desc: "Write the possessive in the Dativ. The word in brackets shows the person.", items: [
        { t: "gap", q: "Ich wohne bei ___ Eltern. <span class='tip'>(mein)</span>", a: ["meinen"] },
        { t: "gap", q: "Er spielt mit ___ Bruder. <span class='tip'>(sein)</span>", a: ["seinem"] },
        { t: "gap", q: "Wir fahren zu ___ Oma. <span class='tip'>(unser)</span>", a: ["unserer"] },
        { t: "gap", q: "Anna telefoniert mit ___ Mann. <span class='tip'>(ihr)</span>", a: ["ihrem"] },
        { t: "gap", q: "Hilfst du ___ Schwester? <span class='tip'>(dein)</span>", a: ["deiner"] },
        { t: "gap", q: "Das Geschenk ist von ___ Kind. <span class='tip'>(mein)</span>", a: ["meinem"] },
        { t: "gap", q: "Wohnt ihr bei ___ Tante? <span class='tip'>(euer)</span>", a: ["eurer"] },
        { t: "gap", q: "Das Haus gehört ___ Onkel. <span class='tip'>(unser)</span>", a: ["unserem"] },
        { t: "gap", q: "Mein Bruder fehlt ___ Mutter. <span class='tip'>(mein)</span>", a: ["meiner"] },
        { t: "gap", q: "Opa spielt mit ___ Enkelkindern. <span class='tip'>(sein)</span>", a: ["seinen"] },
        { t: "gap", q: "Wie geht es ___ Frau, Herr Novák? <span class='tip'>(Ihr)</span>", a: ["Ihrer"] },
        { t: "gap", q: "Ich gratuliere ___ Neffen. <span class='tip'>(mein)</span>", a: ["meinem"] },
      ]},
      { title: "H · Nominativ, Akkusativ oder Dativ?", desc: "Choose the correct form.", items: [
        { t: "mc", q: "___ Vater ist Arzt.", opts: ["Mein", "Meinen", "Meinem"], a: "Mein" },
        { t: "mc", q: "Ich besuche ___ Vater.", opts: ["mein", "meinen", "meinem"], a: "meinen" },
        { t: "mc", q: "Ich fahre mit ___ Vater.", opts: ["mein", "meinen", "meinem"], a: "meinem" },
        { t: "mc", q: "Ich gehe mit ___ Kindern spazieren.", opts: ["meine", "meinen", "meinem"], a: "meinen" },
        { t: "mc", q: "Peter wohnt neben ___ Cousine.", opts: ["seine", "seiner", "seinem"], a: "seiner" },
        { t: "mc", q: "Maria fährt mit ___ Bruder in den Urlaub.", opts: ["seinem", "ihrem", "ihren"], a: "ihrem" },
        { t: "mc", q: "Ich schenke ___ Sohn ein Rad.", opts: ["meinen", "meinem", "meiner"], a: "meinem" },
        { t: "mc", q: "Auf dem Bild sitze ich zwischen ___ Großeltern.", opts: ["meine", "meinen", "meinem"], a: "meinen" },
      ]},
      { title: "I · Satzbau (build the sentence)", desc: "Click the words in the correct order. Click a word in the box to remove it.", items: [
        { t: "order", q: "My brother is missing in the picture.", w: ["Auf dem Bild", "fehlt", "mein Bruder"],
          a: ["Auf dem Bild fehlt mein Bruder", "Mein Bruder fehlt auf dem Bild"] },
        { t: "order", q: "The party takes place at my parents'.", w: ["Die Party", "findet", "bei meinen Eltern", "statt"],
          a: ["Die Party findet bei meinen Eltern statt"] },
        { t: "order", q: "My grandma lives 50 km away from us.", w: ["Meine Oma", "wohnt", "50 Kilometer", "von uns", "entfernt"],
          a: ["Meine Oma wohnt 50 Kilometer von uns entfernt"] },
        { t: "order", q: "Next to my father sits my mother.", w: ["Neben", "meinem Vater", "sitzt", "meine Mutter"],
          a: ["Neben meinem Vater sitzt meine Mutter"] },
        { t: "order", q: "My niece blows out the candles.", w: ["Meine Nichte", "pustet", "die Kerzen", "aus"],
          a: ["Meine Nichte pustet die Kerzen aus"] },
      ]},
    ],
  });

  // Familie deck = all family words from the dictionary
  const les = window.LESSONS[window.LESSONS.length - 1];
  les.decks[0].cards = les.words.filter(w => w.grp === FAM)
    .map(w => ({ a: w.de, b: `${w.en}<br><small>${w.cz}</small>`, hint: w.g || "" }));
})();
