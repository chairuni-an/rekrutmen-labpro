import React from "react";

export default class Products extends React.Component {
  render() {
	console.log(this.props);
    

    return (
      <div>
        <div class="container-fluid">
		  <div class="row">
			<div class="col-sm-3 col-md-2 sidebar">
			  <ul class="nav nav-sidebar">
				<li class="active"><a href="/#/products" >All <span class="sr-only">(current)</span></a></li>
				<li><a href="/#/products/girl">Girl</a></li>
				<li><a href="/#/products/boy">Boy</a></li>
				<li><a href="/#/products/unisex">Unisex</a></li>
			  </ul>
			</div>
		  </div>
		 </div>
		 
		 <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">What do we sell?</h1>

            { this.props.children }
            
		</div>
	</div>
    );
  }
}

