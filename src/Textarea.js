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
				<textarea
					rows="1"
					id="form-control" 
					className="form-control type_msg" 
					placeholder="Type your message..."
					onChange={this.handleMessage}
				/>
				<span className="input-group-text" id="send_btn">
					<Button type="submit" id="btn">
						<i className="fas fa-location-arrow"></i>
					</Button>
					
				</span>
	    </Form>
		)
	}
}

export default Textarea;