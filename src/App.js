import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import Register from './Register';
import Home from './Home';

class App extends React.Component{

	state = {
		page : 'accueil',
		connectedUser : undefined,
    token : undefined,
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

			}
		});
	}

	fetchData(url){
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
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
					<Register action={this.showLoginForm}/>
					<Logo/>
				</div>
			)
		}
		if(this.state.page === 'accueil')
			return <Home/>	
	}

}


export default App;
