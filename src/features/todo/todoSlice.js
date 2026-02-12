import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : "todo",
    //initial state is just the starting state like useState(0 <- initial state)
    initialState,
    // reducers are just the methods to change the state data , syntax - (state, action) 
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload.text,
                completed : false
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) =>{
           state.todos = state.todos.filter((item) =>  item.id !== action.payload.id)
        },
        toggleTodo : (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
})

export const {addTodo, removeTodo, toggleTodo } = todoSlice.actions
//without todoSlice.reducer we cannot connect the slice to the store
export default todoSlice.reducer