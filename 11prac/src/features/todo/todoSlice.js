import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // todos: [{ id: 1, text: "learn react" }],
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const eachTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(eachTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (eachTodo) => eachTodo.id !== action.payload
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
