import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Actumeteo extends React.Component{	

	render(){
		return(
			<Jumbotron id="jumbotron">
				<h1>{this.props.meteo.city_info.name}</h1>
				<p>
					<div>
						<strong>levée du soleil</strong>
						<span>{this.props.meteo.city_info.sunrise}</span>
					</div>
						<strong>couchée du soleil</strong>
						<span>{this.props.meteo.city_info.sunset}</span>
					<div>
						
					</div>
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}

}

export default Actumeteo;