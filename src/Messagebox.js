import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Messagebox extends React.Component{

	render(){
		return (
			<Modal.Dialog>
			  <Modal.Header  id="modal-header" closeButton>
			    <Modal.Title>Modal title</Modal.Title>
			  </Modal.Header>

			  <Modal.Body id="modal-body">
			    <p>Modal body text goes here.</p>
			  </Modal.Body>

			  <Modal.Footer id="modal-footer">
			    <Form id="messagetype">
			    	<Form.Control as="textarea" rows="2" />
			    	<span>
			    		
			    	</span>
			    </Form>
			  </Modal.Footer>
			</Modal.Dialog>
		)
	}

}

export default Messagebox;