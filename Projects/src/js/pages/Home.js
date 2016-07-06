import React from "react";

import Article from "../components/Article";

export default class Home extends React.Component {
  render() {
    const Articles = [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4",
    ].map((title, i) => <Article key={i} title={title}/> );
    
    console.log("featured");
    return (
      <div>
        <div class="jumbotron">
        <div><img src={'http://www.motherdenim.com/media/wysiwyg/cms_images/SALE-PAGE-2.jpg'} alt="boohoo" className="img-responsive"/>
		  <span>
			<div>
			  <h1>Mid-Year Sale</h1>
			  <p>Sale all items up to 50% only at our store! Come and grab yours now!</p>
			  <p><a class="btn btn-primary btn-lg">Learn more</a></p>
			</div>
		</span>
		</div>
		</div>
		
        <div class="list-group">{Articles}</div>
      </div>
    );
  }
}
