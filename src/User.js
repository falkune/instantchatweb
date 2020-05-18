import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './Function';
import Singlemessage from './Singlemessage';

class User extends React.Component{

	state = {
		messages : undefined
	}

	getDiscution = () =>{
		const URL = 'http://instantchat.com/api/show/'+this.props.connectedUser+'/'+this.state.interlocutor+'/'+this.props.token;

		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					messages : data.data
				});
				
				this.props.setIntelocutor(this.props.user, this.props.userName);

				if(this.state.messages.length !== 0){
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
					);
				}
				else{
					ReactDOM.render(
						<div/>,document.getElementById('fil-discution')
					);
				}
			}
		})
		setTimeout(this.getDiscution, 2000);
	} 


	render(){
		if(this.props.online.find(element => element.connected_user === this.props.user)){
			return(
				<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
					<span className="online"/>
					<span className="name">
						{this.props.userName}
					</span>
				</div>
			)
		}
		else{
			return(
				<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
					<span className="ofline"/>
					<span className="name">
						{this.props.userName}
					</span>
				</div>
			)
		}
	}
}

export default User;