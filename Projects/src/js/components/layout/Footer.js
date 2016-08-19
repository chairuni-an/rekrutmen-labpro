import React from "react";


export default class Footer extends React.Component {
  render() {
	  const containerStyle = {
		marginTop: "30px"
    };
    return (
		<footer class="footer">
			<div class="text-center">
			  <i class="fa fa-facebook-official" ></i>
			  <i class="fa fa-pinterest-p"></i>
			  <i class="fa fa-twitter"></i>
			  <i class="fa fa-flickr"></i>
			  <i class="fa fa-linkedin"></i>
			  <img id="imgAbout" src={'/pic/smarttoys.png'} alt="boohoo" className="img-responsive center-block" />
			  <p><small>Copyright &copy; SmartToys Co.<br>All Rights Reserved.</br></small></p>
			</div>
		</footer>
      
    );
  }
}
