import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';

class Home extends React.Component{

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
						<li>
				<div class="d-flex bd-highlight" id="him">
					<div class="img_cont">
						<span class="online_icon"></span>
					</div>
					<div class="user_info">
						<span>Khalid</span>
						<p>Kalid is online</p>
					</div>
				</div>
			</li>
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