import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Loginform extends React.Component{

  state = {
    email   : "",
    password  : ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getUserConnected();
    this.props.action(2);
  }


  fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  getUserConnected = () => {
    const URL = 'http://instantchat.com/login/'+this.state.email+'/'+this.state.password;
  }

  handleEmail = () => {

  }

  handlePassword = () => {
    
  }

  render(){

    return(
      <Form className="alert" id="loginform">
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

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se souvenir de moi"/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    );

  }

}

export default Loginform;