import React from "react";

export default class About extends React.Component {
  render() {
    console.log("about");
    return (
    <div>
		<img src={'/pic/smartoys.jpg'} alt="boohoo" className="img-responsive" />
		<div class="text-center">
		  <h1>SmartToys Co.<br></br></h1>
		  <h4><br></br>SmartToys Company is one of the most profitable toy companies in Indonesia. Originally founded in Bandung, West Java, the business was reincarnated as an Indonesian firm in 2004. Since that time, SmartToys has focused strongly on creating educational toys. By the mid-2009s, educational toys and playsets generated about 50 percent of SmartToys' annual sales. In addition to its core educational toys, SmartToys made some additions to their collections with some basic toys. This company was found by Scarlett Johansson and remain hers until this very day.</h4>
		  <h4><br><br></br></br>Contact Us:</h4>
		  <p>smarttoys@hotmail.com 
			<br> +6221-1234567
			<br> @smarttoys.co
			</br></br>
		  </p>
		</div>
    </div>
    );
  }
}
