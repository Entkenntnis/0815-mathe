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
        In der Mathematik gibt es Aufgaben, bei denen alle Antworten richtig
        sind - solange man sie begründen kann. So auch hier. Betrachte folgende
        vier Muster:
        <img
          src="/6.1.A1.Image.2-4.png"
          className="h-[300px] my-5 mx-auto"
          alt="vier muster"
        />
        Wähle ein Muster und begründe, warum es nicht dazu gehört.
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
    solutions: [
      'Die Busfahrerin ist 32 Jahre alt',
      'Busfahrerin ist 32 Jahre alt',
      'Die Busfahrerin ist 32 Jahre',
      'Busfahrerin 32 Jahre',
      'Busfahrerin ist 32 Jahre',
    ],
    text: (
      <>
        <p>
          Wieder ein neues Schuljahr - und wieder ein ganzes Jahr lang sinnvolle
          Aufgaben für den Unterricht ausdenken, arrrg.
        </p>
        <p>
          Das fängt ja schon mal gut an. Ich sitze seit Stunden an der ersten
          Mathestunde morgen und kann mich einfach nicht konzentrieren. Meine
          Gedanken schweifen immer wieder zu dieser unsinningen Aufgabe - und
          die kann ich doch nicht im Unterricht verwenden! Aber irgendwie witzig
          ist sie schon - mal sehen wie viel das richtig beantworten können:
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
