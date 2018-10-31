import React, { Component } from "react";
import axios from "axios";
import AddNew from "./Add-new";
import Header from "./Header";
import Home from "./Home";
// import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
@inject("store")
@observer
class User extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null
    };
  }
  changeRedirect = () => {
    this.setState({
      redirectTo: "/logIn"
    });
  };
  componentDidMount() {
    let logIn = JSON.parse(localStorage.getItem("user"));
    if (!logIn) {
      this.setState({
        redirectTo: "/logIn"
      });
    }
  }

  render() {
    // console.log(toJS(this.props.products));
    if (this.state.redirectTo === null) {
      return (
        <div className="seller">
          <Header userInfo={this.props.userInfo} logoutF={this.props.logoutF} />
          <Route
            exact
            path="/home/products"
            render={() => {
              return (
                <Home
                  userId={this.props.userInfo.id}
                  getProducts={this.props.getProducts}
                  products={this.props.products}
                />
              );
            }}
          />
          <Route
            path="/home"
            exact
            render={() => {
              return (
                <AddNew
                  redirectTo={this.changeRedirect}
                  userId={this.props.userInfo.id}
                />
              );
            }}
          />
        </div>
      );
    } else {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
  }
}

export default User;
