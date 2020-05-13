import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Register extends React.Component{
	render(){
		return(
			<Form className="alert" id="registerform">
        
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="btn-toolbar alert-link">Full Name :</Form.Label>
          <Form.Control 
            placeholder="Enter your full name" 
            type="text" 
            // onChange={this.handleNameChange}
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="btn-toolbar alert-link">Email address :</Form.Label>
          <Form.Control 
            placeholder="Enter email" 
            type="email" 
            // onChange={this.handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="btn-toolbar alert-link">Password :</Form.Label>
          <Form.Control 
            placeholder="Password" 
            type="password" 
            // onChange={this.handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="btn-toolbar alert-link">Confirm Password :</Form.Label>
          <Form.Control  
            placeholder="Password" 
            type="password"
            // onChange={this.handlePasswordRepeatChange}
          />
        </Form.Group>

        <div id="passwordError">
          
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <h5>
        	<a href="#login" onClick={this.props.action}>Creer un compte</a>
        </h5>
      </Form>
		)
	}
}

export default Register;