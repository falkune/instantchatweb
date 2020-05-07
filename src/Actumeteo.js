import React from 'react';

class Actumeteo extends React.Component{

	ComponentDidMount(){

	}

	getMeteo(){
		
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