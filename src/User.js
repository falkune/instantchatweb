import React from 'react';
import fetchData from './Function';

class User extends React.Component{

	state = {
		messages : undefined
	}

	getDiscution = () =>{
		const URL = 'http://instantchat.com/api/show/'+connectedUser+'/'+interlocutor+'/'+token;

		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					messages : data.data
				});
				console.log(this.state.messages);
			}
			else{
				console.log('so bad!')
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