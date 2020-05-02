import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Navlink from './Navlink';
import Loginform from './Loginform';
import Registerform from './Registerform';
import Welcom fron './Welcom';

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      connectedUser : undefined,
      token : undefined
    }
  }

  login =() =>{
    ReactDOM.render(
      <Loginform action={this.handleConnectedUser}/>,
      document.getElementById('container')
    );
  }

  register = () =>{
    ReactDOM.render(
      <Registerform action={this.handleConnectedUser}/>,
      document.getElementById('container')
    );
  }

  fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  logout = () =>{
    const URL = 'http://instantchat.com/api/logout/'+this.state.connectedUser+'/'+this.state.token;
    this.fetchData(URL)
    .then(data => {
      if(data.status === 'ok'){
        this.setState({
          connectedUser : undefined,
          token : undefined
        });

      }
    })
  }

  addLink(statut){
    if(statut === undefined){
      return(
        <Nav id="link">
          <Navlink value="Login" onClick={this.login} />
          <Navlink value="Register" onClick={this.register} />
        </Nav>
      )
    }
    else{
      return(
        <Nav id="link">
          <Navlink value="Logout" onClick={this.logout} />
        </Nav>
      )
    }
  }

  handleConnectedUser = (id, token) =>{
    this.setState({
      connectedUser : id,
      token : token
    })
  }

  render(){
    // console.log(this.props.user);
    return(
      <header>
        <Navbar id="navbar_bi" bg="info">
          <Navbar.Brand href="#">Brand link</Navbar.Brand>
          {this.addLink(this.state.connectedUser)}
        </Navbar>
      </header>
    );

  }

}

export default Header;