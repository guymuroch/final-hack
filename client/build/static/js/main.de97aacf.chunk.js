(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,r){e.exports=r(68)},36:function(e,t,r){},58:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var a,n,s,o,c,u,i,l,p=r(0),d=r.n(p),m=r(18),h=r.n(m),g=(r(36),r(7)),f=r.n(g),b=r(16),v=r(4),O=r(5),j=r(9),y=r(8),w=r(10),E=r(11),I=r.n(E),P=(r(58),r(70)),x=r(71),N=r(69),k=r(72),T=r(3),S=Object(T.b)("store")(a=Object(T.c)(a=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(j.a)(this,Object(y.a)(t).call(this))).getInfo=function(t){var r=e.state.newUser;r[t.target.name]=t.target.value,e.setState({newUser:r})},e.addNewUser=function(){var t=e.state.newUser;if(t.Name.length<3){var r=e.state.message;r.text="name min Letters 3",r.show=!0,e.setState({message:r})}else if(t.Email.length<11){var a=e.state.message;a.text="email min Letters 11",a.show=!0,e.setState({message:a})}else if(t.Password.length<8){var n=e.state.message;n.text="password min Number 8",n.show=!0,e.setState({message:n})}else if(t.Phone.length<8){var s=e.state.message;s.text="phone min Number 8",s.show=!0,e.setState({message:s})}else e.props.store.addUser(e.state.newUser).then(function(t){t&&e.setState({redirectTo:"/home"});var r=e.state.message;r.text="",r.show=!1,e.setState({message:r})})},e.state={newUser:{Name:"",Email:"",Password:"",Phone:"",seller:!1},message:{text:"",show:!1},redirectTo:null},e}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("user"))&&this.setState({redirectTo:"/home"})}},{key:"render",value:function(){var e=this;return null===this.state.redirectTo?d.a.createElement("div",{className:"register"},d.a.createElement("div",{className:"register1"},d.a.createElement("div",{className:"register-header"},d.a.createElement(N.a,{to:"/LogIn"},d.a.createElement("span",{className:"sign-in"},"Sign in"))),d.a.createElement("h3",null,"using this platform to sell/buy with the assist of purchase groups, you can sign in as customer or seller and immediately join the big market"),d.a.createElement("input",{onChange:function(t){e.getInfo(t)},name:"Name",placeholder:"Name"}),d.a.createElement("input",{onChange:function(t){e.getInfo(t)},name:"Email",placeholder:"Email"}),d.a.createElement("input",{onChange:function(t){e.getInfo(t)},name:"Password",placeholder:"Password"}),d.a.createElement("input",{onChange:function(t){e.getInfo(t)},name:"Phone",placeholder:"Phone"}),d.a.createElement("button",{onClick:this.addNewUser},"create"),d.a.createElement("h4",{style:{color:"red"}},this.state.message.show?this.state.message.text:null))):d.a.createElement(k.a,{to:{pathname:this.state.redirectTo}})}}]),t}(p.Component))||a)||a,U=Object(T.b)("store")(n=Object(T.c)(n=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(j.a)(this,Object(y.a)(t).call(this))).getInfo=function(t){var r=e.state.User;r[t.target.name]=t.target.value,e.setState({User:r})},e.logInUser=function(){e.props.store.userLogIn(e.state.User).then(function(t){!0===t&&(e.props.getUsers(),e.setState({redirectTo:"/home"}))})},e.state={User:{Name:"",Password:""},message:{text:"",show:!1},redirectTo:null},e}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("user"))&&this.setState({redirectTo:"/home"})}},{key:"render",value:function(){var e=this;return null===this.state.redirectTo?d.a.createElement("div",{className:"Login"},d.a.createElement("div",{className:"Login1"},d.a.createElement("div",{className:"Login-header"},d.a.createElement(N.a,{to:"/"},d.a.createElement("span",{className:"register-link"},"register"))),d.a.createElement("input",{onChange:function(t){e.getInfo(t)},name:"Name",placeholder:"name"}),d.a.createElement("input",{onChange:function(t){e.getInfo(t)},name:"Password",placeholder:"Password"}),d.a.createElement("button",{onClick:this.logInUser},"log in"))):d.a.createElement(k.a,{to:{pathname:this.state.redirectTo}})}}]),t}(p.Component))||n)||n,C=r(2),D=Object(T.b)("store")(s=Object(T.c)(s=function(e){function t(){var e,r;Object(v.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(n)))).logout=function(){r.props.store.userLogOut(r.props.userInfo.id)},r}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"nav-bar"},d.a.createElement("ul",null,d.a.createElement("li",null,d.a.createElement("a",{href:"/home"},"Home")),d.a.createElement("li",null,d.a.createElement("a",{href:"/home/products"},"products")),d.a.createElement("li",{className:"name"},d.a.createElement("a",{onClick:this.logout,href:""},"logout"))))}}]),t}(p.Component))||s)||s,L=Object(T.b)("store")(o=Object(T.c)(o=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(j.a)(this,Object(y.a)(t).call(this))).getProductInfo=function(t){var r=e.state.product;r[t.target.name]=t.target.value,e.setState({product:r})},e.NewProduct=function(){e.props.store.addNewProduct(e.state.product,e.props.userId).then(function(t){if(!0===t){e.setState({product:{name:"",price:"",customers:"",image:"",description:"",email:""},messageText:"item added succsusfuly",messege:!0}),setTimeout(function(){e.setState({messege:!1,messageText:""})},2e3)}else e.setState({messageText:"somthing went wrong...",messege:!0}),setTimeout(function(){e.setState({messege:!1,messageText:""})},2e3)})},e.state={product:{name:"",price:"",customers:"",image:""},messege:!1,messageText:""},e}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.product),d.a.createElement("div",{className:"AddNew"},d.a.createElement("div",{className:"start"},d.a.createElement("h1",null,"welcome to the trading platform"),d.a.createElement("h2",null,"start by adding a new product")),this.state.messege?d.a.createElement("div",{className:"success-message1"},this.state.messageText,d.a.createElement("div",{className:"message-icon1"})):null,d.a.createElement("div",{className:"sales-logo"}),d.a.createElement("input",{value:this.state.product.email,name:"email",onChange:function(t){e.getProductInfo(t)},placeholder:"seller-email"}),d.a.createElement("input",{value:this.state.product.name,name:"name",onChange:function(t){e.getProductInfo(t)},placeholder:"product name"}),d.a.createElement("input",{value:this.state.product.price,name:"price",onChange:function(t){e.getProductInfo(t)},placeholder:"price"}),d.a.createElement("input",{value:this.state.product.customers,name:"customers",onChange:function(t){e.getProductInfo(t)},type:"number",placeholder:"minimum customers",step:"1"}),d.a.createElement("input",{value:this.state.product.description,name:"description",onChange:function(t){e.getProductInfo(t)},placeholder:"description"}),d.a.createElement("input",{value:this.state.product.image,name:"image",onChange:function(t){e.getProductInfo(t)},placeholder:"image url"}),d.a.createElement("button",{onClick:this.NewProduct,className:"addProduct"},"Create"))}}]),t}(p.Component))||o)||o,A=Object(T.b)("store")(c=Object(T.c)(c=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(j.a)(this,Object(y.a)(t).call(this))).addToCart=function(){var t=Object(C.n)(e.props.data.id),r=e.props.store.userInfo.id;e.props.store.userAddProduct(r,t).then(function(t){!0===t&&e.props.store.getAllProducts()}),e.setState({messageText:"You have joined the group successfully!",messege:!0}),setTimeout(function(){e.setState({messege:!1,messageText:""})},2e3)},e.deleteItem=function(){var t=Object(C.n)(e.props.data.id),r=e.props.store.userInfo.id;e.props.store.deleteItem(t,r).then(function(t){!0===t.data&&e.props.store.getAllProducts()}),e.setState({messageText:"item remove succsusfuly",messege:!0}),setTimeout(function(){e.setState({messege:!1,messageText:""})},2e3)},e.state={messege:!1,messageText:""},e}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.data,t="";for(var r in e.customers){e.customers[r].id===this.props.userId&&(t="10px green solid")}return d.a.createElement("div",{style:{border:t},className:"prodect"},this.state.messege?d.a.createElement("div",{className:"success-message"},this.state.messageText,d.a.createElement("div",{class:"message-icon"})):null,d.a.createElement("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:"product-image"}),d.a.createElement("h2",null,e.name),d.a.createElement("h2",null,e.price+"$"),d.a.createElement("p",null,e.description),d.a.createElement("h2",{class:"validCustomer"},this.props.validCustomers+" more customers!"),d.a.createElement("button",{onClick:this.deleteItem,className:"delete-product"},"delete"),d.a.createElement("button",{onClick:this.addToCart,className:"add-product"},"add"))}}]),t}(p.Component))||c)||c,J=Object(T.b)("store")(u=Object(T.c)(u=function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props.store.products,r=this.props.store.userInfo.id;return void 0!==t?0==Object(C.n)(t).length?d.a.createElement("div",{className:"empty-repo"},d.a.createElement("h1",null,"empty repository"),d.a.createElement("div",{className:"empty-repo-logo"})):d.a.createElement("div",{className:"seller-repo"},t.map(function(t,a){var n=t.minValid-t.customers.length;return d.a.createElement(A,{validCustomers:n,userId:r,getProducts:e.props.getProducts,key:a,data:t})})):d.a.createElement("h1",{className:"loding"},"loading repository...")}}]),t}(p.Component))||u)||u,M=Object(T.b)("store")(i=Object(T.c)(i=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(j.a)(this,Object(y.a)(t).call(this))).changeRedirect=function(){e.setState({redirectTo:"/logIn"})},e.state={redirectTo:null},e}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("user"))||this.setState({redirectTo:"/logIn"})}},{key:"render",value:function(){var e=this;return null===this.state.redirectTo?d.a.createElement("div",{className:"seller"},d.a.createElement(D,{userInfo:this.props.userInfo,logoutF:this.props.logoutF}),d.a.createElement(x.a,{exact:!0,path:"/home/products",render:function(){return d.a.createElement(J,{userId:e.props.userInfo.id,getProducts:e.props.getProducts,products:e.props.products})}}),d.a.createElement(x.a,{path:"/home",exact:!0,render:function(){return d.a.createElement(L,{redirectTo:e.changeRedirect,userId:e.props.userInfo.id})}})):d.a.createElement(k.a,{to:{pathname:this.state.redirectTo}})}}]),t}(p.Component))||i)||i,z=(r(63),Object(T.b)("store")(l=Object(T.c)(l=function(e){function t(){var e;return Object(v.a)(this,t),(e=Object(j.a)(this,Object(y.a)(t).call(this))).redirectTo=function(t){console.log(t),e.setState({redirectTo:'"'.concat(t,'"')})},e.getProducts=function(){e.props.store.getAllProducts(),e.setState({redirectTo:"/logIn"})},e.getUsers=function(){e.props.store.getAllProducts(),e.props.store.initUser()},e.state={redirectTo:null},e}return Object(w.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!JSON.parse(localStorage.getItem("user"))){e.next=7;break}return e.next=4,this.props.store.initUser();case 4:return e.next=6,this.props.store.getAllProducts();case 6:this.setState({redirectTo:"/home"});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return d.a.createElement(P.a,null,d.a.createElement("div",null,d.a.createElement(x.a,{exact:!0,path:"/",render:function(){return d.a.createElement(S,null)}}),d.a.createElement(x.a,{exact:!0,path:"/LogIn",render:function(){return d.a.createElement(U,{getUsers:e.getUsers})}}),d.a.createElement(x.a,{path:"/home",render:function(){return d.a.createElement(M,{getProducts:e.getProducts,redirectTo:e.redirectTo,userInfo:e.props.store.userInfo,products:e.props.store.products})}})))}}]),t}(p.Component))||l)||l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B,F,R,W,$,H,V,Y,q,G,K=r(21),Q=r(13),X=(r(67),new(B=C.d.bound,F=C.d.bound,R=C.d.bound,W=C.d.bound,$=C.d.bound,H=C.d.bound,V=function(){function e(){Object(v.a)(this,e),Object(K.a)(this,"userInfo",Y,this),Object(K.a)(this,"products",q,this),Object(K.a)(this,"currentUser",G,this)}return Object(O.a)(e,[{key:"initUser",value:function(){var e=this;I.a.get("/initUser").then(function(t){var r={name:t.data.name,email:t.data.email,phone:t.data.phone,seller:t.data.seller,id:t.data.id,products:t.data.products};e.userInfo=r})}},{key:"addUser",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/newUser",t);case 2:return!0===(r=e.sent).data.exist&&(this.currentUser(r.data.data),localStorage.setItem("user","true")),e.abrupt("return",r.data.exist);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"userLogIn",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/LogIn",{params:{name:t.Name,password:t.Password}});case 2:return!0===(r=e.sent).data.exist&&(this.currentUser(r.data.data),localStorage.setItem("user","true")),e.abrupt("return",r.data.exist);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"userLogOut",value:function(){var e=Object(b.a)(f.a.mark(function e(t){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.put("/logOut",{userId:t});case 2:return!0===(r=e.sent).data&&localStorage.clear(),this.currentUser({}),e.abrupt("return",r.data);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"addNewProduct",value:function(){var e=Object(b.a)(f.a.mark(function e(t,r){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==r){e.next=4;break}return e.abrupt("return",!1);case 4:return e.next=6,I.a.post("/addNewProduct",{productInfo:t,userId:r});case 6:if(!0!==e.sent.data){e.next=11;break}return e.abrupt("return",!0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"userAddProduct",value:function(){var e=Object(b.a)(f.a.mark(function e(t,r){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/userAddProduct",{userId:t,productId:r});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"getAllProducts",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/products");case 2:t=e.sent,this.products=t.data;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object(b.a)(f.a.mark(function e(t,r){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.put("/deleteProduct",{productId:t,userId:r});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()},{key:"userData",get:function(){return this.userInfo}}]),e}(),Y=Object(Q.a)(V.prototype,"userInfo",[C.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),q=Object(Q.a)(V.prototype,"products",[C.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(Q.a)(V.prototype,"userData",[C.e],Object.getOwnPropertyDescriptor(V.prototype,"userData"),V.prototype),Object(Q.a)(V.prototype,"initUser",[B],Object.getOwnPropertyDescriptor(V.prototype,"initUser"),V.prototype),G=Object(Q.a)(V.prototype,"currentUser",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.userInfo=t}}}),Object(Q.a)(V.prototype,"addUser",[C.d],Object.getOwnPropertyDescriptor(V.prototype,"addUser"),V.prototype),Object(Q.a)(V.prototype,"userLogIn",[R],Object.getOwnPropertyDescriptor(V.prototype,"userLogIn"),V.prototype),Object(Q.a)(V.prototype,"userLogOut",[C.d],Object.getOwnPropertyDescriptor(V.prototype,"userLogOut"),V.prototype),Object(Q.a)(V.prototype,"addNewProduct",[C.d],Object.getOwnPropertyDescriptor(V.prototype,"addNewProduct"),V.prototype),Object(Q.a)(V.prototype,"userAddProduct",[W],Object.getOwnPropertyDescriptor(V.prototype,"userAddProduct"),V.prototype),Object(Q.a)(V.prototype,"getAllProducts",[$],Object.getOwnPropertyDescriptor(V.prototype,"getAllProducts"),V.prototype),Object(Q.a)(V.prototype,"deleteItem",[H],Object.getOwnPropertyDescriptor(V.prototype,"deleteItem"),V.prototype),V));window.store=X;var Z=X;h.a.render(d.a.createElement(T.a,{store:Z},d.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.de97aacf.chunk.js.map