export interface ExerciseData {
  id: number
  title: string
  words: string[]
  solutions: string[]
  text: JSX.Element
  category: '6. Klasse' | 'Spaß & Co.'
  noDot?: boolean
}

export const exercisesData: ExerciseData[] = [
  {
    id: 3,
    title: 'Endstellenregel',
    text: (
      <>
        <p>Die Zahlen 15, 300, 6125, 71035 und 10000 sind durch 5 teilbar.</p>
        <p>Die Zahlen 13, 34, 67, 58 sind nicht durch 5 teilbar.</p>
        <p>
          Man kann diese Eigenschaft bereits an der letzten Stelle der Zahl
          ablesen. Wie lautet die Regel, ob eine Zahl genau durch 5 teilbar ist?
        </p>
        <p>Eine Zahl ist genau durch 5 teilbar, wenn …</p>
      </>
    ),
    words: [
      'die',
      'letzte',
      'Ziffer',
      '0',
      'oder',
      '5',
      'ist',
      'erste',
      'Zahl',
      '2',
    ],
    solutions: [
      'die letzte Ziffer 0 oder 5 ist',
      'die letzte Ziffer 5 oder 0 ist',
    ],
    category: '6. Klasse',
  },
  {
    id: 6,
    title: 'Rechenfehler',
    text: (
      <>
        <p>
          An der Tafel steht folgende <i>falsche</i> Rechnung: 4 + 6 * 3 = 30
        </p>
        <p>
          Das richtige Ergebnis lautet 22. Welcher Fehler wurde hier gemacht?
        </p>
      </>
    ),
    words: [
      'Punkt',
      'vor',
      'Strich',
      'wurde',
      'nicht',
      'beachtet',
      'Klammerregel',
    ],
    solutions: [
      'Punkt vor Strich wurde nicht beachtet',
      'Punkt vor Strich nicht beachtet',
    ],
    category: '6. Klasse',
  },
  {
    id: 4,
    title: 'Schaltjahre',
    text: (
      <>
        <p>
          Unser Kalender richtet sich nach der Sonne. Unser Planet braucht
          365,242199 Tage, um die Sonne zu umkreisen.
        </p>
        <p>
          Welches Problem entsteht, wenn alle Kalenderjahre nur 365 Tage haben?
        </p>
      </>
    ),
    words: [
      'Der',
      'Kalender',
      'ist',
      'ungenau',
      'Die',
      'Kalenderjahre',
      'sind',
      'zu',
      'kurz',
      'genau',
      'lang',
    ],
    solutions: [
      'Der Kalender ist ungenau',
      'Die Kalenderjahre sind zu kurz',
      'Die Kalenderjahre sind ungenau',
    ],
    category: '6. Klasse',
  },
  {
    id: 2,
    title: 'Was gehört nicht dazu?',
    words: [
      'Muster',
      'A',
      'enthält',
      'kein',
      'blau',
      'B',
      'gelb',
      'C',
      'keine',
      'Fünfecke',
      'D',
      'Lücken',
    ],
    solutions: [
      'Muster A enthält kein gelb',
      'Muster B enthält kein blau',
      'Muster C enthält keine Fünfecke',
      'Muster D enthält Lücken',
    ],
    text: (
      <>
        <p>Betrachte folgende 4 Muster:</p>
        <img
          src="/6.1.A1.Image.2-4.png"
          className="h-[300px]"
          alt="vier muster"
        />
        <p>Welches Muster passt nicht dazu und warum?</p>
      </>
    ),
    category: '6. Klasse',
  },
  {
    id: 5,
    title: 'Prozentrechnung',
    text: (
      <>
        <p>
          Die Mathe-Lehrerin kommt nach einer Schulaufgabe frustriert in die
          Klasse und sagt: 75% der Klasse kann nicht Prozentrechnen!
        </p>
        <p>
          Darauf hin meldet sich Luca und fragt: Aber wir sind gar nicht 75
          Personen in der Klasse?
        </p>
        <p>
          Die Lehrerin verlässt darauf verzweifelt das Klassenzimmer. Welchen
          Fehler hat Luca gemacht?
        </p>
      </>
    ),
    words: [
      'Luca',
      'hat',
      'Prozentsatz',
      'und',
      'Grundwert',
      'verwechselt',
      'Prozentwert',
    ],
    solutions: [
      'Luca hat Prozentsatz und Grundwert verwechselt',
      'Luca hat Grundwert und Prozentsatz verwechselt',
    ],
    category: 'Spaß & Co.',
  },
  {
    id: 7,
    title: 'Gleichnamige Brüche addieren',
    text: (
      <>
        <p>
          Brüche, die gleiche Nenner besitzen, heißen gleichnamig. Solche Brüche
          können wie folgt addiert werden:
        </p>
        <img
          src="/additionbruchgleichnamig.png"
          className="h-[200px]"
          alt="1/4 + 2/4 = (1+2)/4 = 3/4 und 5/7 + 1/7 = (5+1)/7 = 6/7"
        />
        <p>Nach welcher Regel wurden diese Brüche addiert?</p>
        <p>Gleichnamige Brüche werden addiert, indem …</p>
      </>
    ),
    words: [
      'man',
      'ihre',
      'Zähler',
      'addiert',
      'und',
      'den',
      'gemeinsamen',
      'Nenner',
      'beibehält',
    ],
    solutions: [
      'man ihre Zähler addiert und den gemeinsamen Nenner beibehält',
      'man den gemeinsamen Nenner beibehält und ihre Zähler addiert',
      'man den Zähler addiert und ihre gemeinsamen Nenner beibehält',
      'man ihre gemeinsamen Nenner beibehält und den Zähler addiert',
    ],
    category: '6. Klasse',
  },
  // id: 8
  {
    id: 9,
    title: 'Subtrahieren rationaler Zahlen',
    text: (
      <>
        <p>
          Eine rationale Zahl wird subtrahiert, indem man ihre Gegenzahl
          addiert.
        </p>
        <p>Schreibe folgende Differenz nach obiger Regel als Summe:</p>
        <p className="text-xl">(+ 4,5) - (- 2,3) = </p>
      </>
    ),
    words: ['4,5', '2,3', '+', '(', ')', '-', '+'],
    solutions: [
      '4,5 + 2,3',
      '2,3 + 4,5',
      '+ 4,5 + 2,3',
      '( + 4,5 ) + 2,3',
      '2,3 + ( + 4,5 )',
      '+ 2,3 + 4,5',
    ],
    noDot: true,
    category: '6. Klasse',
  },
  {
    id: 1,
    title: 'Busfahrt',
    text: (
      <>
        <p>
          Ein leerer Bus fährt los. An der ersten Haltestelle steigen 10
          Personen ein, an der zweiten Haltestelle steigen 16 Personen aus. Was
          sagt der Mathematiker?
        </p>
      </>
    ),
    words: [
      'Wenn',
      'noch',
      '6',
      'Personen',
      'einsteigen',
      'dann',
      'ist',
      'der',
      'Bus',
      'leer',
    ],
    solutions: [
      'Wenn noch 6 Personen einsteigen dann ist der Bus leer',
      'Wenn 6 Personen einsteigen dann ist der Bus leer',
      'Wenn noch 6 Personen einsteigen ist der Bus leer',
      'Der Bus ist leer Wenn noch 6 Personen einsteigen',
      'Der Bus ist leer Wenn 6 Personen einsteigen',
    ],
    category: 'Spaß & Co.',
  },
  // { id: -1, title: '', text: <></>, words: [], solutions: [], category: '' },
]
