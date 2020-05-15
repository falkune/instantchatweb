import React from 'react';

class Singlemessage extends React.Component{

	render(){
		if(this.props.user === this.props.connectedUser){
			return(
				<div className="transmit">
					<p>
						{this.props.content}
						<br/>
						<span className="datebox">
							{this.parsedate(this.props.editdate)}
						</span>
					</p>
				</div>
			)
		}
		else{
			return(
				<div className="recut">
					<p>
						{this.props.content}
						<br/>
						<span className="datebox">
							{this.parsedate(this.props.editdate)}
						</span>
					</p>
				</div>
			)
		}
	}

}

export default Singlemessage;