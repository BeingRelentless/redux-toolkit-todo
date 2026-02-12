import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../features/todo/todoSlice'

function AddTodos() {
    const [input, setInput] = useState('')
    // dispatch uses "reducer" to store state in 'store.js'
    const dispatch = useDispatch()
    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo({text : input}))
        setInput('')
    }
  return (
    <form onSubmit={handleAddTodo}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button>Add</button>
    </form>
    
  )
}

export default AddTodos