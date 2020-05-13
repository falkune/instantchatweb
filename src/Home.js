import React from 'react';
import Input from './Input';

class Home extends React.Component{
	render(){
		return(
			<div id="chat" className="row h-100">
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
							<div className="d-flex bd-highlight">
								<div className="user_info">
									<span id="info_user"></span>

									<p id="nb_messages"></p>
								</div>
							</div>

							<span id="disconected">
								<i className="fas fa-power-off"></i>
							</span>
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