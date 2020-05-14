import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './Function';

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