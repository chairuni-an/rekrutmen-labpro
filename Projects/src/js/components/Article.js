import React from "react";

export default class extends React.Component {
  render() {
    const { title } = this.props;

    return (
    <div class="col-md-4">
     <a href="#" class="list-group-item">
		<h4 class="list-group-item-heading">{title}</h4>
		<p class="list-group-item-text">Produk ini adalah bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
	  </a>
	  </div>
    );
  }
}
