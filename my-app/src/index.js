import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./component/blog/Blog";
import BlogDetail from "./component/blog/BlogDetail";
import Test from "./component/blog/Test";
import Login from "./component/member/Login";
import Register from "./component/member/Register";
import Comment from "./component/blog/Comment";
import Account from "./component/member/Account";
import Product from "./component/member/Product";
import AddProduct from "./component/member/AddProduct";
import EditProduct from "./component/member/EditProduct";
import Home from "./component/member/Home";
import ProdDetail from "./component/member/ProdDetail";
import Cart from "./component/member/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/blog/list" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<BlogDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/account/update" element={<Account />} />
          <Route path="/account/my-product" element={<Product />} />
          <Route path="/account/add-product" element={<AddProduct />} />
          <Route path="/member/edit-product/:id" element={<EditProduct />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/detail/:id" element={<ProdDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
