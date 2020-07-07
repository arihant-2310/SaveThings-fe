import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import FindThing from "./components/FindThing";
import CreateThing from "./components/CreateThing";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/find">
            <FindThing />
          </Route>
          <Route exact path="/create">
            <CreateThing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
