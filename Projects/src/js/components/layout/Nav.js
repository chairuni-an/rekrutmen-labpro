import React from "react";
import { IndexLink, Link } from "react-router";

import { Button } from "react-bootstrap";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
    bind(this);
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const productsClass = location.pathname.match(/^\/products/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
    <div class="navbar-wrapper">
		<div class="container">
			<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div class="container">
				  <div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" onClick={ this.toggleCollapse } data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					  <span class="sr-only">Toggle navigation</span>
					  <span class="icon-bar"></span>
					  <span class="icon-bar"></span>
					  <span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">SmartToys Co.</a>
				  </div>
				  <div class={ "navbar-collapse " + navClass } id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
					  <li class={ homeClass }>
						<IndexLink to="/" onClick={ this.toggleCollapse }>What´s New</IndexLink>
					  </li>
					  <li class={ productsClass }>
						<Link to="products" onClick={ this.toggleCollapse }>Products</Link>
					  </li>
					  <li class={ aboutClass }>
						<Link to="about" onClick={ this.toggleCollapse }>About</Link>
					  </li>
					</ul>
				  </div>
				</div>
			  </nav>
		</div>
	</div>
    );
  }
}
