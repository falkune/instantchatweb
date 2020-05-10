import React from 'react';

class Singlemessage extends React.Component{

	state = {
		utilisateur : ''
	}

	parsedate = (date) => {
		var date = new Date(date*1000);
		var month = date.getMonth();
		var day = date.getDate();
		var hour = date.getHours();
		var min = date.getMinutes();
		return date.getDate();
	}

	render(){
		if(this.props.user === this.props.connectedUser){
			return(
				<div id="trasmit">
					{this.props.content}
					<span>
						{this.parsedate(this.props.editdate)}
					</span>
				</div>
			)
		}
		else{
			return(
				<div id="recut">
					{this.props.content}
					<span>
						{this.parsedate(this.props.editdate)}
					</span>
				</div>
			)
		}
	}

}

export default Singlemessage;