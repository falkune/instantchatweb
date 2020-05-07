import React from 'react';

class Actumeteo extends React.Component{

	componentDidMount(){

	}

	getMeteo(){
		const url = 'https://www.prevision-meteo.ch/services/json/paris';
		this.fetchData(url)
		.then(data => {
			let day = data.fcst_day_0.hourly_data;
			return day;
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
				<h1>{this.getMeteo.CONDITION}</h1>
				<p>
					{this.getMeteo.ICON}
				</p>
				<p>

				</p>
			</Jumbotron>
		)
	}
}

export default Actumeteo;