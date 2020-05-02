import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Home extends React.Component{

	render(){
		return(
			<div id="accueiContainer">
				<aside id="users">
					<div class="card-header">
						<div class="input-group">
							<input type="text" placeholder="Search..." name="" class="form-control search">
							<div class="input-group-prepend">
								
							</div>
						</div>
					</div>
				</aside>

				<main id="actualite">
					
				</main>

				<aside id="pub">
					
				</aside>
			</div>
		);
	}
}

export default Home;