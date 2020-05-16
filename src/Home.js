import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import User from './User';

class Home extends React.Component{

	state = {
		interlocutorID : undefined,
		interlocutorName : undefined
	}

	getInterlocutorId =(id, name) => {
		this.setState({
			interlocutorID : id,
			interlocutorName : name
		});
	}

	postMessage = () => {
		if(this.state.interlocutorID === undefined){
			return(
				<Textarea
					connectedUser={this.props.user}
					interlocutor={this.state.interlocutorID}
					token={this.props.token}
				/>
			)
		}
	}

	render(){
		return(
			<div id="chat">
				<div className="chat">
					<div id="card" className="card">
						<div className="cardHheader">
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
											setIntelocutor={this.getInterlocutorId}
											online={this.props.online}
										/>
									)
								}
							</div>
						</div>
						<div className="cardFooter" id="footer">
							<span>
								<i className="fas fa-users fa-2x"></i>
							</span>
						</div>
					</div>
				</div>

				<div className="chat">
					<div id="card" className="card">
						<div className="cardHheader">
							<div className="d-flex bd-highlight">
								<div className="user_info">
									<span id="targetbutton"><i className="fas fa-ellipsis-v"></i></span>
									<span id="info_user">{this.state.interlocutorName}</span>
								</div>
							</div>

							<span id="disconected" onClick={this.props.logout}>
								<i className="fas fa-power-off fa-1x "></i>
							</span>
						</div>

						<div className="card-body" id="fil-discution">
							{/* ici seront injectés les messages */}
						</div>

						<div className="cardFooter">
							<Textarea
								connectedUser={this.props.user}
								interlocutor={this.state.interlocutorID}
								token={this.props.token}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;