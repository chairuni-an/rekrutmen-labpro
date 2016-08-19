import React from "react";
import { Ol } from "react-bootstrap";

export default class Home extends React.Component {
	constructor(){
		super();
		this.state={
			name: "welcome",
		};
	}
	
	start(homeClass){
	  if(homeClass == "active"){
		  if(this.state.name == "welcome"){
			setTimeout(() =>{
			  this.setState({name: "to"});
			  bind(this);
			  start(homeClass);
			}, 1500);
		}
			if(this.state.name == "to"){
			setTimeout(() =>{
			  this.setState({name: "SmartToys Co."});
			  bind(this);
			  start(homeClass);
			}, 1500);
		}
		if(this.state.name == "SmartToys Co."){
			setTimeout(() =>{
			  this.setState({name: "welcome"});
			  bind(this);
			  start(homeClass);
			}, 1500);
		}
	  }
	}
	
	
  render() {
		const homeClass = location.pathname === "/" ? "active" : "";
		this.start(homeClass);
		
    return (
    
      <div>
			<div class="parallax3"></div>
			<div class="parallax-content3">
				<div class="page-header text-center">
						<h1>We Serve Love, Laugh, & Life.</h1>
				</div>
				<div class="text-center titlehome" >
						<h3>SmartToys Co.</h3>
				</div>
			</div>
			<div class="caption text-center">
				<span class="border1" >{ this.state.name }</span>
			</div>
			<div class="parallax4"></div>
			<div class="page-header text-center">
				<h1>What´s New?</h1>
			</div>
			<div id="myCarousel" class="carousel slide marginc" data-ride="carousel">
			  <ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner" role="listbox">
				<div class="item active">
				  <img id="imgHome" class="first-slide" src={'/pic/summer.png'} alt="First slide" />
				  <div class="container">
					<div class="carousel-caption">
					  <h1>Summer is coming!</h1>
					   <p>Sale up to 50% only at our stores for all items + 10% with member card. <br>Grab yours fast!</br></p>
					</div>
				  </div>
				</div>
				<div class="item">
				  <img id="imgHome" class="second-slide" src={'/pic/card.png'} alt="Second slide" />
				  <div class="container">
					<div class="carousel-caption">
					  <h1>Cashback up to 10%</h1>
					  <p>Get your own member card at our store and enjoy the cahsback now! <br>Only IDR 25K registration fee and administration fee, your member card will be valid for the next 5 years.</br></p>
					</div>
				  </div>
				</div>
				<div class="item">
				  <img id="imgHome" class="third-slide" src={'/pic/summer2.png'} alt="Third slide" />
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
				<div class="page-header text-center">
					<h1>Articles</h1>
				</div>
			  <div class="row featurette">
				<div class="col-md-7">
				  <h2 class="featurette-heading">Coming Soon! <span class="pagesub">You'll love it.</span></h2>
				  <p class="lead">3D puzzle is a new way to educate your kids how to puzzle. With 6 different images for each side, your kids would never get bored playing this.</p>
				<div class="buttonhome" data-toggle="modal" data-target="#myModalHome1" role="button"><span class="border">Other new items &raquo;</span></div>
				 </div>
				<div class="col-md-5">
				  <img class="featurette-image img-responsive center-block" src={ '/pic/home1.jpg' } alt="Generic placeholder image"/>
				</div>
			  </div>
			  <hr class="featurette-divider"/>
			  <div class="row featurette text-right">
				<div class="col-md-7 col-md-push-5">
				  <h2 class="featurette-heading">Endorse Time <span class="pagesub">by Gempita Nora</span></h2>
				  <p class="lead">Baby Gempi loves playing with our mini kitchen set aka "Masterchef Junior". Look how happy Gempi is! Just for reminder, don't let your kids eat those toys cause it's not edible. </p>
					<div class="buttonhome" data-toggle="modal" data-target="#myModalHome2" role="button"><span class="border">More endorsements &raquo;</span></div>
				</div>
				<div class="col-md-5 col-md-pull-7">
				  <img class="featurette-image img-responsive center-block img-circle" src={ '/pic/gempi.png' } alt="Generic placeholder image"/>
				</div>
			  </div>
			  <hr class="featurette-divider"/>
			  <div class="row featurette">
				<div class="col-md-7">
				  <h2 class="featurette-heading">Fun Fact<span class="pagesub"> for toddlers.</span></h2>
				  <p class="lead">Between 12 and 24 months your toddler’s cognitive development really starts to blossom, this is when they will start to develop memories, as well as understand symbols, imitate, and play imaginatively.</p>
					<div class="buttonhome" data-toggle="modal" data-target="#myModalHome3" role="button"><span class="border">See more facts &raquo;</span></div>
				</div>
				<div class="col-md-5">
				  <img class="featurette-image img-responsive center-block" src={ '/pic/fact.png' } alt="Generic placeholder image"/>
				</div>
			  </div>
			  <hr class="featurette-divider"/>
			</div>
			
			<div id="myModalHome1" class="modal fade" role="dialog">
			  <div class="modal-dialog modal-dialog1">
			  <button type="button" class="close close1" data-dismiss="modal">&times;</button>
				<div class="modal-content modal-content1 center-block">
				  <div class="modal-body ">
					<div id="myCarousel2" class="carousel slide" data-ride="carousel">
						  <ol class="carousel-indicators">
							<li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel2" data-slide-to="1"></li>
							<li data-target="#myCarousel2" data-slide-to="2"></li>
							<li data-target="#myCarousel2" data-slide-to="3"></li>
						  </ol>
						  <div class="carousel-inner" role="listbox">
							<div class="item active">
							  <img class="first-slide" src={'/pic/coming.jpg'} alt="First slide" />
							</div>
							<div class="item">
							  <img class="second-slide" src={'/pic/coming1.jpg'} alt="Second slide" />
							</div>
							<div class="item">
							  <img class="third-slide" src={'/pic/coming2.jpg'} alt="Third slide" />
							</div>
							<div class="item">
							  <img class="fourth-slide" src={'/pic/coming3.jpg'} alt="Second slide" />
							</div>
						  </div>
						  <a class="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						  </a>
						  <a class="right carousel-control" href="#myCarousel2" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						  </a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			
			<div id="myModalHome2" class="modal fade" role="dialog">
			  <div class="modal-dialog modal-dialog1">
			  <button type="button" class="close close1" data-dismiss="modal">&times;</button>
				<div class="modal-content modal-content1 center-block">
				  <div class="modal-body ">
					<div id="myCarousel3" class="carousel slide" data-ride="carousel">
						  <ol class="carousel-indicators">
							<li data-target="#myCarousel3" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel3" data-slide-to="1"></li>
							<li data-target="#myCarousel3" data-slide-to="2"></li>
							<li data-target="#myCarousel3" data-slide-to="3"></li>
						  </ol>
						  <div class="carousel-inner" role="listbox">
							<div class="item active">
							  <img class="first-slide" src={'/pic/endorse.jpg'} alt="First slide" />
							</div>
							<div class="item">
							  <img class="second-slide" src={'/pic/endorse2.jpg'} alt="Second slide" />
							</div>
							<div class="item">
							  <img class="third-slide" src={'/pic/endorse1.jpg'} alt="Third slide" />
							</div>
							<div class="item">
							  <img class="fourth-slide" src={'/pic/endorse3.jpg'} alt="Second slide" />
							</div>
						  </div>
						  <a class="left carousel-control" href="#myCarousel3" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						  </a>
						  <a class="right carousel-control" href="#myCarousel3" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						  </a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			
			<div id="myModalHome3" class="modal fade" role="dialog">
			  <div class="modal-dialog modal-dialog1">
			  <button type="button" class="close close1" data-dismiss="modal">&times;</button>
				<div class="modal-content modal-content1 center-block">
				  <div class="modal-body ">
					<div id="myCarousel4" class="carousel slide" data-ride="carousel">
						  <ol class="carousel-indicators">
							<li data-target="#myCarousel4" data-slide-to="0" class="active"></li>
							<li data-target="#myCarousel4" data-slide-to="1"></li>
							<li data-target="#myCarousel4" data-slide-to="2"></li>
							<li data-target="#myCarousel4" data-slide-to="3"></li>
						  </ol>
						  <div class="carousel-inner" role="listbox">
							<div class="item active">
							  <img class="first-slide" src={'/pic/funfact.jpg'} alt="First slide" />
							</div>
							<div class="item">
							  <img class="second-slide" src={'/pic/funfact1.jpg'} alt="Second slide" />
							</div>
							<div class="item">
							  <img class="third-slide" src={'/pic/funfact2.jpg'} alt="Third slide" />
							</div>
							<div class="item">
							  <img class="fourth-slide" src={'/pic/funfact3.jpg'} alt="Second slide" />
							</div>
						  </div>
						  <a class="left carousel-control" href="#myCarousel4" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						  </a>
						  <a class="right carousel-control" href="#myCarousel4" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						  </a>
					</div>
				  </div>
				</div>
			  </div>
			</div>
      </div>
    );
  }
}
