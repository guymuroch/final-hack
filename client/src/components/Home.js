import React, { Component } from "react";
import axios from "axios";
// import "./app.css";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import Product from "./product";
@inject("store")
@observer
class Home extends Component {
  render() {
    let products = this.props.store.products;
    let userId = this.props.store.userInfo.id;
    if (products !== undefined) {
      if (toJS(products).length == 0) {
        return (
          <div className="empty-repo">
            <h1>empty repository</h1>
            <div className="empty-repo-logo" />
          </div>
        );
      } else {
        return (
          <div className="seller-repo">
            {products.map((product, index) => {
              let validCustomers = product.minValid - product.customers.length;
              return (
                <Product
                  validCustomers={validCustomers}
                  userId={userId}
                  getProducts={this.props.getProducts}
                  key={index}
                  data={product}
                />
              );
            })}
          </div>
        );
      }
    } else {
      return <h1 className="loding">loading repository...</h1>;
    }
  }
}

export default Home;
