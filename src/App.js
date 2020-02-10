import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import FixedMenuLayout from "./components/Layout";
import theme from './theme'
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import TodoListPage from "./pages/TodoListPage";
import {PrivateRoute} from "./helpers/PrivateRoute";

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
                <PrivateRoute path="/todolist/:id" component={TodoListPage}/>
                <PrivateRoute path="/overview" component={OverviewPage}/>
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
