import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component{

  state = {
    login : undefined,
    password : undefined
  }

  handleEmail = (event) => {
    this.setState({
      login : event.currentTarget.value
    });
  }

  handlePassword = (event) => {
    this.setState({
      password : event.currentTarget.value
    });
  }

  handleSubmit = event => {
    e.preventDefault();
    this.props.getConnected(this.state.login, this.state.password)
  }

	render(){
		return(
			<Form 
        className="alert" 
        id="loginform" 
        onSubmit={this.handleSubmit}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="btn-toolbar alert-link">Email address :</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            onChange={this.handleEmail}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="btn-toolbar alert-link">Password :</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            onChange={this.handlePassword}
          />
        </Form.Group>

        <div id="passwordError">
          
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <h5>
        	<a href="#register" onClick={this.props.registerForm}>Creer un compte</a>
        </h5>
      </Form>
		)
	}
}

export default Login;