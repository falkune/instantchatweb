import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Actumeteo extends React.Component{	

	render(){
		return(
			<Jumbotron id="jumbotron">
				<h1>{this.props.meteo.city_info.name}</h1>
				<p>
					
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}

}

export default Actumeteo;