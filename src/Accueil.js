import React from 'React';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Accueil extends React.Component{

	render(){
		return(
			<div id="accueiContainer">
				<Jumbotron fluid>
				  <Container>
				    <h1>Fluid jumbotron</h1>
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

export default Accueil;