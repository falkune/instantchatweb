import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';

class App extends React.Component{

	state = {
		page : 'login',
		connectedUser : undefined,
    token : undefined,
	}

	render(){

		if(this.state.page === 'login'){
			return(
				<div id="facade">
					<Login/>
					<Logo/>
				</div>
			)
		}

	}

}


export default App;
