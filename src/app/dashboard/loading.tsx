import React from 'react'

export default function Loading() {
  return (
    <section className='flex items-center justify-center h-full'>
      <div className='w-10 border-4 border-sky-500 border-r-sky-100 rounded-full h-10 animate-spin duration-500' />
    </section>
  )
}
