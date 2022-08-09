import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaIcon } from '../components/FaIcon'

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

interface Exercise1Props {
  onClose: (done: boolean) => void
}

export function Exercise1({ onClose }: Exercise1Props) {
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
        <div className="max-w-[580px] mx-auto relative">
          <div
            className="absolute right-3 top-1"
            onClick={() => {
              onClose(state == 'right')
            }}
          >
            <FaIcon
              icon={faTimes}
              className="h-7 w-7 cursor-pointer rounded-full bg-gray-50 p-1 text-gray-400"
            />
          </div>
          <h1 className="mt-4 text-2xl font-bold mx-3">Start</h1>
          <div className="rounded p-3">
            Hallo, schön dass du hergefunden hast! Bei Mathelingo kannst du dich
            auf entspannte Art mit mathematischen Denken beschäftigen. Dabei
            spielt auch Sprache eine große Rolle, denn Mathematik ist nicht nur
            Rechnen, sondern auch eine Art, miteinander zu kommunizieren.
            <br />
            <br />
            Das Prinzip der Aufgaben ist schlicht. Hier steht die Angabe mit der
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
          <div className="mt-5 border-b-2 border-t-2 mx-3 mb-6">
            {selected.length == 0 && (
              <span className="inline-block italic my-2 py-1 border border-white text-gray-300 select-none">
                Klicke auf die Wörter um deine Antwort zu schreiben.
              </span>
            )}
            {selected.map((word) => (
              <span
                className={clsx(
                  'inline-block px-3 py-1 border bg-gray-200 rounded',
                  'mr-3 my-2 select-none cursor-pointer'
                )}
                key={word}
                onClick={() => {
                  if (state == 'right') return
                  setSelected((val) => val.filter((x) => x !== word))
                  setState('input')
                }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="rounded px-3 pb-6">
            {wordRack.map((word) => (
              <span
                className={clsx(
                  'inline-block px-3 py-1 border-2 bg-gray-200 rounded',
                  'mr-3 mt-3 select-none',
                  selected.includes(word)
                    ? 'text-white bg-white border'
                    : 'cursor-pointer'
                )}
                key={word}
                onClick={() => {
                  if (selected.includes(word)) return
                  if (state == 'right') return
                  setSelected((val) => [...val, word])
                  setState('input')
                }}
              >
                {word}
              </span>
            ))}
          </div>

          {state == 'input' && (
            <div className="mt-4 flex justify-end mx-3 border p-3">
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
            <div className="mt-4 flex justify-between mx-3 border p-3 bg-red-200">
              <p>Antwort ist falsch. Probiere weiter.</p>
            </div>
          )}
          {state == 'right' && (
            <div className="mt-4 flex justify-between mx-3 border p-3 bg-green-100">
              <p>Richtig!</p>
              <button
                className="px-2 py-0.5 bg-green-300 rounded"
                onClick={() => {
                  onClose(true)
                }}
              >
                Weiter
              </button>
            </div>
          )}
          <div className="h-6"></div>
        </div>
      </div>
    </>
  )
}
