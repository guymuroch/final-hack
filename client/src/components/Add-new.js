import React, { Component } from "react";
import axios from "axios";
// import "./app.css";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import User from "./Header";
@inject("store")
@observer
class AddNew extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        name: "",
        price: "",
        customers: "",
        image: ""
      },
      messege: false,
      messageText: ""
    };
  }
  getProductInfo = event => {
    let newProduct = this.state.product;
    newProduct[event.target.name] = event.target.value;
    this.setState({
      product: newProduct
    });
  };
  NewProduct = () => {
    this.props.store
      .addNewProduct(this.state.product, this.props.userId)
      .then(data => {
        if (data === true) {
          let obj = {
            name: "",
            price: "",
            customers: "",
            image: "",
            description: "",
            email: ""
          };
          this.setState({
            product: obj,
            messageText: "item added succsusfuly",
            messege: true
          });
          setTimeout(() => {
            this.setState({
              messege: false,
              messageText: ""
            });
          }, 2000);
        } else {
          this.setState({
            messageText: "somthing went wrong...",
            messege: true
          });
          setTimeout(() => {
            this.setState({
              messege: false,
              messageText: ""
            });
          }, 2000);
        }
      });
  };

  render() {
    console.log(this.state.product);
    return (
      <div className="AddNew">
        <div className="start">
          <h1>welcome to the trading platform</h1>
          <h2>start by adding a new product</h2>
        </div>
        {this.state.messege ? (
          <div className="success-message1">
            {this.state.messageText}
            <div className="message-icon1" />
          </div>
        ) : null}
        <div className="sales-logo" />
        <input
          value={this.state.product.email}
          name="email"
          onChange={event => {
            this.getProductInfo(event);
          }}
          placeholder="seller-email"
        />
        <input
          value={this.state.product.name}
          name="name"
          onChange={event => {
            this.getProductInfo(event);
          }}
          placeholder="product name"
        />

        <input
          value={this.state.product.price}
          name="price"
          onChange={event => {
            this.getProductInfo(event);
          }}
          placeholder="price"
        />
        <input
          value={this.state.product.customers}
          name="customers"
          onChange={event => {
            this.getProductInfo(event);
          }}
          type="number"
          placeholder="minimum customers"
          step="1"
        />
        <input
          value={this.state.product.description}
          name="description"
          onChange={event => {
            this.getProductInfo(event);
          }}
          placeholder="description"
        />
        <input
          value={this.state.product.image}
          name="image"
          onChange={event => {
            this.getProductInfo(event);
          }}
          placeholder="image url"
        />
        <button onClick={this.NewProduct} className="addProduct">
          Create
        </button>
      </div>
    );
  }
}

export default AddNew;
