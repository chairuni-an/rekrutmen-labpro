import React from "react";
import { Ol } from "react-bootstrap";

import Article from "../components/Article";

export default class Home extends React.Component {
  render() {
    const Articles = [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4",
    ].map((title, i) => <Article key={i} title={title}/> );
    
    return (
      <div>
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
			  
			  <ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner" role="listbox">
				<div class="item active">
				  <img class="first-slide" src={'/pic/summer.png'} alt="First slide" />
				  <div class="container">
					<div class="carousel-caption">
					  <h1>Summer is coming!</h1>
					   <p>Sale up to 50% only at our stores for all items + 10% with member card. <br>Grab yours fast!</br></p>
					</div>
				  </div>
				</div>
				<div class="item">
				  <img class="second-slide" src={'/pic/card.png'} alt="Second slide" />
				  <div class="container">
					<div class="carousel-caption">
					  <h1>Cashback up to 10%</h1>
					  <p>Get your own member card at our store and enjoy the cahsback now! <br>Only IDR 25K registration fee and administration fee, your member card will be valid for the next 5 years.</br></p>
					</div>
				  </div>
				</div>
				<div class="item">
				  <img class="third-slide" src={'/pic/summer2.png'} alt="Third slide" />
				  <div class="container">
					<div class="carousel-caption">
					</div>
				  </div>
				</div>
			  </div>
			  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			  </a>
			  
			</div>
				
			<div class="container marketing">
			  <div class="row">
				<div class="col-lg-4">
				  <img class="img-circle img-thumbnail" src={ '/pic/home1.jpg' } alt="Generic placeholder image" width="180" height="180" />
				  <h2>Coming Soon!</h2>
				  <p>3D puzzle is a new way to educate your kids how to puzzle. With 6 different images for each side, your kids would never get bored playing this.</p>
				  <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				</div>
				<div class="col-lg-4">
				  <img class="img-circle" src={ '/pic/gempi.png' } alt="Generic placeholder image" width="180" height="180" />
				  <h2>Endorse by Gempi</h2>
				  <p>Baby Gempi loves playing with our mini kitchen set aka "Masterchef Junior". Look how happy Gempi is! Just for reminder, don't let your kids eat those toys cause it's not edible. </p>
				  <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				</div>
				<div class="col-lg-4">
				  <img class="img-circle" src={ '/pic/fact.png' } alt="Generic placeholder image" width="180" height="180" />
				  <h2>Fun Fact!</h2>
				  <p>Between 12 and 24 months your toddler’s cognitive development really starts to blossom, this is when they will start to develop memories, as well as understand symbols, imitate, and play imaginatively.</p>
				  <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				</div>
			  </div>
			</div>
		
        
      </div>
    );
  }
}
