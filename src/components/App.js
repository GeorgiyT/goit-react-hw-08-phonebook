import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import PhoneBook from "./pages/PhoneBook";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contacts" component={PhoneBook} />
        </Switch>
      </>
    );
  }
}

export default App;
