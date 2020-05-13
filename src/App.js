import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import Register from './Register';
import Home from './Home';

class App extends React.Component{

	state = {
		page : 'login',
		connectedUser : undefined,
    token : undefined
	}

	showRegisterForm = () => {
		this.setState({
			page : 'register'
		});
	}

	showLoginForm = () => {
		this.setState({
			page : 'login'
		});
	}

	getConnected = (login, password) => {
		const URL = 'http://instantchat.com/Api/login/'+login+'/'+password;
		this.fetchData(URL)
		.then(data => {
			if(data.status === 'ok' || data.status === 'active'){
				this.setState({
					connectedUser : data.id,
					token : data.token,
					name : data.name,
					page : 'accueil'
				});
			}
			else{
        if(data.message === "the email is not correct"){
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

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  getRegistred = (name, email, password) => {
  	const URL = 'http://instantchat.com/Api/register/'+name+'/'+email+'/'+password;
    this.fetchData(URL)
    .then(data => {
      if(data.status === 'ok'){
        this.getConnected(email, password);
      }
      else{
        const TEXT = document.createElement("span");
        let content = document.createTextNode('This email is allready exist get connected...');
        TEXT.appendChild(content);
        document.getElementById('passwordError').appendChild(TEXT);
      }
    });
  }

	render(){

		if(this.state.page === 'login'){
			return(
				<div id="facade">
					<Login 
						registerForm={this.showRegisterForm}
						getConnected={this.getConnected}
					/>
					<Logo/>
				</div>
			)
		}
		if(this.state.page === 'register'){
			return(
				<div id="facade">
					<Register 
						loginForm={this.showLoginForm}
						getRegistred={this.getRegistred}
					/>
					<Logo/>
				</div>
			)
		}
		if(this.state.page === 'accueil'){
			return(
				<div>
					<Home />	
				</div>
			)
		}
	}

}


export default App;
