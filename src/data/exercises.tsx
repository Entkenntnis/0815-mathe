export interface ExerciseData {
  id: number
  title: string
  words: string[]
  solutions: string[]
  text: JSX.Element
  category: '6. Klasse' | 'Spaß & Co.'
}

export const exercisesData: ExerciseData[] = [
  {
    id: 1,
    title: 'Busfahrt',
    words: [
      'Die',
      'Busfahrerin',
      'ist',
      '32',
      'Jahre',
      'alt',
      '18',
      'Im',
      'Bus',
      'befinden',
      'sich',
      'Personen',
      '42',
    ],
    solutions: ['Die Busfahrerin ist 32 Jahre alt'],
    text: (
      <>
        <p>
          Ein 32-jährige Busfahrerin startet mit einem leeren Bus. An der ersten
          Haltestelle steigen 30 Personen ein, an der zweiten Haltestelle
          steigen 12 Personen aus. Wie alt ist die Busfahrerin?
        </p>
      </>
    ),
    category: 'Spaß & Co.',
  },
  {
    id: 3,
    title: 'Endstellenregel',
    text: (
      <>
        <p>
          Die Zahlen 15, 300, 6125, 71035 und 10000 sind alle durch 5 teilbar.
        </p>
        <p>
          Man kann diese Eigenschaft bereits an der letzten Stelle der Zahl
          ablesen. Wie lautet die Regel, ob eine Zahl durch 5 teilbar ist?
        </p>
        <p>Eine Zahl ist durch 5 teilbar, wenn …</p>
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
    solutions: ['die letzte Ziffer 0 oder 5 ist'],
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
]
