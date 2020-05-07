import React from 'react';

class Actumeteo extends React.Component{

	render(){
		return(
			<div id="pubox">
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
			</div>
		)
	}

}

export default Actumeteo;