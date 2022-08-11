import clsx from 'clsx'
import Head from 'next/head'
import { useState } from 'react'
import { exercisesData } from '../data/exercises'

import { Exercise } from './Exercise'

export default function Main() {
  const [activeExercise, setActiveExercise] = useState(-1)
  const [doneExercises, setDoneExercises] = useState<number[]>([])

  if (activeExercise > 0) {
    return (
      <Exercise
        id={activeExercise}
        onClose={(done) => {
          if (done && !doneExercises.includes(activeExercise)) {
            setDoneExercises((val) => [...val, activeExercise])
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
          {exercisesData.map((exercise) => (
            <div
              key={exercise.id}
              className={clsx(
                'mx-3 border  rounded p-2 cursor-pointer mt-5',
                doneExercises.includes(exercise.id)
                  ? 'border-gray-300'
                  : 'border-blue-800 hover:bg-blue-50'
              )}
              onClick={() => {
                setActiveExercise(exercise.id)
              }}
            >
              <h2 className="text-lg mb-2 underline">{exercise.title}</h2>
              <p className="whitespace-nowrap text-ellipsis overflow-hidden text-gray-400 italic">
                {exercise.previewText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
