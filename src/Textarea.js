import React from 'react';
import ReactDOM from 'react-dom';
import fetchData, {EMOJIS} from './Function';
import Modal from 'react-bootstrap/Modal';

class Textarea extends React.Component{

	state = {
		message : '',
		messageValue : '',
		modal : undefined
	}

	handleMessage = (event) => {
		this.setState({
			message : event.currentTarget.value,
		});
	}

	handleSubmit = (event) => {
		if(this.props.interlocutor !== undefined && this.state.message !==''){
			const URL = 'http://instantchat.com/api/send/'+this.props.connectedUser+'/'+this.props.interlocutor+'/'+this.state.message+'/'+this.props.token;
			fetchData(URL)
			.then(data => {
				if(data.status === 'ok'){
					this.setState({
						message : '',
						messageValue : ''
					});
					document.getElementById('saisie').value = '';
				}
			});
		}
		else{
			document.getElementById('saisie').value = 'je ne sais pas à qui l\'envoyer';
		}
	}

	useThisEmoji = (emo) => {
		const champ = document.getElementById('saisie');
		champ.value = champ.value+' '+emo;
		this.setState({
			message : this.state.message + emo
		});
	}

	showemojis = () => {
		ReactDOM.render(
			  <Modal.Body id="Modal">
			    <p>
			    	{
			    		EMOJIS.map(emo =>
			    			<span
			    				className="emo"
			    				key={emo}
			    				onClick={() => this.useThisEmoji(emo)}
			    			>
			    				{emo}
			    			</span>
			    		)
			    	}
			    </p>
			  </Modal.Body>,
			document.getElementById('emojis')
		);
	}

	render(){
		return(
			<div className="input-group">
				<div className="input-group-append">
					<span className="input-group-text emojis_btn" onClick={this.showemojis}>
						<i className="fas fa-smile fa-2x"></i>
					</span>
					<div id="emojis"></div>
				</div>

				<textarea
					id="saisie"
					rows="1" 
					className="form-control type_msg" 
					placeholder="Type your message..."
					onChange={this.handleMessage}
				/>

				<div className="input-group-append" onClick={this.handleSubmit}>
					<span className="input-group-text send_btn">
						<i className="fas fa-location-arrow"></i>
					</span>
				</div>
			</div>
		)
	}
}

export default Textarea;