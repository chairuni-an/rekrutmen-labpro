import React from "react";

import Article from "../components/Article";

export default class Products extends React.Component {
  render() {
	  console.log(this.props);
    
    const { params } = this.props;
    const { article } = params;

    const Articles = [
      "Produk 1",
      "Produk 2",
      "Produk 3",
      "Produk 4",
      "Produk 5",
      "Produk 6",
      "Produk 7",
      "Produk 8",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>What do we sell? {article}</h1>
        <div class="list-group">{Articles}</div>
      </div>
    );
  }
}

