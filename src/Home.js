import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Textarea from './Textarea';
import User from './User';
import fetchData from './Function';
import Singlemessage from './Singlemessage';

class Home extends React.Component{

	state = {
		interlocutorID : undefined,
		interlocutorName : undefined,
		messages : undefined
	}

	// componentDidMount(){
	// 	this.loadMessages();
	// }

	// componentDidUpdate(){
	// 	this.loadMessages();
	// }

	getInterlocutorId =(id, name) => {
		this.setState({
			interlocutorID : id,
			interlocutorName : name
		});
		if(this.state.interlocutorID !== undefined)
			this.loadMessages();
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

	loadMessages = () => {
		const URL = 'http://instantchat.com/api/show/'+this.props.user+'/'+this.state.interlocutorID+'/'+this.props.token;

		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					messages : data.data
				});
				
				if(this.state.messages.length !== 0){
					return(
						ReactDOM.render(
							<div id="modal-body">
								{
									this.state.messages.map(msg =>
										<Singlemessage
											key={msg['message_id']}
											connectedUser={this.props.connectedUser}
											user={msg['from_user_id']}
											content={msg['message_body']}
											editdate={msg['message_edit_at']}
										/>
									)
								}
							</div>,
							document.getElementById('fil-discution')
						)					
					)
				}
				else{
					return(
						ReactDOM.render(
							<div/>,document.getElementById('fil-discution')
						)
					)
				}
			}
		})
		setTimeout(this.loadMessages, 2000);
	}

	render(){
		return(
			<div id="chat">
				<div className="chat">
					<div id="card" className="card">
						<div className="cardHheader">
							<span>
								<i className="fas fa-home fa-2x"></i>
							</span>
							<strong>
								{this.props.name}
							</strong>
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
							<Input/>
						</div>
					</div>
				</div>

				<div className="chat">
					<div id="card" className="card">
						<div className="cardHheader">
							<div className="d-flex bd-highlight">
								<div className="user_info">
									<span id="targetbutton">
										<i className="fas fa-user"></i>
									</span>
									<span id="info_user">{this.state.interlocutorName}</span>
								</div>
							</div>

							<span id="disconected" onClick={this.props.logout}>
								<i className="fas fa-power-off fa-1x "></i>
							</span>
						</div>

						<div className="card-body" id="fil-discution">
							{this.loadMessages}
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