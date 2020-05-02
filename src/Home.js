import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Userlist from './Userlist';

class Home extends React.Component{

	constructor(props){
		super(props);
		this.listUser = "";
	}

	fetchData(url){
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	componentDidMount(){
		const URL = 'http://instantchat.com/api/Users/'+this.props.userId+'/'+this.props.token;
		this.fetchData(URL)
		.then(data => {
			if(data.status === 'ok'){
				this.listUser = data.data;
			}
		})
	}

	render(){
		return(
			<div id="homeContainer">
				<aside id="users">
					<div class="card-header">
						<div class="input-group">
							<input type="text" placeholder="Search..." name="" class="form-control search"/>
							<div class="input-group-prepend">
								<span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div class="card-body contacts_body" id="theUsers">
						{
							this.listUser.map((id, nom) => <Userlist userId={id} userName={nom}/>)
						}
					</div>
				</aside>

				<main id="actualite">
					
				</main>

				<aside id="pub">
					
				</aside>
			</div>
		);
	}
}

export default Home;