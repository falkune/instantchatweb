import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';
import Messagebox from './Messagebox';

class Home extends React.Component{

	showMessage = (interlocutor, connectedUser, userName, token) => {
		console.log(interlocutor+' '+connectedUser+' '+userName)
		ReactDOM.render(
			<Messagebox
				connectedUser={connectedUser}
				interlocutor={interlocutor}
				userName={userName}
				token={token}
			/>,
			document.getElementById('boxmessage')
		);
	}

	render(){
		return(
			<div id="homeContainer">
				<aside id="users">
					<div className="card-body contacts_body" id="userBox">
						{
							this.props.users.map(user => 
								<Userlist 
									key={user['user_id'].toString()} 
									userId={user['user_id']} 
									userName={user['user_name']} 
									onClick={() => this.showMessage(user['user_id'],this.props.connectedUser, user['user_name'], this.props.token)}
								/>
							)
						}
					</div>
					<div id="searchBar">
						<div className="input-group">
							<input 
								type="text" 
								placeholder="Search..." 
								name="" 
								className="form-control search"
							/>
						</div>
					</div>
				</aside>

				<main id="actualite">

					<div id="boxmessage"></div>
					
				</main>

				<aside id="pub">
					
				</aside>
			</div>
		);
	}
}

export default Home;