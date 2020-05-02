import React from 'react';

class Userlist extends React.Component{
	render(){
		return(
			<div className="d-flex bd-highlight" id="him">
				<div className="img_cont">
					<div id="statut">
						<span className="online_icon"></span>
					</div>
					<div id="name">
						{this.props.userName}
					</div>
				</div>
			</div>
		)
	}
}

export default Userlist;