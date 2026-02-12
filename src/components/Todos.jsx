import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    console.log(todos)
    const dispatch = useDispatch()
  return (
    <div className='todo-container'>
        {todos.map((todo) => (
            <div className='todo-item' style={{}}>
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo({id : todo.id}))}
                  />
                <span style={{textDecoration : todo.completed && "line-through"}}>{todo.text}</span>
                <button onClick={() => dispatch(removeTodo({id : todo.id}))}>X</button>
            </div>
        ))}
    </div>
  )
}

export default Todos