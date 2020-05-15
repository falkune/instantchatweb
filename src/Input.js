import React from 'react';

class Input extends React.Component{
	render(){
		return(
			<div id="input-group" className="input-group">
				<div className="input-group-prepend">
					<div className="input-group">
						<input 
							type="text" 
							placeholder="Search..." 
							className="form-control search"
						/>
						<div className="input-group-prepend">
							<span className="input-group-text search_btn">
								<i className="fas fa-search"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Input;