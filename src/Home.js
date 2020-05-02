import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';

class Home extends React.Component{

	state = {
		id : undefined,
		token : undefined
	}

	componentDidMount(){
		this.setState({
			id : this.props.userId,
			token : this.props.token
		})
	}

	render(){
		return(
			<div id="homeContainer">
				<aside id="users">
					<div class="card-header">
						<div class="input-group">
							<input type="text" placeholder="Search..." name="" class="form-control search"/>
							<div class="input-group-prepend">
								<span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div class="card-body contacts_body" id="theUsers">
						<Userlist />
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