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

	getConnected = () => {
		
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
