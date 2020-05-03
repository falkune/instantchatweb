import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Messagebox extends React.Component{

	getDiscution = () => {

	}

	fetchData(){
		
	}

	render(){
		return (
			<Modal.Dialog id="modal-dialog">
			  <Modal.Header  id="modal-header" closeButton>

			  </Modal.Header>

			  <Modal.Body id="modal-body">
			    
			  </Modal.Body>

			  <Modal.Footer id="modal-footer">
			    <Form id="messagetype">
			    	<Form.Control as="textarea" rows="2" />
			    	<span>
			    		<div id="emojibox">
			    			
			    		</div>
			    		<i className="fas fa-arrow-right fa-2x"></i>
			    	</span>
			    </Form>
			  </Modal.Footer>
			</Modal.Dialog>
		)
	}

}

export default Messagebox;