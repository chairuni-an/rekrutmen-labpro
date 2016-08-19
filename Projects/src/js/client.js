import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import About from "./pages/About";

import All from "./components/All";
import Girl from "./components/Girl";
import Boy from "./components/Boy";
import Unisex from "./components/Unisex";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path="products" name="products" component={ Products }>
		<IndexRoute component={ All }></IndexRoute>
		<Route path="girl" name="girl" component={ Girl }></Route>
		<Route path="boy" name="boy" component={ Boy }></Route>
		<Route path="unisex" name="unisex" component={ Unisex }></Route>
      </Route>
      <Route path="about" name="about" component={ About }></Route>
    </Route>
  </Router>,
app);

