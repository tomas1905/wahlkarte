const SZENARIEN = [
  {
    "id": "zweitstimme",
    "titel": "Zweitstimme",
    "untertitel": "Hier findest du die Wahlergebnisse in der klassischen Ansicht",
    "beschreibung": "In der klassischen Ansicht sind die Wahlbezirke in der Farbe der meistgewählten Partei eingefärbt.<br><br><b>Weitere Analysen:</b> Zum Beispiel die <a href=\"#erststimme\">Erststimmen</a>, <a href=\"#nichtwaehler-win\">Nicht<wbr>wähler*innen</a>, <a href=\"#wechselwaehler\">Wechsel<wbr>wähler*innen</a>, <a href=\"#aenderung\">größte Änderung</a> und eine Analyse zu <a href=\"#erst-vs-zweit\">Erststimmen vs. Zweitstimmen</a>. Klick dich einfach mit den Pfeilen durch! :)",
    "getAnalyse": getAnalyseForWahlergebnisse,
  },
  {
    "id": "erststimme",
    "titel": "Erststimme",
    "untertitel": "Übersicht der gewählten Kandidaten",
    "beschreibung": "Die Wahlbezirke sind in der Farbe der Partei des meistgewählten Kandidaten gefärbt.",
    "getAnalyse": getAnalyseForErststimmen,
  },
  {
    "id": "wechselwaehler",
    "titel": "Wechselwähler",
    "untertitel": "Welche Wahlbezirke haben die Farbe gewechselt?",
    "beschreibung": "Die Wahlbezirke, in denen die meistgewählte Partei im Vergleich zur Bundestagswahl 2013 gewechselt ist, sind hier hervorgehoben.",
    "getAnalyse": getAnalyseForWechselwaehler,
  },
  {
    "id": "erst-vs-zweit",
    "titel": "Erst- vs. Zweitstimme",
    "untertitel": "Wo unterscheiden sich die Sieger?",
    "beschreibung": "Hervorgehoben sind die Wahlbezirke, in denen sich die meistgewählte Partei von der Partei des meistegwählten Kandidaten unterscheiden.",
    "getAnalyse": getAnalyseForErstVsZweit,
  },
  {
    "id": "aenderung",
    "titel": "Größte Änderung",
    "untertitel": "Welche Partei hat am meisten zugelegt?",
    "beschreibung": "Die Wahlbezirke sind in der Farbe der Partei eingefärbt, die im Vergleich zur letzten Bundestagswahl absolut betrachtet die größten Stimmgewinne hat.",
    "getAnalyse": getAnalyseGroessteAenderung,
  },
  {
    "id": "ungueltig",
    "titel": "Ungültige Stimmen",
    "untertitel": "Wie viele ungültige Stimmen gibt es in den jeweiligen Wahlbezirken?",
    "beschreibung": "Je dunkler die Farbe des Wahlbezirks ist, desto mehr ungültige Erst- und Zweitstimmen gab es.",
    "getAnalyse": getAnalyseForUngueltigeStimmen,
  },
  {
    "id": "nichtwaehler-win",
    "titel": "Nichtwähler",
    "untertitel": "Hätten Nichtwähler in diesem Wahlbezirk gewonnen?",
    "beschreibung": "In manchen Bezirken liegt die Wahlbeteiligung bei weniger als 50%. In diesen hätten die Nichtwähler also die absolute Mehrheit geholt. Die entsprechenden Bezirke sind in türkis eingefärbt.",
    "getAnalyse": getAnalyseNichtWaehlerWin,
  },
  {
    "id": "kleinster-abstand",
    "titel": "Kleinster Abstand",
    "untertitel": "In welchen Wahlbezirken war das Ergebnis am knappsten?",
    "beschreibung": "Gezeigt werden die Wahlbezirke, in denen der Abstand zwischen dem Erst- und Zweitplatzierten am geringsten ist. Ausgewertet werden die Zweitstimmen der Parteien in Relation zur Gesamtzahl der Wähler.",
    "getAnalyse": getAnalyseForKleinsterAbstand,
  }
]
