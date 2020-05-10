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
					<span>{this.props.editdate.getDate}</span>
				</div>
			)
		}
	}

}

export default Singlemessage;