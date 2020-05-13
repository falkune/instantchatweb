import React from 'react';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import getConnected, {userInfo} from './Function';

class App extends React.Component{

	state = {
		page : userInfo.page,
		connectedUser : userInfo.connectedUser,
    token : userInfo.token
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

	// getConnected = (login, password) => {
	// 	const URL = 'http://instantchat.com/Api/login/'+login+'/'+password;
	// 	this.fetchData(URL)
	// 	.then(data => {
	// 		if(data.status === 'ok' || data.status === 'active'){
	// 			this.setState({
	// 				connectedUser : data.id,
	// 				token : data.token,
	// 				name : data.name,
	// 				page : 'accueil'
	// 			});
	// 		}
	// 		else{
 //        if(data.message === "the email is not correct"){
 //          const TEXT = document.createElement("span");
 //          let content = document.createTextNode('This email is no exist get regisred...');
 //          TEXT.appendChild(content);
 //          document.getElementById('passwordError').appendChild(TEXT);
 //        }
 //        else{
 //          const TEXT = document.createElement("span");
 //          let content = document.createTextNode('the passwor is not correct...');
 //          TEXT.appendChild(content);
 //          document.getElementById('passwordError').appendChild(TEXT);
 //        }
 //      }
	// 	});
	// }

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
						getConnected={getConnected}
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
		if(this.state.page === 'accueil'){
			return(
				<div>
					<Logo/>
					<Home />	
				</div>
			)
		}
	}

}


export default App;
