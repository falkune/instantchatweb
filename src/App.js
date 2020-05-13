import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import Register from './Register';

class App extends React.Component{

	state = {
		page : 'login',
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
					<Register />
					<Logo/>
				</div>
			)
		}
		


	}

}


export default App;
