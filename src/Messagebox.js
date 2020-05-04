import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Singlemessage from './Singlemessage';

class Messagebox extends React.Component{

	state = {
		message : '',
		discution : null
	}
	
	render(){
		return (
			<Modal.Dialog id="modal-dialog">
			  <Modal.Header  id="modal-header" closeButton/>
			  
			  <Modal.Footer id="modal-footer">
			    <Form id="messagetype" onSubmit={this.sendMessage}>
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