import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Navbar } from "./features/Navbar/Navbar";
import { Blog } from "./features/Blog/Blog";
import { Project } from "./features/Project/Project";
import { ContactMe } from "./features/ContactMe/ContactMe";
import { Home } from "./features/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contactme">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
