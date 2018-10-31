import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import User from "./components/User";
import { observer, inject } from "mobx-react";
import { throws } from "assert";

@inject("store")
@observer
class App extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null
    };
  }
  redirectTo = data => {
    console.log(data);
    this.setState({
      redirectTo: `"${data}"`
    });
  };

  async componentDidMount() {
    let logIn = JSON.parse(localStorage.getItem("user"));
    if (logIn) {
      await this.props.store.initUser();
      await this.props.store.getAllProducts();
      this.setState({
        redirectTo: "/home"
      });
    }
  }
  getProducts = () => {
    this.props.store.getAllProducts();
    this.setState({
      redirectTo: "/logIn"
    });
  };
  getUsers = () => {
    this.props.store.getAllProducts();
    this.props.store.initUser();
  };
  render() {
    // console.log(toJS(this.props.store.userInfo));
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return <Register />;
            }}
          />
          <Route
            exact
            path="/LogIn"
            render={() => {
              return <LogIn getUsers={this.getUsers} />;
            }}
          />
          <Route
            path="/home"
            render={() => {
              return (
                <User
                  getProducts={this.getProducts}
                  redirectTo={this.redirectTo}
                  userInfo={this.props.store.userInfo}
                  products={this.props.store.products}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
