import React from 'react';
import fetchData from './Function';

class Textarea extends React.Component{

	state = {
		message : ''
	}

	handleMessage = (e) => {
		this.setState({
			message : e.currentTarget.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const URL = 'http://instantchat.com/api/send/'+this.props.connectedUser+'/'+this.props.interlocutor+'/'+this.state.message+'/'+this.props.token;
		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					message : ''
				});
				document.getElementsByTagName('textarea').reset();
			}
		});
	}

	render(){
		return(
			<div class="input-group">
				<div class="input-group-append">
					<span class="input-group-text attach_btn">
						<i class="fas fa-paperclip"></i>
					</span>
				</div>

				<textarea
					rows="1" 
					className="form-control type_msg" 
					placeholder="Type your message..."
					onChange={this.handleMessage}
				/>

				<div class="input-group-append" onClick={this.handleSubmit}>
					<span Type="button" class="input-group-text send_btn">
						<i class="fas fa-location-arrow"></i>
					</span>
				</div>
			</div>
		)
	}
}

export default Textarea;