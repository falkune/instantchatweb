import React from 'react';

class Userlist extends React.Component{
	render(){
		return(
			<li>
				<div className="d-flex bd-highlight" id="him">
					<div className="img_cont">
						<span className="online_icon"></span>
					</div>
					<div className="user_info">
						<span>Khalid</span>
						<p>Kalid is online</p>
					</div>
				</div>
			</li>
		)
	}
}

export default Userlist;
