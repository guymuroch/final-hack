import React, { Component } from "react";
import axios from "axios";
// import "./app.css";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
@inject("store")
@observer
class Header extends Component {
  logout = () => {
    this.props.store.userLogOut(this.props.userInfo.id);
  };
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home/products">products</a>
          </li>

          <li className="name">
            <a onClick={this.logout} href="">
              logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
