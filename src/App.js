import React from 'react';
import './App.css';
import Logo from './Logo';
import Loginform from './Loginform';

class App extends React.Component{

	state = {
		connectedUser : undefined,
    token : undefined,
	}

	render(){

		if(connectedUser === undefined){
			return(
				<div>
					<Loginform/>
					<Logo/>
				</div>
			)
		}

	}

}


export default App;
