import Head from 'next/head'
import { useState } from 'react'

import { Exercise1 } from '../components/Exercise1'

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
          <div className="my-10 text-3xl font-bold">MatheLingo</div>
          <div>
            <button
              className="underline text-purple-700 hover:text-purple-900 cursor-pointer"
              onClick={() => {
                setActiveExercise(1)
              }}
            >
              Start
            </button>{' '}
            {doneExercises.includes(1) && '[erledigt]'}
          </div>
        </div>
      </div>
    </>
  )
}
