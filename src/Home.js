import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';

class Home extends React.Component{

	render(){
		const data = this.props.users;
		const nameliste = data.map(name => {
			console.log(name);
		})
		return(
			<div id="homeContainer">
				<aside id="users">
					<div className="card-header">
						<div className="input-group">
							<input type="text" placeholder="Search..." name="" className="form-control search"/>
							<div className="input-group-prepend">
								<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div className="card-body contacts_body">

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