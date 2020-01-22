import React from 'react';
import './App.css';
import Todolist from "./components/TodoList";
import TodolistClass from "./components/TodolistClass";

// Entry point
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>TodoList with hooks</h1>
          <Todolist/>
        </header>
      </div>
      <div className="App">
        <header className="App-header">
          <h1>TodoList with class</h1>
          <TodolistClass/>
        </header>
      </div>
    </>
  );
}

export default App;
