import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import FixedMenuLayout from "./components/Layout";
import theme from './theme'
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import TodoListPage from "./pages/TodoListPage";

// Entry point
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FixedMenuLayout>
          <div className="App">
            <header className="App-header">
              <Switch>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Route path="/todolist/:id">
                  <TodoListPage/>
                </Route>
                <Route path="/overview">
                  <OverviewPage/>
                </Route>
                <Route path="/">
                  <HomePage/>
                </Route>
              </Switch>
            </header>
          </div>
        </FixedMenuLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
