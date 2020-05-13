import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Textarea extends React.Component{
	render(){
		return(
			<Form id="messagetype">
				<textarea 
					id="form-control" 
					className="form-control type_msg" 
					placeholder="Type your message..."
					// onChange={this.handleMessage}
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