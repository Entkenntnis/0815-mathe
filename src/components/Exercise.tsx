import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { FaIcon } from '../components/FaIcon'
import { exercisesData } from '../data/exercises'
import { shuffleArray } from '../lib/shuffleArray'

interface ExerciseProps {
  onClose: (done: boolean) => void
  id: number
}

export function Exercise({ onClose, id }: ExerciseProps) {
  const data = exercisesData.find((x) => x.id == id)
  const [wordRack, setWordRack] = useState<string[]>([])

  const [selected, setSelected] = useState<string[]>([])

  const [state, setState] = useState<'input' | 'right' | 'wrong'>('input')

  useEffect(() => {
    setWordRack(shuffleArray(data.words))
  }, [data])
  return (
    <>
      <Head>
        <title>0815 Mathe - {data.title}</title>
      </Head>
      <div>
        <div className="max-w-[580px] mx-auto relative">
          <div
            className="absolute right-3 top-1.5 "
            onClick={() => {
              onClose(state == 'right')
            }}
          >
            <FaIcon
              icon={faTimes}
              className="!h-7 w-7 cursor-pointer rounded-full bg-gray-50 p-1 text-gray-400"
            />
          </div>
          <h1 className="mt-5 text-2xl font-bold mx-3">{data.title}</h1>
          <p className="mx-3 mt-3 text-gray-500 text-sm">{data.dateText}</p>
          <div className="mx-3 mt-6 [&>p]:my-4">{data.text}</div>
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
            <div className="mt-4 flex justify-end mx-3 border p-3 rounded">
              <div>
                <button
                  className="px-2 py-0.5 bg-green-300 rounded"
                  onClick={() => {
                    const sentence = selected.join(' ')
                    if (data.solutions.includes(sentence)) {
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
            <div className="mt-4 flex justify-between mx-3 border p-3 bg-red-200 rounded">
              <p>Antwort ist falsch. Probiere weiter.</p>
            </div>
          )}
          {state == 'right' && (
            <div className="mt-4 flex justify-between mx-3 border p-3 bg-green-100 rounded">
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
