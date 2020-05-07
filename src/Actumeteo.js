import React from 'react';

class Actumeteo extends React.Component{

	ComponentDidMount(){

	}

	getMeteo(){
		const url = 'https://www.prevision-meteo.ch/services/json/paris';
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

	render(){
		return(

		)
	}
}

export default Actumeteo;