import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Home from './Home';

class Loginform extends React.Component{

  state = {
    email   : "",
    password  : "",
    data: undefined
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

        this.props.action(id, token);

        const URL1 = 'http://instantchat.com/Api/Users/'+id+'/'+token;

        this.fetchData(URL1)
        .then(data => {
          if(data.status === 'ok'){
            this.setState({
              data : data.data
            });
            ReactDOM.render(
              <Home 
                users={this.state.data}
                connectedUser={id}
                token={token}
              />,
              document.getElementById('container')
            );
          }
        })
      }
      else{
        const TEXT = document.createElement("span");
        let content = document.createTextNode('This email is no exist get regisred...');
        TEXT.appendChild(content);
        document.getElementById('passwordError').appendChild(TEXT);
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