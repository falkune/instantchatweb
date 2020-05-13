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

	render(){

		if(this.state.page === 'login'){
			return(
				<div id="facade">
					<Login action={this.showRegisterForm}/>
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
		if(this.state.page === 'accueil'){
			return(
				<div id="chat">
					<Home/>
				</div>
			)
		}
		


	}

}


export default App;
