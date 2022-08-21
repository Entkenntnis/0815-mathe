interface ExerciseData {
  id: number
  title: string
  words: string[]
  solutions: string[]
  text: JSX.Element
  dateText: string
  date: number
}

export const exercisesData: ExerciseData[] = [
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
        <p>
          Ich habe heute der Klasse dieses Bild gezeigt und gefragt: Welches
          Muster gehört nicht dazu? Begründe deine Antwort.
        </p>
        <img
          src="/6.1.A1.Image.2-4.png"
          className="h-[300px]"
          alt="vier muster"
        />
        <p>
          Kein einziger hat Muster D gewählt! Obwohl das für die
          Unterrichtsstunde eigentlich die wichtige Antwort wäre. Und das
          traurig: Sie hatten dafür auch gute Gründe nennen können. Was denkst
          du welches Muster nicht dazu passt?
        </p>
      </>
    ),
    dateText: 'Freitag, 16. September',
    date: 20220916,
  },
  {
    id: 1,
    title: 'Start',
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
          Wieder ein neues Schuljahr - und wieder ein ganzes Jahr lang sinnvolle
          Aufgaben für den Unterricht ausdenken, arrrg.
        </p>
        <p>
          Das fängt ja schon mal gut an. Ich sitze seit Stunden an der ersten
          Mathestunde morgen und kann mich einfach nicht konzentrieren. Meine
          Gedanken schweifen immer wieder zu dieser unsinningen Aufgabe ab, die
          ich nicht im Unterricht verwenden kann. Aber irgendwie witzig ist sie
          schon, ich wäre gespannt wie viele das richtig beantworten könnten:
        </p>
        <p>
          Ein 32-jährige Busfahrerin startet mit einem leeren Bus. An der ersten
          Haltestelle steigen 30 Personen ein, an der zweiten Haltestelle
          steigen 12 Personen aus. Wie alt ist die Busfahrerin?
        </p>
      </>
    ),
    dateText: 'Mittwoch, 14. September',
    date: 20220914,
  },
]
