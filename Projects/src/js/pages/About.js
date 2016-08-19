import React from "react";
import { Link } from "react-router";

export default class About extends React.Component {
  render() {
    console.log("about");
    return (
    <div>
		<div class="text-center">
			<div class="caption">
				<span class="border" >SmartToys Co.</span>
			</div>
			<div class="parallax"></div>
				<div class="parallax-content">
					<h4 class="big">SmartToys Company is one of the most profitable toy companies in Indonesia. Originally founded in Bandung, West Java, the business was reincarnated as an Indonesian firm in 2004. Since that time, SmartToys has focused strongly on creating educational toys. By the mid-2009s, educational toys and playsets generated about 50 percent of SmartToys' annual sales. In addition to its core educational toys, SmartToys made some additions to their collections with some basic toys. This company was found by Scarlett Johansson and remain hers until this very day.</h4>
				</div>
			<div class="parallax2"></div>
				<div class="parallax-content1">
					<div class="text-center">
						<div class="row">
							<div class="chip">
							  <img src={'http://cdn.mysitemyway.com/icons-watermarks/flat-circle-white-on-yellow/broccolidry/broccolidry_email/broccolidry_email_flat-circle-white-on-yellow_512x512.png'} alt="Person" width="96" height="96"/>
							  smarttoys@hotmail.com 
						  </div> <br></br>
						  <div class="chip">
							  <img src={'http://cdn.mysitemyway.com/icons-watermarks/flat-circle-white-on-yellow/bfa/bfa_phone/bfa_phone_flat-circle-white-on-yellow_512x512.png'} alt="Person" width="96" height="96"/>
							  +6221-1234567 
						  </div><br></br>
						  <div class="chip">
							  <img src={'data:image/png;base64,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'} alt="Person" width="96" height="96"/>
							  @smarttoys.co
						  </div><br></br>
						  <div class="buttonhome babt" data-toggle="modal" data-target="#myModal1" role="button"><span class="border">Or drop a note &raquo;</span></div>
						</div>
					</div>
				</div>
			  </div>
			<div class="caption1">
				<span class="border" >Contact Us:</span>
			</div>
			<div id="myModal1" class="modal fade" role="dialog">
				<div class="modal-dialog">
				  <button type="button" class="close close1" data-dismiss="modal">&times;</button>
					<div class="modal-content">
						<div class="modal-header">
							<h4> Drop a note</h4>
						</div>
						  <div class="modal-body text-left">
							<form role="form">
							  <div class="form-group">
								<label for="psw"><span class="glyphicon glyphicon-envelope"></span> Email:</label>
								<input type="email" class="form-control" id="psw" placeholder="Enter Email Address"/>
							  </div>
							  <div class="form-group">
								<label for="usrname"><span class="glyphicon glyphicon-pencil"></span> Comment</label>
								<input type="text" class="form-control" id="usrname" placeholder="Add Comments"/>
							  </div>
							  <button type="submit" class="btn btn-block"  data-dismiss="modal"><span class="glyphicon glyphicon-send"></span> Send! 
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}
