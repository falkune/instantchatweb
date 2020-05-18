import React from 'react';

class User extends React.Component{

	getDiscution = () =>{
		this.props.setIntelocutor(this.props.user, this.props.userName);
	} 

	render(){
		if(this.props.online.find(element => element.connected_user === this.props.user)){
			return(
				<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
					<span className="online"/>
					<span className="name">
						{this.props.userName}
					</span>
				</div>
			)
		}
		else{
			return(
				<div className="d-flex bd-highlight" id="him" onClick={this.getDiscution}>
					<span className="ofline"/>
					<span className="name">
						{this.props.userName}
					</span>
				</div>
			)
		}
	}
}

export default User;