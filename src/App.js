import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignInAndSignUpPage from "./pages/sign-in&up/SignInAndSignUpPage";
import { auth } from "./assets/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribedFromAuth = null;

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
