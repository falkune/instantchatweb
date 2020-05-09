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

	componentDidMount(){
		this.forceScroll();
	}

	handleSubmit =event => {
		event.preventDefault();
		let url = 'http://instantchat.com/api/send/'+this.props.connectedUser+'/'+this.props.interlocutor+'/'+this.state.message+'/'+this.props.token;
		this.fetchData(url)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					message : '',
					key : 0
				});
			}
		})
	}

	handleMessage = event => {
		this.setState({
			message : event.currentTarget.value
		});
	}

	showMessages = (data) => {
		return(
			let i=0;
			<Modal.Body id="modal-body">
			{
				data.map(msg => 
					<Singlemessage
						key={i}
						connectedUser={this.props.connectedUser}
						user={msg['transmitter']}
						content={msg['message']}
					/>
					i++;
				)
			}
			</Modal.Body>
		)
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  forceScroll(){
  	const parent = document.getElementById('modal-body');
  	if(parent != undefined){
  		parent.scrollTop = document.getElementById('modal-body').scrollHeight;
  	}
	}


	render(){
		if(this.props.messages.length === 0){
			return (
				<Modal.Dialog id="modal-dialog">
				  <Modal.Header  id="modal-header" closeButton>
				  	{this.props.userName}
				  </Modal.Header>
				  

				  <Modal.Footer id="modal-footer">
				    <Form id="messagetype" onSubmit={this.handleSubmit}>
							<textarea 
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
				  </Modal.Footer>
				</Modal.Dialog>
			)
		}else{
			return (
				<Modal.Dialog id="modal-dialog">
				  <Modal.Header  id="modal-header" closeButton>
				  	{this.props.userName}
				  </Modal.Header>

				  {this.showMessages(this.props.messages)}
					
				  <Modal.Footer id="modal-footer">
				    <Form id="messagetype" onSubmit={this.handleSubmit}>
							<textarea 
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
				  </Modal.Footer>
				</Modal.Dialog>
			)
		}
	}
}

export default Messagebox;