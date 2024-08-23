import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // Prevent adding empty todos
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form 
      onSubmit={addTodoHandler} 
      style={{ 
        padding: '20px', 
        maxWidth: '600px', 
        margin: 'auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flexGrow: 1,
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          marginRight: '10px'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
