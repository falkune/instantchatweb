import React from 'react';

class User extends React.Component{

	getdiscution = () => {
		this.props.discustion
	}

	render(){
		return(
			<div className="d-flex bd-highlight" id="him">
				<div className="img_cont">
					<div id="name" onClick={this.getdiscution}>
						{this.props.userName}
					</div>
				</div>
			</div>
		)
	}
}

export default User;