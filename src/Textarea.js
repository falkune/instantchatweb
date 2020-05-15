import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
			}
		});
	}

	render(){
		return(
			<Form id="messagetype" onSubmit={this.handleSubmit}>
				<div class="input-group">
					<div class="input-group-append">
						<span class="input-group-text attach_btn">
							<i class="fas fa-paperclip"></i>
						</span>
					</div>

					<textarea 
						name="" 
						class="form-control type_msg" 
						placeholder="Type your message..."
						onChange={this.handleMessage}
					/>

					<div class="input-group-append">
						<span class="input-group-text send_btn">
							<i class="fas fa-location-arrow"></i>
						</span>
					</div>
				</div>
	    </Form>
		)
	}
}

export default Textarea;