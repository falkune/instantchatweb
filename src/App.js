import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import fetchData from './Function'

class App extends React.Component{

	state = {
		page : 'login', // control the screen 
		connectedUser : undefined, // the user who is connected
		connectedUsers : undefined, // all connected users at this moment
    token : undefined, // token of connected user
    users : undefined, // all users of the plateform
    name : undefined // name of the the user who is connected
	}

	// this function get all connected user.
	reloadUser = () => {
		const URL = 'http://instantchat.com/Api/connected/'+this.state.connectedUser+'/'+this.state.token;
		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					connectedUsers : data.data
				});
			}
		})
		// mise à jour des utilisateur toute les 5 minutes.
		setTimeout(this.reloadUser, 300000); 
	}

	// show registerForm 
	showRegisterForm = () => {
		this.setState({
			page : 'register'
		});
	}
	// show loginForm
	showLoginForm = () => {
		this.setState({
			page : 'login'
		});
	}

	// this function get user to connect in the plateform
	getConnected = (login, password) => {
		const URL = 'http://instantchat.com/Api/login/'+login+'/'+password;
		fetchData(URL)
		.then(data => {
			if(data.status === 'ok' || data.status === 'active'){

				let id = data.id;
        let token = data.token;
        let name = data.name;

        this.getAllUsers(id, token, name);
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

	// this function get all user of the plateforme
	getAllUsers = (id, token, name) => {
		const URL = 'http://instantchat.com/Api/Users/'+id+'/'+token;

		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.getConnectedUser(id, token);

				this.setState({
					connectedUser : id,
					token : token,
					name : name,
					users : data.data,
					page : 'accueil'
				}, () => {
					this.reloadUser();
				})
			}
		})
	}

	getConnectedUser = (id, token) => {
		const URL = 'http://instantchat.com/Api/connected/'+id+'/'+token;
		fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.setState({
					connectedUsers : data.data
				});
			}
		})
	}

  getRegistred = (name, email, password) => {
  	const URL = 'http://instantchat.com/Api/register/'+name+'/'+email+'/'+password;
    fetchData(URL)
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

  getOut = () => {
  	const URL = 'http://instantchat.com/api/logout/'+this.state.connectedUser+'/'+this.state.token;
    fetchData(URL)
    .then(data => {
      if(data.status === 'ok'){
        this.setState({
          connectedUser : undefined,
          token : undefined,
          page : 'login'
        });
      }
    })
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
		else if(this.state.page === 'register'){
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
		else if(this.state.page === 'accueil' & this.state.connectedUsers !== undefined){
			return(
				<div id="container">
					<Home 
						user={this.state.connectedUser}
						token={this.state.token}
						name={this.state.name}
						users={this.state.users}
						logout={this.getOut}
						online={this.state.connectedUsers}
					/>	
				</div>
			)
		}
		else{
			return <div className="loader"></div>
		}
	}
}


export default App;
