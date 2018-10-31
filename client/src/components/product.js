import React, { Component } from "react";
// import "./app.css";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";

@inject("store")
@observer
class Prodect extends Component {
  constructor() {
    super();
    this.state = {
      messege: false,
      messageText: ""
    };
  }
  addToCart = () => {
    let productId = toJS(this.props.data.id);
    let userId = this.props.store.userInfo.id;
    this.props.store.userAddProduct(userId, productId).then(data => {
      if (data === true) {
        this.props.store.getAllProducts();
      }
    });
    this.setState({
      messageText: "You have joined the group successfully!",
      messege: true
    });
    setTimeout(() => {
      this.setState({
        messege: false,
        messageText: ""
      });
    }, 2000);
  };

  deleteItem = () => {
    let productId = toJS(this.props.data.id);
    let userId = this.props.store.userInfo.id;
    this.props.store.deleteItem(productId, userId).then(data => {
      if (data.data === true) {
        this.props.store.getAllProducts();
      }
    });
    this.setState({
      messageText: "item remove succsusfuly",
      messege: true
    });
    setTimeout(() => {
      this.setState({
        messege: false,
        messageText: ""
      });
    }, 2000);
  };
  render() {
    let data = this.props.data;
    let border = "";
    for (let i in data.customers) {
      let user = data.customers[i];
      if (user.id === this.props.userId) {
        border = "10px green solid";
      }
    }
    return (
      <div style={{ border: border }} className="prodect">
        {this.state.messege ? (
          <div className="success-message">
            {this.state.messageText}
            <div class="message-icon" />
          </div>
        ) : null}
        <div
          style={{ backgroundImage: `url(${data.image})` }}
          className="product-image"
        />
        <h2>{data.name}</h2>
        <h2>{data.price + "$"}</h2>
        <p>{data.description}</p>
        <h2 class="validCustomer">
          {this.props.validCustomers + " more customers!"}
        </h2>
        <button onClick={this.deleteItem} className="delete-product">
          delete
        </button>
        <button onClick={this.addToCart} className="add-product">
          add
        </button>
      </div>
    );
  }
}

export default Prodect;
