import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Actumeteo extends React.Component{	

	render(){
		return(
			<Jumbotron id="jumbotron">
				<h1>{this.props.meteo.city_info.name}</h1>
				<div id="journee">
					<div>
						<h5>sunrise</h5>
						<span>{this.props.meteo.city_info.sunrise}</span>
					</div>
						
					<div>
						<h5>sunset</h5>
						<span>{this.props.meteo.city_info.sunset}</span>
					</div>
				</div>
				<div>
					<div>
						<img src={this.props.meteo.current_condition.icon} alt=""/>
					</div>
					<strong>{this.props.meteo.current_condition.tmp} °C</strong>
				</div>
			</Jumbotron>
		)
	}

}

export default Actumeteo;