import React from 'react';
import './App.css';
import Todolist from "./components/TodoList"
import FixedMenuLayout from "./components/Layout";
import {ThemeProvider} from "styled-components";
import theme from './theme'
// Entry point
function App() {
  return (
    <ThemeProvider theme={theme}>
      <FixedMenuLayout>
        <div className="App">
          <header className="App-header">
            <h1>TodoList with hooks</h1>
            <Todolist/>
          </header>
        </div>
      </FixedMenuLayout>
    </ThemeProvider>
  );
}

export default App;
