import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Actumeteo extends React.Component{

	state = {
		meteo : "helo"
	}

	componentDidMount(){
		this.getMeteo();
	}

	getMeteo(){
		const url = 'https://www.prevision-meteo.ch/services/json/paris';
		this.fetchData(url)
		.then(data => {
			this.setState({
				meteo : data.fcst_day_0.hourly_data
			});
		})
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

	render(){
		console.log(this.state.meteo);
		return(
			<Jumbotron id="jumbotron">
				<p>
					
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}
}

export default Actumeteo;