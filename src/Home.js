import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';

class Home extends React.Component{

	showMessage = () => {
		console.log(this.user)
	}

	render(){
		return(
			<div id="homeContainer">
				<aside id="users">
					<div className="card-body contacts_body" id="userBox">
						{
							this.props.users.map(user => 
								<Userlist key={user['user_id'].toString()} userId={user['user_id']} userName={user['user_name']} onClick={() => this.showMessage(user['user_id'])}/>
							)
						}
					</div>
					<div id="searchBar">
						<div className="input-group">
							<input type="text" placeholder="Search..." name="" className="form-control search"/>
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