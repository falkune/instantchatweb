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
		const url = 'https://prevision-meteo.ch/services/json/paris';
		this.fetchData(url)
		.then(data => {
			return data;
		})
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

	render(){
		console.log(this.getMeteo);
		return(
			<Jumbotron id="jumbotron">
				<p>
					{this.state.meteo}
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}
}

export default Actumeteo;