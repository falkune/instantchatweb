import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Registerform extends React.Component{

  state = {
    name    : "",
    email   : "",
    passwd  : "",
    passwd1 : ""
  }

  handleNameChange = event => {
    this.setState({
      name : event.currentTarget.value
    });
  }

  handleEmailChange = event => {
    this.setState({
      email : event.currentTarget.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      passwd : event.currentTarget.value
    });
  }

  handlePassword1Change = event => {
    this.setState({
      passwd1 : event.currentTarget.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getUserRegistred();
    this.props.action(2);
  }

  async getUserConnected(){

    const URL = 'http://instantchat.com/Api/login/'+this.state.email+'/'+this.state.passwd;
      const response = await fetch(URL);
      const data = await response.json();    
      const id = data.id;
      const token = data.token;

      alert('identifiant : '+id+' token : '+token);
  }

  async getUserRegistred(){

    if(this.state.passwd !== this.state.passwd1){
      const TEXT = document.createElement("span");
      var content = document.createTextNode('The two password are not correspond !');
      TEXT.appendChild(content);
      document.getElementById('passwordError').appendChild(TEXT);
    }
    else{
      const URL = 'http://instantchat.com/Api/register/'+this.state.name+'/'+this.state.email+'/'+this.state.passwd;
      const response = await fetch(URL);
      const data = await response.json();
      // console.log(data.status);
      if(data.status === "ok"){
        this.getUserRegistred();
      }
      else{
        const TEXT = document.createElement("span");
        var content = document.createTextNode('This email is allready exist get connected...');
        TEXT.appendChild(content);
        document.getElementById('passwordError').appendChild(TEXT);
      }
    }

  }

  render(){
    return(
      <Form className="alert" id="registerform" onSubmit={this.handleSubmit}>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="btn-toolbar alert-link">Full Name :</Form.Label>
          <Form.Control 
            placeholder="Enter your full name" 
            type="text" 
            onChange={this.handleNameChange}
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="btn-toolbar alert-link">Email address :</Form.Label>
          <Form.Control 
            placeholder="Enter email" 
            type="email" 
            onChange={this.handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="btn-toolbar alert-link">Password :</Form.Label>
          <Form.Control 
            placeholder="Password" 
            type="password" 
            onChange={this.handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="btn-toolbar alert-link">Confirm Password :</Form.Label>
          <Form.Control  
            placeholder="Password" 
            type="password"
            onChange={this.handlePassword1Change}
          />
        </Form.Group>

        <div id="passwordError">
          
        </div>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
    );
  }
}

export default Registerform;