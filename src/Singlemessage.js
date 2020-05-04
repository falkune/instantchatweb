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
				</div>
			)
		}
		else{
			return(
				<div id="recut">
					{this.props.content}
				</div>
			)
		}
	}

}

export default Singlemessage;