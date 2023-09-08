import { CounterComponent } from '@/app/components/counter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'A simple shopping cart',
}

export default function CounterPage() {

  return (
    <section
      className='flex flex-col items-center justify-center w-full h-full'
    >
      <span>
        Productos en el carrito
      </span>
      <CounterComponent value={12} />
    </section>
  )
}
