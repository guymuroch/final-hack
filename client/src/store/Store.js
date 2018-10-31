import { observable, action, computed } from "mobx";
import axios from "axios";
import { toJS } from "mobx";
class Store {
  @observable
  userInfo = {};
  @observable
  products = [];
  @computed
  get userData() {
    return this.userInfo;
  }
  @action.bound
  initUser() {
    axios.get("/initUser").then(answer => {
      let data = {
        name: answer.data.name,
        email: answer.data.email,
        phone: answer.data.phone,
        seller: answer.data.seller,
        id: answer.data.id,
        products: answer.data.products
      };
      this.userInfo = data;
    });
  }

  @action.bound
  currentUser = info => {
    this.userInfo = info;
  };

  @action
  async addUser(userInfo) {
    let answer = await axios.post("/newUser", userInfo);
    if (answer.data.exist === true) {
      this.currentUser(answer.data.data);
      localStorage.setItem("user", "true");
    }
    return answer.data.exist;
  }

  // works good
  @action.bound
  async userLogIn(userInfo) {
    let answer = await axios.get("/LogIn", {
      params: { name: userInfo.Name, password: userInfo.Password }
    });
    if (answer.data.exist === true) {
      this.currentUser(answer.data.data);
      localStorage.setItem("user", "true");
    }
    return answer.data.exist;
  }
  @action
  async userLogOut(userId) {
    let answer = await axios.put("/logOut", { userId });
    if (answer.data === true) {
      localStorage.clear();
    }
    this.currentUser({});
    return answer.data;
  }
  @action
  async addNewProduct(productInfo, userId) {
    if (userId === undefined) {
      return false;
    } else {
      let answer = await axios.post("/addNewProduct", { productInfo, userId });
      if (answer.data === true) {
        return true;
      } else {
        return false;
      }
    }
  }
  @action.bound
  async userAddProduct(userId, productId) {
    let answer = await axios.post("/userAddProduct", { userId, productId });
    return answer.data;
  }
  @action.bound
  async getAllProducts() {
    let answer = await axios.get("/products");
    this.products = answer.data;
  }
  @action.bound
  async deleteItem(productId, userId) {
    let answer = await axios.put("/deleteProduct", { productId, userId });
    return answer.data;
  }
}

const store = new Store();
window.store = store;
export default store;
