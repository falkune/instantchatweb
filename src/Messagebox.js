import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Singlemessage from './Singlemessage';

class Messagebox extends React.Component{

	state = {
		message : '',
		discution : undefined
	}

	handleMessage = event => {
		this.setState({
			message : event.currentTarget.value
		});
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
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

	render(){
		return (
			<Modal.Dialog id="modal-dialog">
			  <Modal.Header  id="modal-header" closeButton/>
			  
			  <Modal.Footer id="modal-footer">
			    <Form id="messagetype" onSubmit={this.handleSubmit}>
						<textarea 
							id="form-control" 
							class="form-control type_msg" 
							placeholder="Type your message..."
							onChange={this.handleMessage}
						/>
						<div class="input-group-append">
							<span class="input-group-text send_btn">
								<Button 
									variant="primary" 
									type="submit" 
									id="envoyer"
									>
									<i class="fas fa-location-arrow"></i>
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