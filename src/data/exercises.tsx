export interface ExerciseData {
  id: number
  title: string
  words: string[]
  solutions: string[]
  text: JSX.Element
  category: '5. Klasse' | 'Spaß & Co.'
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
    category: '5. Klasse',
  },
]
