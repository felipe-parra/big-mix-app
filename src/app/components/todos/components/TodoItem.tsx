import React from 'react'
import { Todo } from './TodoList'

export const TodoItem = ({ id, title, description, completed }: Todo) => {
  return (
    <div >
      <h5>{title}</h5>
      <p>{description}</p>
      <input type="checkbox" name={"completed"} id="completed" checked={completed} />
    </div>
  )
}
