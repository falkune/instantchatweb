import React from 'react';
import Input from './Input';

class Home extends React.Component{
	render(){
		return(
			<div id="chat">
				<div className="chat">
					<div className="card">
						<div className="card-header">
							<Input/>
						</div>

						<div className="card-body">
							<div className="contacts">

							</div>
						</div>
					</div>
				</div>

				<div className="chat">
					<div className="card">
						<div className="card-header">
							
						</div>

						<div className="card-body">

						</div>

						<div className="card-footer">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;