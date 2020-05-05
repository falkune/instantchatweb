import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Singlemessage from './Singlemessage';

class Messagebox extends React.Component{

	state = {
		message : ''
	}

	handleSubmit =event => {
		event.preventDefault();
		let url = 'http://instantchat.com/api/send/'+this.props.connectedUser+'/'+this.props.interlocutor+'/'+this.state.message+'/'+this.props.token;
		this.fetchData(url)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					message : ''
				});
			}
		})
	}

	handleMessage = event => {
		this.setState({
			message : event.currentTarget.value
		});
	}

	render(){
		return (
			<Modal.Dialog id="modal-dialog">
			  <Modal.Header  id="modal-header" closeButton>
			  	{this.props.userName}
			  </Modal.Header>
			  {this.props.messages}
			  <Modal.Footer id="modal-footer">
			    <Form id="messagetype" onSubmit={this.handleSubmit}>
						<textarea 
							id="form-control" 
							className="form-control type_msg" 
							placeholder="Type your message..."
							onChange={this.handleMessage}
						/>
						<div className="input-group-append">
							<span className="input-group-text send_btn">
								<Button 
									variant="primary" 
									type="submit" 
									id="envoyer"
									>
								<i className="fas fa-location-arrow"></i>
								</Button>
							</span>
						</div>
			    </Form>
			  </Modal.Footer>
			</Modal.Dialog>
		)
	}

}

export default Messagebox;