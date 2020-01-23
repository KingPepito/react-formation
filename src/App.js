import React from 'react';
import './App.css';
import Todolist from "./components/TodoList"

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
    </>
  );
}

export default App;
