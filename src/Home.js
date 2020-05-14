import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import User from './User';
import fetchData from './Function';

class Home extends React.Component{

	state = {
		messages : undefined
	}

	getDiscution = (interlocutor, connectedUser, userName, token) => {
		const URL = 'http://instantchat.com/api/show/'+connectedUser+'/'+interlocutor+'/'+token;

		this.fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					messages : data.data
				});
				console.log(this.state.messages);
			}
		})
	}

	render(){
		return(
			<div id="chat">
				<div className="chat">
					<div id="card" className="card">
						<div className="card-header">
							<Input/>
						</div>

						<div className="card-body" id="card-body">
							<div id="userBox">
								{
									this.props.users.map(user => 
										<User 
											key={user['user_id'].toString()} 
											// userId={user['user_id']} 
											userName={user['user_name']}
											onClick={() => this.getDiscution(user['user_id'],this.props.user, user['user_name'], this.props.token)}
										/>
									)
								}
							</div>
						</div>
					</div>
				</div>

				<div className="chat">
					<div id="card" className="card">
						<div className="card-header">
							<div className="d-flex bd-highlight">
								<div className="user_info">
									<span id="info_user">{this.props.name}</span>
								</div>
							</div>

							<span id="disconected" onClick={this.props.logout}>
								<i className="fas fa-power-off fa-2x "></i>
							</span>
						</div>

						<div className="card-body">
							{/* ici seront injecter les message*/}
						</div>

						<div className="card-footer">
							<Textarea/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;