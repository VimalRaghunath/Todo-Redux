import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoo: [],
}

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.todoo.push({ id: Date.now(), value: action.payload.todo,isEditing:false });
        },
        edit: (state,action) => {
           const todo = state.todoo.find((todo)=>todo.id === action.payload)
           if (todo) {
            todo.isEditing = true;
           }
        },
        save: (state,action) => {
            console.log(action.payload);
            state.todoo.forEach((todo)=>{
              if(todo.id === action.payload.id){
                todo.value = action.payload.text
                todo.isEditing = false
              }
            })
        },
        deletes: (state,action) => {
            const filtered = state.todoo.filter((item)=>item.id !== action.payload)
            state.todoo = filtered
        }

    },
});

export default TodoSlice.reducer;
export const { add,edit,save,deletes } = TodoSlice.actions;

