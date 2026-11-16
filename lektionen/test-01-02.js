// =====================================================================
// SOUHRNNÝ TEST – Lektion 1 + 2 (100 Punkte)
// Shown as its own button ("Test L1+L2") next to the lessons.
// review: true → only the test tab is shown, with a final evaluation.
// ref: [lessonId, tabId] → "review this" link in the evaluation.
// =====================================================================
(function () {
  const M1 = ["inhabitant / obyvatel", "workshop, garage / dílna, autoservis", "famous / slavný",
    "various, different / různý", "to sell / prodávat", "second largest / druhý největší"];
  const M2 = ["to take place / konat se", "distant, away / vzdálený", "crazy / šílený, bláznivý",
    "to blow / foukat", "room, space / místnost, prostor", "secret / tajný",
    "to be missing / chybět", "next to it / vedle (toho)"];
  const ART = ["der", "die", "das"];
  const TF = ["richtig ✓", "falsch ✗"];
  const hint = s => ` <span class='tip'>(${s})</span>`;

  window.LESSONS = window.LESSONS || [];
  window.LESSONS.push({
    id: 99,
    review: true,
    title: "Test L1+L2",
    topic: "Souhrnný test · 100 Punkte · Wortschatz, Himmelsrichtungen, Familie, Auf dem Bild, weil, Komparativ, so … wie, Perfekt, Possessiv im Dativ",
    words: [], grammar: [],

    exercises: [
      // ---------------- Lektion 1 – Wortschatz ----------------
      { tag: "L1", ref: [1, "dict"], title: "A · Wortschatz L1 – Bedeutung", desc: "Choose the right meaning.", items: [
        { t: "sel", q: "der Einwohner", opts: M1, a: M1[0] },
        { t: "sel", q: "die Werkstatt", opts: M1, a: M1[1] },
        { t: "sel", q: "berühmt", opts: M1, a: M1[2] },
        { t: "sel", q: "verschieden", opts: M1, a: M1[3] },
        { t: "sel", q: "verkaufen", opts: M1, a: M1[4] },
        { t: "sel", q: "zweitgrößte", opts: M1, a: M1[5] },
      ]},
      { tag: "L1", ref: [1, "dict"], title: "B · Himmelsrichtungen", desc: "Where is the city? Choose or write.", items: [
        { t: "mc", q: "Hamburg und Kiel liegen ___ von Deutschland." + hint("sever"),
          opts: ["im Norden", "im Süden", "im Osten", "im Westen"], a: "im Norden" },
        { t: "mc", q: "München liegt ___ von Deutschland." + hint("jih"),
          opts: ["im Norden", "im Süden", "im Osten", "im Westen"], a: "im Süden" },
        { t: "gap", q: "Dresden liegt im ___ von Deutschland." + hint("východ"), a: ["Osten"] },
        { t: "gap", q: "Köln liegt ___ von Deutschland." + hint("na západě – 2 words"), a: ["im Westen"] },
      ]},
      { tag: "L1", ref: [1, "dict"], title: "C · Wortschatz L1 – Lücken", desc: "Write the missing word.", items: [
        { t: "gap", q: "Ich fahre jeden Tag mit dem ___ zur Arbeit." + hint("kolo"), a: ["Rad", "Fahrrad"] },
        { t: "gap", q: "Prag hat 1,3 Millionen ___." + hint("obyvatelé"), a: ["Einwohner"] },
        { t: "gap", q: "Mein Auto ist kaputt, es ist in der ___." + hint("autoservis"), a: ["Werkstatt"] },
        { t: "gap", q: "Im ___ spreche ich oft Englisch." + hint("v práci"), a: ["Beruf"] },
        { t: "gap", q: "Wir verkaufen ___ Räder: Stadträder, Kinderräder und E-Bikes." + hint("různá"), a: ["verschiedene"] },
      ]},

      // ---------------- Lektion 2 – Wortschatz ----------------
      { tag: "L2", ref: [2, "dict"], title: "D · Wortschatz L2 – Bedeutung", desc: "Choose the right meaning.", items: [
        { t: "sel", q: "stattfinden", opts: M2, a: M2[0] },
        { t: "sel", q: "entfernt", opts: M2, a: M2[1] },
        { t: "sel", q: "verrückt", opts: M2, a: M2[2] },
        { t: "sel", q: "pusten", opts: M2, a: M2[3] },
        { t: "sel", q: "der Raum", opts: M2, a: M2[4] },
        { t: "sel", q: "geheim", opts: M2, a: M2[5] },
        { t: "sel", q: "fehlen", opts: M2, a: M2[6] },
        { t: "sel", q: "daneben", opts: M2, a: M2[7] },
      ]},
      { tag: "L2", ref: [2, "bild"], title: "E · Auf dem Bild – Omas Geburtstag", desc: `Look at the picture and complete the sentences.
        <div class="pic" style="margin-top:8px">
          <div>👴</div><div>🎂</div><div>👵</div>
          <div>👨</div><div>👧</div><div>👩</div>
          <div>🐕</div><div>🎁</div><div>🐈</div>
        </div>`, items: [
        { t: "mc", q: "Der Opa ist ___.", opts: ["oben links", "oben rechts", "unten links", "in der Mitte"], a: "oben links" },
        { t: "mc", q: "Die Oma ist ___.", opts: ["oben links", "oben rechts", "unten rechts", "in der Mitte"], a: "oben rechts" },
        { t: "mc", q: "Das Mädchen 👧 steht ___.", opts: ["in der Mitte", "oben", "unten", "da hinten"], a: "in der Mitte" },
        { t: "gap", q: "Der Hund ist ___ links." + hint("dole"), a: ["unten"] },
        { t: "mc", q: "Oben in der Mitte ist der Kuchen. ___ sitzt rechts die Oma.", opts: ["Daneben", "Da hinten", "Unten"], a: "Daneben" },
        { t: "mc", q: "Wo ist die Katze? – Unten ___.", opts: ["rechts", "links", "vorn"], a: "rechts" },
      ]},
      { tag: "L2", ref: [2, "dict"], title: "F · Wortschatz L2 – Lücken", desc: "Write the missing word.", items: [
        { t: "gap", q: "Der Deutschkurs findet in Raum 12 ___." + hint("koná se"), a: ["statt"] },
        { t: "gap", q: "Meine Tante wohnt 300 Kilometer von uns ___." + hint("vzdálená"), a: ["entfernt"] },
        { t: "gap", q: "Puste die Kerzen ___!" + hint("sfoukni"), a: ["aus"] },
        { t: "gap", q: "Im Kino sitze ich gern ganz ___, in der letzten Reihe." + hint("vzadu"), a: ["hinten"] },
        { t: "gap", q: "Mama, du ___ mir!" + hint("chybíš – fehlen"), a: ["fehlst"] },
      ]},
      { tag: "L2", ref: [2, "fam"], title: "G · Familie – Wer ist das?", desc: "Write the family member (without article) or choose.", items: [
        { t: "gap", q: "Die Mutter von meinem Vater ist meine ___.", a: ["Großmutter", "Oma"] },
        { t: "gap", q: "Der Bruder von meinem Vater ist mein ___.", a: ["Onkel"] },
        { t: "gap", q: "Die Tochter von meiner Tante ist meine ___.", a: ["Cousine", "Kusine"] },
        { t: "gap", q: "Der Sohn von meiner Schwester ist mein ___.", a: ["Neffe"] },
        { t: "gap", q: "Die Mutter von meinem Mann ist meine ___.", a: ["Schwiegermutter"] },
        { t: "gap", q: "Die Frau von meinem Bruder ist meine ___.", a: ["Schwägerin"] },
        { t: "gap", q: "Der Vater von meinem Opa ist mein ___.", a: ["Urgroßvater", "Uropa"] },
        { t: "mc", q: "Meine Schwester und ich sind am selben Tag geboren. Wir sind ___.", opts: ["Zwillinge", "Enkel", "Eltern"], a: "Zwillinge" },
        { t: "mc", q: "Mein Bruder hat seit zwei Jahren eine Frau. Er ist ___.", opts: ["verheiratet", "ledig", "Einzelkind"], a: "verheiratet" },
      ]},
      { tag: "L1+L2", ref: [2, "dict"], title: "H · der, die oder das?", desc: "Choose the article.", items: [
        { t: "mc", q: "___ Werkstatt", opts: ART, a: "die" },
        { t: "mc", q: "___ Rad", opts: ART, a: "das" },
        { t: "mc", q: "___ Einwohner", opts: ART, a: "der" },
        { t: "mc", q: "___ Raum", opts: ART, a: "der" },
        { t: "mc", q: "___ Enkelkind", opts: ART, a: "das" },
        { t: "mc", q: "___ Nichte", opts: ART, a: "die" },
      ]},

      // ---------------- Grammatik ----------------
      { tag: "L1", ref: [1, "weil"], title: "I · weil – Satzbau", desc: "Click the words in the correct order. Click a word in the box to remove it.", items: [
        { t: "order", q: "Ich bin müde, weil …", w: ["ich", "um 5 Uhr", "aufgestanden", "bin"], a: ["ich um 5 Uhr aufgestanden bin"] },
        { t: "order", q: "Ich lerne Deutsch, weil …", w: ["meine Schwiegereltern", "in Wien", "wohnen"], a: ["meine Schwiegereltern in Wien wohnen"] },
        { t: "order", q: "Er verkauft sein Auto, weil …", w: ["er", "jetzt", "mit dem Rad", "fährt"], a: ["er jetzt mit dem Rad fährt"] },
        { t: "order", q: "Ich komme nicht zur Party, weil …", w: ["ich", "in der Werkstatt", "arbeiten", "muss"], a: ["ich in der Werkstatt arbeiten muss"] },
        { t: "order", q: "Weil das Konzert im Park stattfindet, …", w: ["fahren", "wir", "mit dem Rad"], a: ["fahren wir mit dem Rad"] },
      ]},
      { tag: "L1", ref: [1, "weil"], title: "J · weil oder denn?", desc: "Look at the word order.", items: [
        { t: "mc", q: "Ich bleibe zu Hause, ___ ich bin krank.", opts: ["weil", "denn"], a: "denn" },
        { t: "mc", q: "Ich bleibe zu Hause, ___ ich krank bin.", opts: ["weil", "denn"], a: "weil" },
        { t: "mc", q: "Warum fehlt Peter auf dem Bild? – ___ er in Berlin war.", opts: ["Weil", "Denn"], a: "Weil" },
        { t: "mc", q: "Weil es regnet, ___.", opts: ["bleibe ich zu Hause", "ich bleibe zu Hause", "ich zu Hause bleibe"], a: "bleibe ich zu Hause" },
      ]},
      { tag: "L1", ref: [1, "komp"], title: "K · Komparativ & Superlativ", desc: "Write the correct form of the adjective in brackets.", items: [
        { t: "gap", q: "Hamburg ist ___ als München." + hint("groß"), a: ["größer"] },
        { t: "gap", q: "Mein Opa ist ___ als meine Oma." + hint("alt"), a: ["älter"] },
        { t: "gap", q: "Von uns allen ist meine Schwester am ___." + hint("jung"), a: ["jüngsten"] },
        { t: "gap", q: "Ein Auto ist ___ als ein Rad." + hint("teuer"), a: ["teurer"] },
        { t: "gap", q: "Ich spiele gut Tennis, aber mein Bruder spielt ___." + hint("gut"), a: ["besser"] },
        { t: "gap", q: "Tee trinke ich gern, aber am ___ trinke ich Kaffee." + hint("gern"), a: ["liebsten"] },
        { t: "gap", q: "Berlin ist die ___ Stadt Deutschlands." + hint("groß, Superlativ"), a: ["größte"] },
      ]},
      { tag: "L2", ref: [2, "sowie"], title: "L · so … wie oder als?", desc: "Choose the correct option.", items: [
        { t: "mc", q: "Mein Sohn ist schon so groß ___ ich.", opts: ["wie", "als"], a: "wie" },
        { t: "mc", q: "Wien ist größer ___ Prag.", opts: ["wie", "als"], a: "als" },
        { t: "mc", q: "Brünn ist nicht so ___ wie Prag.", opts: ["groß", "größer", "am größten"], a: "groß" },
        { t: "mc", q: "Meine Tante ist genauso alt wie ___.", opts: ["mein Vater", "meinen Vater", "meinem Vater"], a: "mein Vater" },
        { t: "mc", q: "Ich arbeite ___ als mein Chef.", opts: ["mehr", "so viel", "viel"], a: "mehr" },
        { t: "mc", q: "Meine Nichte ist ___ alt wie mein Neffe – beide sind 7.", opts: ["genauso", "doppelt", "älter"], a: "genauso" },
      ]},
      { tag: "L1", ref: [1, "perf"], title: "M · Perfekt – haben oder sein?", desc: "Choose the auxiliary verb.", items: [
        { t: "mc", q: "Das Konzert ___ gestern im Park stattgefunden.", opts: ["hat", "ist"], a: "hat" },
        { t: "mc", q: "Meine Großeltern ___ nach Italien geflogen.", opts: ["haben", "sind"], a: "sind" },
        { t: "mc", q: "Ich ___ am Wochenende zu Hause geblieben.", opts: ["habe", "bin"], a: "bin" },
        { t: "mc", q: "Wir ___ meine Tante in Wien besucht.", opts: ["haben", "sind"], a: "haben" },
        { t: "mc", q: "Mein Neffe ___ sehr groß geworden.", opts: ["hat", "ist"], a: "ist" },
      ]},
      { tag: "L1+L2", ref: [1, "perf"], title: "N · Perfekt – Partizip II", desc: "Write the 3rd form of the verb in brackets.", items: [
        { t: "gap", q: "Er hat sein altes Rad ___." + hint("verkaufen"), a: ["verkauft"] },
        { t: "gap", q: "Das Kind hat die Kerzen ___." + hint("auspusten"), a: ["ausgepustet"] },
        { t: "gap", q: "Ich habe meinem Bruder eine Karte ___." + hint("schreiben"), a: ["geschrieben"] },
        { t: "gap", q: "Meine Cousine hat in Wien ___." + hint("studieren"), a: ["studiert"] },
        { t: "gap", q: "Wir sind mit dem Zug nach Hamburg ___." + hint("fahren"), a: ["gefahren"] },
      ]},
      { tag: "L2", ref: [2, "possdat"], title: "O · Possessivartikel im Dativ", desc: "Write the possessive in the Dativ. The word in brackets shows the person.", items: [
        { t: "gap", q: "Ich fahre mit ___ Schwiegereltern in den Urlaub." + hint("mein"), a: ["meinen"] },
        { t: "gap", q: "Er wohnt bei ___ Großmutter." + hint("sein"), a: ["seiner"] },
        { t: "gap", q: "Sie telefoniert jeden Tag mit ___ Tochter." + hint("ihr"), a: ["ihrer"] },
        { t: "gap", q: "Wir helfen ___ Opa im Garten." + hint("unser"), a: ["unserem"] },
        { t: "gap", q: "Kommt ihr mit ___ Kindern?" + hint("euer"), a: ["euren"] },
        { t: "gap", q: "Das Rad gehört ___ Sohn." + hint("mein"), a: ["meinem"] },
        { t: "gap", q: "Wie geht es ___ Mann, Frau Svobodová?" + hint("Ihr"), a: ["Ihrem"] },
      ]},
      { tag: "L2", ref: [2, "possdat"], title: "P · Nominativ, Akkusativ oder Dativ?", desc: "Choose the correct form.", items: [
        { t: "mc", q: "___ Bruder ist verrückt nach Fußball.", opts: ["Mein", "Meinen", "Meinem"], a: "Mein" },
        { t: "mc", q: "Ich besuche ___ Onkel in Hamburg.", opts: ["mein", "meinen", "meinem"], a: "meinen" },
        { t: "mc", q: "Auf dem Bild sitze ich neben ___ Vater.", opts: ["mein", "meinen", "meinem"], a: "meinem" },
        { t: "mc", q: "Peter fährt mit ___ Frau nach Wien.", opts: ["seiner", "ihrer", "seine"], a: "seiner" },
      ]},

      // ---------------- Mix ----------------
      { tag: "L1+L2", title: "Q · Richtig oder falsch?", desc: "Is the sentence correct German?", items: [
        { t: "mc", q: "„Die Party findet am Samstag statt.“", opts: TF, a: TF[0] },
        { t: "mc", q: "„Er ist größer wie sein Vater.“", opts: TF, a: TF[1] },
        { t: "mc", q: "„Ich bin müde, weil ich habe lange gearbeitet.“", opts: TF, a: TF[1] },
        { t: "mc", q: "„Der Lehrer steht vorn an der Tafel.“", opts: TF, a: TF[0] },
      ]},
      { tag: "L1+L2", title: "R · Übersetzen (Česky → Deutsch)", desc: "Translate the whole sentence. Punctuation and capital letters don't matter.", items: [
        { t: "tr", q: "Moje sestra je stejně vysoká jako já.",
          a: ["Meine Schwester ist so groß wie ich", "Meine Schwester ist genauso groß wie ich"] },
        { t: "tr", q: "Na obrázku chybí můj bratr.",
          a: ["Auf dem Bild fehlt mein Bruder", "Mein Bruder fehlt auf dem Bild"] },
        { t: "tr", q: "Bydlím u svých rodičů.",
          a: ["Ich wohne bei meinen Eltern"] },
        { t: "tr", q: "Hamburk je druhé největší město Německa.",
          a: ["Hamburg ist die zweitgrößte Stadt Deutschlands", "Hamburg ist die zweitgrößte Stadt in Deutschland",
              "Hamburg ist die zweitgrößte Stadt von Deutschland"] },
      ]},
    ],
  });
})();
