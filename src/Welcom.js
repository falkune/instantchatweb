import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Welcom extends React.Component{

	render(){
		return(
			<div id="welcomContainer">
				<Jumbotron fluid id="welcom">
				  <Container>
				    <h1>Welcom to Instanchat</h1>
				    <p>
				      This is a modified jumbotron that occupies the entire horizontal space of
				      its parent.
				    </p>
				  </Container>
				</Jumbotron>
			</div>
		);
	}

}

export default Welcom;