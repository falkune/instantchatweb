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
						<span>salut toi</span>
						<p>c'est moi dh </p>
					</div>
				</div>
			</li>
		)
	}
}

export default Userlist;
