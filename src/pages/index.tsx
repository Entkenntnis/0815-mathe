import clsx from 'clsx'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { shuffleArray } from '../lib/shuffleArray'

const words = [
  'Der',
  'Busfahrer',
  'ist',
  '32',
  'Jahre',
  'alt',
  '18',
  'Im',
  'Bus',
  'befinden',
  'sich',
  '30',
  '12',
  'Personen',
  '42',
]

const answers = [
  'Der Busfahrer ist 32 Jahre alt',
  'Busfahrer ist 32 Jahre alt',
  'Der Busfahrer ist 32 Jahre',
  'Busfahrer 32 Jahre',
  'Busfahrer ist 32 Jahre',
]

function HomePage() {
  const [wordRack, setWordRack] = useState<string[]>([])

  const [selected, setSelected] = useState<string[]>([])

  const [state, setState] = useState<'input' | 'right' | 'wrong'>('input')

  useEffect(() => {
    setWordRack(shuffleArray(words))
  }, [])
  return (
    <>
      <Head>
        <title>MatheLingo</title>
      </Head>
      <div>
        <div className="w-[580px] mx-auto">
          <div className="mt-8 border rounded p-3">
            Hallo, schön dass du hergefunden hast!. Bei Mathelingo kannst du
            dich auf entspannte Art mit mathematischen Denken beschäftigen.
            Dabei spielt auch Sprache eine große Rolle, denn Mathematik ist
            nicht nur Rechnen, sondern auch eine Art, miteinander zu
            kommunizieren.
            <br />
            <br />
            Das Prinzip der Aufgaben ist schlicht Hier steht die Angabe mit der
            Fragestellung. Unterhalb gibt es Platz für deine Antwort. Unten
            findest du einen Bereich mit möglichen Antwortbausteinen. Suche dir
            die geeigneten Bausteine aus und schreibe deine Antwort. Es gibt
            häufig mehr als eine richtige Antwortmöglichkeit. Die
            Aufgabenstellung lautet:
            <br />
            <br />
            Ein 32-jähriger Busfahrer startet mit einem leeren Bus. An der
            ersten Haltestelle steigen 30 Personen ein, an der zweiten
            Haltestelle steigen 12 Personen aus. Wie alt ist der Busfahrer?
          </div>
          <div className="mt-5 border rounded p-3 pb-6">
            {selected.map((word) => (
              <span
                className={clsx(
                  'inline-block px-2 py-0.5 border bg-gray-200 rounded',
                  'mr-3 mt-3 select-none cursor-pointer'
                )}
                key={word}
                onClick={() => {
                  if (state !== 'input') return
                  setSelected((val) => val.filter((x) => x !== word))
                }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="mt-5 border rounded p-3 pb-6">
            {wordRack.map((word) => (
              <span
                className={clsx(
                  'inline-block px-2 py-0.5 border bg-gray-200 rounded',
                  'mr-3 mt-3 select-none',
                  selected.includes(word) ? 'text-gray-400' : 'cursor-pointer'
                )}
                key={word}
                onClick={() => {
                  if (selected.includes(word)) return
                  if (state !== 'input') return
                  setSelected((val) => [...val, word])
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {state == 'input' && (
            <div className="mt-4 flex justify-end">
              <div>
                <button
                  className="px-2 py-0.5 bg-green-300 rounded"
                  onClick={() => {
                    const sentence = selected.join(' ')
                    if (answers.includes(sentence)) {
                      setState('right')
                    } else {
                      setState('wrong')
                    }
                  }}
                >
                  Überprüfen
                </button>
              </div>
            </div>
          )}
          {state == 'wrong' && (
            <div className="mt-4 flex justify-between">
              <p>Antwort ist falsch.</p>
              <button
                className="px-2 py-0.5 bg-blue-200 rounded"
                onClick={() => {
                  setSelected([])
                  setState('input')
                }}
              >
                Erneut probieren
              </button>
            </div>
          )}
          {state == 'right' && (
            <div className="mt-4 flex justify-between">
              <p>Richtig!</p>
              <button
                className="px-2 py-0.5 bg-green-300 rounded"
                onClick={() => {
                  window.location.reload()
                }}
              >
                Weiter
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
