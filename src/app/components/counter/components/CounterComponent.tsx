'use client'
import { useState } from 'react'

interface CounterComponentProps {
  value: number
}
export const CounterComponent = ({ value = 12 }: CounterComponentProps) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubtract = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <span
        className='text-9xl font-bold'
      >
        {counter}
      </span>
      <article className='w-1/2 flex items-center justify-between'>
        <button
          className='px-4 py-2 text-white bg-red-500 rounded-md'
          onClick={handleSubtract}
        >
          Eliminar
        </button>
        <button
          className='px-4 py-2 text-white bg-blue-500 rounded-md'
          onClick={handleAdd}
        >
          Agregar
        </button>

      </article>
    </>
  )
}
