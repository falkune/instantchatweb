import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

class Home extends React.Component{
	render(){
		return(
			<div id="chat">
				<div className="chat">
					<div id="card" className="card">
						<div className="card-header">
							<Input/>
						</div>

						<div className="card-body">
							<div className="contacts">
								{/* ici seront injecter les users*/}
							</div>
						</div>
					</div>
				</div>

				<div className="chat">
					<div id="card" className="card">
						<div className="card-header">
							<div className="d-flex bd-highlight">
								<div className="user_info">
									<span id="info_user"></span>

									<p id="nb_messages"></p>
								</div>
							</div>

							<span id="disconected">
								<i className="fas fa-power-off fa-2x "></i>
							</span>
						</div>

						<div className="card-body">
							{/* ici seront injecter les message*/}
						</div>

						<div className="card-footer">
							<Textarea/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;