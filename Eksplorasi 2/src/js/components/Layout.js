import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state={
			title: "Type your title!",
			name: "Welcome!",
		};
	}
	
	changeTitle(title){
		this.setState({title});
	}
	
	render(){
		setTimeout(() => {
			this.setState({name: "Welcome to Eksplorasi #2!"});
		}, 2000);
		
		return (
			<div>
				<h3>{this.state.name}</h3>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
				<Footer/>
			</div>
		);
	}
}
