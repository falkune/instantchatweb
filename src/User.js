import React from 'react';

class User extends React.Component{
	render(){
		return(
			<div className="d-flex bd-highlight" id="him">
				<div className="img_cont">
					<div id="name" onClick={this.props.discustion}>
						{this.props.userName}
					</div>
				</div>
			</div>
		)
	}
}

export default User;