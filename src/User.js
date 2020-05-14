import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './Function';
import Singlemessage from './Singlemessage';
import Singlemessage from './Singlemessage';
// import Messagebox from './Messagebox';

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
				ReactDOM.render(
					<Singlemessage
						connectedUser={this.props.connectedUser}
						interlocutor={this.props.user}
						userName={this.props.userName}
						token={this.props.token}
						messages={this.state.messages}
					/>,
					document.getElementById('fil-discution')
				);
			}
		})
	}

	render(){
		return(
			<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
				<div className="img_cont">
					<div id="name">
						{this.props.userName}
					</div>
				</div>
			</div>
		)
	}
}

export default User;