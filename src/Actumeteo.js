import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Actumeteo extends React.Component{	

	render(){
		console.log(this.props.meteo['city_info'])
		return(
			<Jumbotron id="jumbotron">
				<h1></h1>
				<p>
					
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}

}

export default Actumeteo;