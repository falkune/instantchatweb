import React from 'react';

class Userlist extends React.Component{
	render(){
		return(
			<div className="d-flex bd-highlight" id="him">
				<div className="img_cont">
					<span className="online_icon"></span>
					<div>
						{this.props.userName}
					</div>
				</div>
			</div>
		)
	}
}

export default Userlist;