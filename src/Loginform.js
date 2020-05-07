import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from './Home';

class Loginform extends React.Component{

  state = {
    email   : "",
    password  : "",
    data: undefined,
    meteo : undefined
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

        let id = data.id;
        let token = data.token;
        let name = data.name;
        this.props.action(id, token, name);

        const URL1 = 'http://instantchat.com/Api/Users/'+id+'/'+token;

        this.fetchData(URL1)
        .then(data => {
          if(data.status === 'ok'){
            this.setState({
              data : data.data,
              meteo : this.getMeteo()
            });
            ReactDOM.render(
              <Home 
                users={this.state.data}
                connectedUser={id}
                token={token}
                meteo={this.state.meteo}
              />,
              document.getElementById('container')
            );
          }
        })
      }
      else{
        if(data.message == "the email is not correct"){
          const TEXT = document.createElement("span");
          let content = document.createTextNode('This email is no exist get regisred...');
          TEXT.appendChild(content);
          document.getElementById('passwordError').appendChild(TEXT);
        }
        else{
          const TEXT = document.createElement("span");
          let content = document.createTextNode('the passwor is not correct...');
          TEXT.appendChild(content);
          document.getElementById('passwordError').appendChild(TEXT);
        }
      }
    });
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

  getMeteo(){
    const url = 'https://www.prevision-meteo.ch/services/json/paris';
    this.fetchData(url)
    .then(data => {
      return data
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

        <div id="passwordError">
          
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    );

  }

}

export default Loginform;