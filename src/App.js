import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';

class App extends React.Component{

	state = {
		connectedUser : undefined,
    token : undefined,
	}

	render(){

		if(this.state.connectedUser === undefined){
			return(
				<div id="">
					<Loginform/>
					<Logo/>
				</div>
			)
		}

	}

}


export default App;
