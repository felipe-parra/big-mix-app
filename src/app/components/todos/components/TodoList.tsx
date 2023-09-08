'use client'
import { useState } from 'react'
import { TodoItem } from './TodoItem'

export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
}


const INITIAL_STATE: Todo = {
  id: "",
  title: "",
  description: "",
  completed: false
}


interface TodoListProps {
  todos: Todo[]
}

export const TodoList = ({ todos = [] }: TodoListProps) => {
  const [todo, setTodo] = useState<Todo>(INITIAL_STATE)
  const [todosList, setTodos] = useState<Todo[]>(todos)
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTodo({
      ...todo,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTodos([...todos, todo])
    setTodo(INITIAL_STATE)
    setLoading(false)
  }

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="title" className="text-sm font-bold">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={todo.title}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description" className="text-sm font-bold">Description</label>
              <textarea
                name="description"
                id="description"
                value={todo.description}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div className="flex flex-col space-y-2">
              <button
                type="submit"
                className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ease-linear duration-150
                ${loading ? "opacity-50 cursor-not-allowed" : ""}
                `}
                disabled={loading}
              >
                Add Todo
              </button>
            </div>
          </div>
        </form>
      </article>
      <article>
        {
          todosList.map((todo, index) => (
            <TodoItem {...todo} key={todo.title + "-" + index} />
          ))
        }
      </article>
    </section>
  )
}
