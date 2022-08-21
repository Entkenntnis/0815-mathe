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
        Dienstag, 13. September:
        <br />
        <br />
        I give up. Mir fällt einfach keine sinnvolle Aufgabe mehr ein für meine
        nächste Unterrichtsstunde. Das einzige, woran ich noch denken kann ist
        diese Textaufgabe:
        <br />
        <br />
        Ein 32-jährige Busfahrerin startet mit einem leeren Bus. An der ersten
        Haltestelle steigen 30 Personen ein, an der zweiten Haltestelle steigen
        12 Personen aus. Wie alt ist die Busfahrerin?
      </>
    ),
    dateText: 'Mittwoch, 14. September',
    date: 20220914,
  },
]
