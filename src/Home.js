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
							<div class="d-flex bd-highlight">
								<div class="user_info">
									<span id="info_user">
										
									</span>
								</div>
							</div>
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