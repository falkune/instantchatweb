import React from 'react';

class Userlist extends React.Component{
	render(){
		return(
			<li>
				<div class="d-flex bd-highlight" id="him">
					<div class="img_cont">
						<span class="online_icon"></span>
					</div>
					<div class="user_info">
						<span>{this.props.userId}</span>
						<p>Kalid is online</p>
					</div>
				</div>
			</li>
		)
	}
}

export default Userlist;
