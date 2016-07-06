import React from "react";

export default class About extends React.Component {
  render() {
    console.log("about");
    return (
    <div>
    <img src={'http://benchmark.us/wp-content/uploads/2013/12/best-selling-toys-on-amazon.com-for-christmas-2013.jpg'} alt="boohoo" className="img-responsive" />
	   <div class="text-center">
		  <h1>SmartToys Co.</h1>
		  <p>blablablablablabla</p>
		</div>
     </div>
    );
  }
}
