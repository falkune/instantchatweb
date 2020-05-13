import React from 'react';

class Input extends React.Component{
	render(){
		return(
			<div className="input-group">
				<div className="input-group-prepend">
					<div id="the_users">
						<i className="fas fa-users fa-2x"></i>
					</div>

					<div className="input-group">
						<input 
							type="text" 
							placeholder="Search..." 
							className="form-control search"
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Input;