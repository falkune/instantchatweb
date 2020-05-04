import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Messagebox extends React.Component{

	state = {
		message : '',
		discution : undefined
	}

	getDiscution = () => {
		const URL = 'instantchat.com://api/show/'+this.props.connectedUser+'/'+this.props.interlocutor+'/'+this.props.token;
		this.fetchData(URL)
		.then(data => {
			
		})
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

	handleMessage = event => {
		this.setState({
			message : event.currentTarget.value
		});
	}

	sendMessage =event =>{

	}

	render(){
		return (
			<Modal.Dialog id="modal-dialog">
			  <Modal.Header  id="modal-header" closeButton>

			  </Modal.Header>

			  <Modal.Body id="modal-body">
			    
			  </Modal.Body>

			  <Modal.Footer id="modal-footer">
			    <Form id="messagetype" onSubmit={this.sendMessage}>
			    	<Form.Control as="textarea" rows="2" onChange={this.handleMessage}/>
			    	<div>
			    		<div id="emojibox">
			    			
			    		</div>
			    		<span>
			    			<Button 
			    				variant="primary" 
			    				type="submit" 
			    				id="envoyer"
			    			/>
			    		</span>
			    	</div>
			    </Form>
			  </Modal.Footer>
			</Modal.Dialog>
		)
	}

}

export default Messagebox;