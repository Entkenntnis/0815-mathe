interface ExerciseData {
  id: number
  title: string
  words: string[]
  solutions: string[]
  text: JSX.Element
  previewText: string
}

export const exercisesData: ExerciseData[] = [
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
        Herzlich Willkommen bei MatheLingo!
        <br />
        <br />
        Mathematik und Sprache - zwei ganz unterschiedliche Dinge, die doch viel
        gemeinsam haben. Denn um Mathematik zu betreiben, muss man viel
        miteinander reden und um sich in einer Sprache präzise ausdrücken zu
        können, hilft ein wenig Kenntnis von der Mathematik.
        <br />
        <br />
        Auf MatheLingo findest du unterschiedlichste Aufgaben, die mal mehr mit
        Mathe und mal mehr mit Sprache zu tun haben. Deine Antwort schreibst du
        mit den gegebenen Textbausteinen. Es geht gleich mit der ersten Aufgabe
        los:
        <br />
        <br />
        Ein 32-jährige Busfahrerin startet mit einem leeren Bus. An der ersten
        Haltestelle steigen 30 Personen ein, an der zweiten Haltestelle steigen
        12 Personen aus. Wie alt ist die Busfahrerin?
      </>
    ),
    previewText:
      'Herzlich Willkommen bei MatheLingo! Mathematik und Sprache - zwei ganz',
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
    previewText:
      'In der Mathematik gibt es Aufgaben, bei denen alle Antworten richtig',
  },
]
