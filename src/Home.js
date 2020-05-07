import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';
import Messagebox from './Messagebox';
import Pubbox from './Pubbox';
import Actumeteo from './Actumeteo';

class Home extends React.Component{

	state = {
		messages : undefined
	}


	getDiscution = (interlocutor, connectedUser, userName, token) => {

		let url = 'http://instantchat.com/api/show/'+connectedUser+'/'+interlocutor+'/'+token;

		this.fetchData(url)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					messages : data.data
				});
				ReactDOM.render(
					<Messagebox
						connectedUser={connectedUser}
						interlocutor={interlocutor}
						userName={userName}
						token={token}
						messages={this.state.messages}
					/>,
					document.getElementById('boxmessage')
				);

			}
		})

	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
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
									onClick={() => this.getDiscution(user['user_id'],this.props.connectedUser, user['user_name'], this.props.token)}
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

					<Actumeteo/>

					<div id="boxmessage"></div>
					
				</main>

				<aside id="pub">
					<Pubbox/>
				</aside>
			</div>
		);
	}
}

export default Home;