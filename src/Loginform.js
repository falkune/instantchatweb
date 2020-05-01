import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Loginform extends React.Component{

  state = {
    email   : "",
    passwd  : ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getUserConnected();
    this.props.action(2);
  }

  getUserConnected = () => {

  }

  render(){

    return(
      <Form className="alert" id="loginform">
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="btn-toolbar alert-link">Email address :</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="btn-toolbar alert-link">Password :</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se souvenir de moi" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    );

  }

}

export default Loginform;