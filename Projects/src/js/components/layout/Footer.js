import React from "react";


export default class Footer extends React.Component {
  render() {
	  const containerStyle = {
		marginTop: "30px"
    };
    return (
      <footer>
		<div class="container" style={containerStyle}>
			<div class="row">
			  <div class="col-lg-12">
				<div class="text-center">
					<p><small>Copyright &copy; SmartToys Co.</small></p>
					<p><small>All Rights Reserved.</small></p>
				</div>
			  </div>
			</div>
        </div>
      </footer>
    );
  }
}
