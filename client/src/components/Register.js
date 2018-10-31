import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Register extends Component {
  constructor() {
    super();
    this.state = {
      newUser: { Name: "", Email: "", Password: "", Phone: "", seller: false },
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
    let user = this.state.newUser;
    user[event.target.name] = event.target.value;
    this.setState({
      newUser: user
    });
  };
  addNewUser = () => {
    let user = this.state.newUser;
    if (user.Name.length < 3) {
      let Newmessage = this.state.message;
      Newmessage.text = "name min Letters 3";
      Newmessage.show = true;
      this.setState({
        message: Newmessage
      });
    } else if (user.Email.length < 11) {
      let Newmessage = this.state.message;
      Newmessage.text = "email min Letters 11";
      Newmessage.show = true;
      this.setState({
        message: Newmessage
      });
    } else if (user.Password.length < 8) {
      let Newmessage = this.state.message;
      Newmessage.text = "password min Number 8";
      Newmessage.show = true;
      this.setState({
        message: Newmessage
      });
    } else if (user.Phone.length < 8) {
      let Newmessage = this.state.message;
      Newmessage.text = "phone min Number 8";
      Newmessage.show = true;
      this.setState({
        message: Newmessage
      });
    } else {
      let answer = this.props.store.addUser(this.state.newUser).then(data => {
        if (data) {
          this.setState({
            redirectTo: "/home"
          });
        }
        let Newmessage = this.state.message;
        Newmessage.text = "";
        Newmessage.show = false;
        this.setState({
          message: Newmessage
        });
      });
    }
  };

  render() {
    if (this.state.redirectTo === null) {
      return (
        <div className="register">
          <div className="register1">
            <div className="register-header">
              <Link to="/LogIn">
                <span className="sign-in">Sign in</span>
              </Link>
            </div>
            <h3>
              using this platform to sell/buy with the assist of purchase
              groups, you can sign in as customer or seller and immediately join
              the big market
            </h3>

            <input
              onChange={event => {
                this.getInfo(event);
              }}
              name="Name"
              placeholder="Name"
            />
            <input
              onChange={event => {
                this.getInfo(event);
              }}
              name="Email"
              placeholder="Email"
            />
            <input
              onChange={event => {
                this.getInfo(event);
              }}
              name="Password"
              placeholder="Password"
            />
            <input
              onChange={event => {
                this.getInfo(event);
              }}
              name="Phone"
              placeholder="Phone"
            />
            <button onClick={this.addNewUser}>create</button>
            <h4 style={{ color: "red" }}>
              {this.state.message.show ? this.state.message.text : null}
            </h4>
          </div>
        </div>
      );
    } else {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
  }
}

export default Register;
