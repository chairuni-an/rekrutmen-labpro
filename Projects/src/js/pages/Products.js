import React from "react";

export default class Products extends React.Component {
	
  render() {
	console.log(this.props);
    const { location } = this.props;
    const allClass = location.pathname === "/products" ? "active" : "";
    const girlClass = location.pathname === "/products/girl" ? "active" : "";
    const boyClass = location.pathname === "/products/boy" ? "active" : "";
    const unisexClass = location.pathname === "/products/unisex" ? "active" : "";

    const containerStyle = {
      marginTop: "51px"
    };
    return (
      <div>
			<div class="container" style={ containerStyle }>
			  <div class="row">
				<div class="col-lg-12">
					<ul class="nav nav-tabs nav-justified sidebar1">
						<li class={ allClass }><a href="/#/products">All <span class="sr-only">(current)</span></a></li>
						<li class={ girlClass }><a href="/#/products/girl">Girl</a></li>
						<li class={ boyClass }><a href="/#/products/boy">Boy</a></li>
						<li class={ unisexClass }><a href="/#/products/unisex">Unisex</a></li>
					</ul>
					<div class="container-fluid">
					  <div class="row">
						<div class="col-sm-3 col-md-2 sidebar">
						  <ul class="nav nav-sidebar">
						  <h4 class="page-header page-header1 text-center">CATEGORIES</h4>
							<li class={ allClass }><a href="/#/products">All <span class="sr-only">(current)</span></a></li>
							<li class={ girlClass }><a href="/#/products/girl">Girl</a></li>
							<li class={ boyClass }><a href="/#/products/boy">Boy</a></li>
							<li class={ unisexClass }><a href="/#/products/unisex">Unisex</a></li>
							<h4 class="page-footer text-center"></h4>
						  </ul>
						</div>
					  </div>
					 </div>
					 
					<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					  <h1 class="page-header text-center">Our Products</h1>

						{ this.props.children }
					   <div class= "page-header"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

