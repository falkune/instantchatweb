import React from 'react';

class Actumeteo extends React.Component{

	ComponentDidMount(){

	}

	getMeteo(){
		const url = 'https://www.prevision-meteo.ch/services/json/paris';
		this.fetchData(url)
			.then(data => {
				let day = data.fcst_day_0.hourly_data.0H00;
			})
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

	render(){
		return(
			<Jumbotron id="jumbotron">
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for calling
					extra attention to featured content or information.
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}
}

export default Actumeteo;