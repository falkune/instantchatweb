import React from 'react';
import Input from './Input';

class Home extends React.Component{
	render(){
		return(
			<div className="row justify-content-center h-100">
				<div className="col-md-4 col-xl-3 chat">
					<div className="card mb-sm-3 mb-md-0 contacts_card">
						<div className="card-header">
							<Input/>
						</div>

						<div className="card-body contacts_body">

						</div>
					</div>
				</div>

				<div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;