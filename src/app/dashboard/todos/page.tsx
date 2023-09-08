import { Metadata } from "next"
import { TodoList } from "@/app/components/todos/index"

export const metadata: Metadata = {
  title: "Todos",
  description: "Todos page",
}

export default function TodosPage() {
  return (
    <section>
      <article>
        <h1>
          Todos
        </h1>
      </article>
      <TodoList />
    </section>
  )
}
