import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function DisplayDeleteTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Manage Your Todos</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((eachTodo) => (
          <li
            key={eachTodo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#e7e7e7',
              padding: '10px 15px',
              borderRadius: '8px',
              marginBottom: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ color: '#333' }}>{eachTodo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(eachTodo.id))}
              style={{
                background: '#f44336',
                border: 'none',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayDeleteTodos;
