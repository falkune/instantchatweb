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
				meteo : data
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
					<h1>{this.state.meteo.city_info.name}</h1>
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}
}

export default Actumeteo;