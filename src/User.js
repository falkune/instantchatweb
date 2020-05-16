import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './Function';
import Singlemessage from './Singlemessage';

class User extends React.Component{

	state = {
		messages : undefined
	}

	getDiscution = () =>{
		const URL = 'http://instantchat.com/api/show/'+this.props.connectedUser+'/'+this.props.user+'/'+this.props.token;

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
	}

	render(){
		if(this.props.connectedUser.online.find(element => element === this.props.connectedUser)){
			return(
				<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
					<div className="img_cont">
						<div id="online">
							
						</div>
						<div id="name">
							{this.props.userName}
						</div>
					</div>
				</div>
			)
		}
		else{
			return(
				<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
					<div className="img_cont">
						<div id="ofline">
							
						</div>
						<div id="name">
							{this.props.userName}
						</div>
					</div>
				</div>
			)
		}
	}
}

export default User;