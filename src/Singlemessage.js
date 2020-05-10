import React from 'react';

class Singlemessage extends React.Component{

	state = {
		utilisateur : ''
	}

	render(){
		if(this.props.user === this.props.connectedUser){
			return(
				<div id="trasmit">
					{this.props.content}
					<span>
						{this.props.editdate}
					</span>
				</div>
			)
		}
		else{
			return(
				<div id="recut">
					{this.props.content}
					<span>
						{this.props.editdate}
					</span>
				</div>
			)
		}
	}

}

export default Singlemessage;