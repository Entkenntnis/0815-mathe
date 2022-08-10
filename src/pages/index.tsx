import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import Head from 'next/head'
import { useState } from 'react'

import { Exercise1 } from '../components/Exercise1'
import { FaIcon } from '../components/FaIcon'

export default function Home() {
  const [activeExercise, setActiveExercise] = useState(-1)
  const [doneExercises, setDoneExercises] = useState<number[]>([])

  if (activeExercise == 1) {
    return (
      <Exercise1
        onClose={(done) => {
          if (done && !doneExercises.includes(1)) {
            setDoneExercises((val) => [...val, 1])
          }
          setActiveExercise(-1)
        }}
      />
    )
  }
  return (
    <>
      <Head>
        <title>MatheLingo</title>
      </Head>
      <div>
        <div className="max-w-[580px] mx-auto relative">
          <h1 className="my-10 text-3xl font-bold mx-3">MatheLingo</h1>
          <div
            className={clsx(
              'mx-3 border  rounded p-2 cursor-pointer',
              doneExercises.includes(1)
                ? 'border-gray-300'
                : 'border-blue-800 hover:bg-blue-50'
            )}
            onClick={() => {
              setActiveExercise(1)
            }}
          >
            <h2 className="text-lg mb-2 underline">Start</h2>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden text-gray-400 italic">
              Herzlich Willkommen bei MatheLingo! Mathematik und Sprache - zwei
              ganz unterschiedliche Dinge, die doch viel gemeinsam haben. Denn
              um Mathematik zu betreiben, muss man viel miteinander reden und um
              sich in einer Sprache präzise ausdrücken zu können, hilft ein
              wenig Kenntnis von der Mathematik.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
