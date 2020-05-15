import React from 'react';
import fetchData from './Function';

class Textarea extends React.Component{

	state = {
		message : '',
		messageValue : ''
	}

	handleMessage = (e) => {
		this.setState({
			message : e.currentTarget.value,
		});
	}

	handleSubmit = (event) => {
		if(this.props.interlocutor !== undefined){
			const URL = 'http://instantchat.com/api/send/'+this.props.connectedUser+'/'+this.props.interlocutor+'/'+this.state.message+'/'+this.props.token;
			fetchData(URL)
			.then(data => {
				if(data.status === 'ok'){
					this.setState({
						message : '',
						messageValue : ''
					});
				}
			});
		}
		else{

		}
	}

	render(){
		return(
			<div className="input-group">
				<div className="input-group-append">
					<span className="input-group-text attach_btn">
						<i className="fas fa-paperclip"></i>
					</span>
				</div>

				<textarea
					rows="1" 
					className="form-control type_msg" 
					placeholder="Type your message..."
					onChange={this.handleMessage}
				/>

				<div className="input-group-append" onClick={this.handleSubmit}>
					<span className="input-group-text send_btn">
						<a href=""><i className="fas fa-location-arrow"></i></a>
					</span>
				</div>
			</div>
		)
	}
}

export default Textarea;