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
  }


  fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getUserConnected();
  }

  getUserConnected = () => {
    const URL = 'http://instantchat.com/Api/login/'+this.state.email+'/'+this.state.password;
    this.fetchData(URL)
    .then(data => {
      if(data.status === 'ok' || data.status === 'active'){
        this.props.action(data.id, data.token);
        // ReactDOM.Render(
        //   <Accueil>
        // );
      }
    })
  }

  handleEmail = event => {
    this.setState({
      email : event.currentTarget.value
    });
  }

  handlePassword = event => {
    this.setState({
      password : event.currentTarget.value
    });
  }

  render(){

    return(
      <Form className="alert" id="loginform" onSubmit={this.handleSubmit}>
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