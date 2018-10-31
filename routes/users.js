var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const Product = require("../dataAccess/Product");
const Customer = require("../dataAccess/Customer");
const Customer_Product = require("../dataAccess/Customer_Product");
const Sequelize = require("sequelize");
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "guymuroch2@gmail.com",
    pass: process.env.GOOGLE_KEY
  }
});

Customer.belongsToMany(Product, { through: Customer_Product });
Product.belongsToMany(Customer, { through: Customer_Product });
// Product.sync();
// Customer.sync();
// Customer_Product.sync();
// Customer.sync({ force: true });
// Product.sync({ force: true });
// Customer_Product.sync({ force: true });

addNewProduct = async function(productInfo, userId) {
  let product = await Product.create({
    name: productInfo.name,
    price: productInfo.price,
    minValid: productInfo.customers,
    image: productInfo.image,
    description: productInfo.description,
    email: productInfo.email
  });
  return true;
};
userAddProudct = async function(userId, ProductId) {
  let product = await Product.findOne({ where: { id: ProductId } });
  let user = await Customer.findOne({ where: { id: userId } });
  let connect = await product.addCustomer(user);
  return product.id;
};
addNewUser = async function(userInfo) {
  let customer = await Customer.create({
    name: userInfo.Name,
    email: userInfo.Email,
    password: userInfo.Password,
    phone: userInfo.Phone,
    logIn: "true",
    seller: userInfo.seller
  });
  return customer;
};
deleteProduct = async function(productId, userId) {
  let user = await Customer.findOne({ where: userId });
  let product = await Product.findOne({ where: productId });
  product.removeCustomer(user);
  return true;
};
userLogOut = async function(userId) {
  let customer = await Customer.update(
    { logIn: "false" },
    { where: { id: userId } }
  );
  return true;
};
UserLogIn = async function(userInfo) {
  let customer = await Customer.update(
    { logIn: "true" },
    { where: { name: userInfo.name, password: userInfo.password } }
  );
  let check = await Customer.find({
    where: { logIn: "true", name: userInfo.name, password: userInfo.password }
  });
  if (check === null) {
    return { exist: false };
  } else {
    return { data: check, exist: true };
  }
};
getProducts = async function() {
  let products = await Product.findAll({ include: [Customer] });
  return products;
};
initialUser = async function() {
  let user = await Customer.findOne({
    where: { logIn: "true" },
    include: [Product]
  });
  return user;
};
router.post("/userAddProduct", (req, res) => {
  const { userId, productId } = req.body;
  userAddProudct(userId, productId).then(data => {
    Product.findOne({ where: { id: data }, include: [Customer] }).then(data => {
      if (data.customers.length == data.minValid) {
        for (let i in data.customers) {
          console.log(data.customers[i].email);
          const mailOptions = {
            from: `${data.email}`,
            to: `${data.customers[i].email}`,
            subject: "Sending Email using Node.js",
            text: `Your purchase group has been successful please contact with me
            ${data.name}
            -${data.price}
            -${data.description}
            -${data.image}
            `
          };
          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
              Product.destroy({ where: { id: productId } });
            }
          });
        }
      }

      res.send(true);
    });
  });
});
router.get("/initUser", (req, res) => {
  initialUser().then(data => {
    // console.log(data);
    res.send(data);
  });
});
router.get("/products", (req, res) => {
  getProducts().then(data => {
    res.send(data);
  });
});
router.post("/newUser", (req, res) => {
  addNewUser(req.body).then(user => {
    const { name, phone, email } = user;
    let newUser = {
      name: name,
      phone: phone,
      email: email
    };
    res.send({ data: newUser, exist: true });
  });
});
router.put("/logOut", (req, res) => {
  userLogOut(req.body.userId);
  res.send(true);
});
router.put("/deleteProduct", (req, res) => {
  let { productId, userId } = req.body;
  deleteProduct(productId, userId).then(data => {
    res.send({ data });
  });
});
router.get("/LogIn", (req, res) => {
  UserLogIn(req.query).then(data => {
    if (data.exist === false) {
      res.send(false);
    } else {
      res.send({ data: data.data, exist: data.exist });
    }
  });
});
router.post("/addNewProduct", (req, res) => {
  addNewProduct(req.body.productInfo, req.body.userId).then(data => {
    res.send(data);
  });
});
module.exports = router;
