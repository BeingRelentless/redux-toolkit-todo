import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1,
        text : "first thing in the morning"
    }]
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
                text : action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) =>{
           state.todos = state.todos.filter((item) =>  item.id !== action.payload.id)
        }
    }
})

export const {addTodo, removeTodo } = todoSlice.actions
//without todoSlice.reducer we cannot connect the slice to the store
export default todoSlice.reducer