import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import About from "./pages/About";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="products(/:article)" name="products" component={Products}></Route>
      <Route path="about" name="about" component={About}></Route>
    </Route>
  </Router>,
app);

