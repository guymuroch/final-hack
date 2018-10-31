import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      User: { Name: "", Password: "" },
      message: { text: "", show: false },
      redirectTo: null
    };
  }
  componentDidMount() {
    let logIn = JSON.parse(localStorage.getItem("user"));
    if (logIn) {
      this.setState({
        redirectTo: "/home"
      });
    }
  }
  getInfo = event => {
    let user = this.state.User;
    user[event.target.name] = event.target.value;
    this.setState({
      User: user
    });
  };
  logInUser = () => {
    let answe = this.props.store.userLogIn(this.state.User).then(data => {
      if (data === true) {
        this.props.getUsers();
        this.setState({
          redirectTo: "/home"
        });
      } else {
      }
    });
  };
  render() {
    if (this.state.redirectTo === null) {
      return (
        <div className="Login">
          <div className="Login1">
            <div className="Login-header">
              <Link to="/">
                <span className="register-link">register</span>
              </Link>
            </div>
            <input
              onChange={event => {
                this.getInfo(event);
              }}
              name="Name"
              placeholder="name"
            />
            <input
              onChange={event => {
                this.getInfo(event);
              }}
              name="Password"
              placeholder="Password"
            />
            <button onClick={this.logInUser}>log in</button>
          </div>
        </div>
      );
    } else {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
  }
}

export default LogIn;
