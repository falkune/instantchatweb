import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import User from './User';

class Home extends React.Component{

	state = {
		messages : []
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
											connectedUser={this.props.user}
											user={user['user_id']}
											token={this.props.token} 
											userName={user['user_name']}
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

						<div className="card-body" id="fil-discution">
							{
								if(this.state.messages.length === 0){
									
								}
							}
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