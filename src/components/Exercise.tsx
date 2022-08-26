import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

import { FaIcon } from '../components/FaIcon'
import { exercisesData } from '../data/exercises'
import { shuffleArray } from '../lib/shuffleArray'

interface ExerciseProps {
  onClose: (done: boolean) => void
  id: number
}

export function Exercise({ onClose, id }: ExerciseProps) {
  const data = useMemo(() => exercisesData.find((x) => x.id == id), [id])

  const choices = useMemo(() => {
    const output = []
    data.words.forEach((word) => {
      let t = word
      while (output.includes(t)) {
        t = t + ' '
      }
      output.push(t)
    })
    return output
  }, [data])

  const [wordRack, setWordRack] = useState<string[]>([])

  const [selected, setSelected] = useState<string[]>([])

  const [state, setState] = useState<'input' | 'right' | 'wrong' | 'partial'>(
    'input'
  )

  const [submittedText, setSubmittedText] = useState('')

  useEffect(() => {
    setWordRack(shuffleArray(choices))
  }, [choices])
  return (
    <>
      <Head>
        <title>{data.title} - Reasoning Exercise</title>
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
          <p className="mx-3 mt-3 text-gray-500 text-sm">{data.category}</p>
          <div className="mx-3 mt-6 [&>p]:my-4 [&>img]:mx-auto [&>img]:my-4">
            {data.text}
          </div>
          {state !== 'input' && (
            <div
              className={clsx(
                'mx-3 my-3',
                state == 'right'
                  ? 'text-green-600'
                  : state == 'wrong'
                  ? 'text-red-600'
                  : 'text-yellow-700'
              )}
            >
              {state == 'partial' ? (
                <>
                  &quot;{submittedText}&quot; ist teilweise richtig,
                  vervollständige den Satz
                </>
              ) : (
                <>
                  {' '}
                  &quot;{submittedText}&quot; ist{' '}
                  {state == 'right' ? 'richtig' : 'falsch'}
                </>
              )}
            </div>
          )}
          {state !== 'right' && (
            <>
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
                      setSelected((val) => val.filter((x) => x !== word))
                    }}
                  >
                    {word.trim()}
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
                      setSelected((val) => [...val, word])
                    }}
                  >
                    {word.trim()}
                  </span>
                ))}
              </div>
            </>
          )}

          <div
            className={clsx(
              'flex justify-end mx-3',
              state == 'right' ? 'mt-6' : 'mt-3'
            )}
          >
            <div>
              <button
                className="px-2 py-0.5 bg-green-300 rounded"
                onClick={() => {
                  if (state == 'right') {
                    onClose(true)
                    return
                  }

                  const sentence = selected.join(' ')
                  setSubmittedText(sentence + (data.noDot ? '' : '.'))
                  if (data.solutions.includes(sentence)) {
                    setState('right')
                  } else {
                    if (
                      selected.length > 0 &&
                      data.solutions.some((sol) => sol.includes(sentence))
                    ) {
                      setState('partial')
                    } else {
                      setState('wrong')
                    }
                  }
                }}
              >
                {state == 'right' ? 'weiter' : 'Überprüfen'}
              </button>
            </div>
          </div>
          <div className="h-6"></div>
        </div>
      </div>
    </>
  )
}
