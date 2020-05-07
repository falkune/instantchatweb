import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Actumeteo extends React.Component{

	

	render(){
		console.log(this.state.meteo);
		return(
			<Jumbotron id="jumbotron">
				<p>
					<h1></h1>
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}
}

export default Actumeteo;