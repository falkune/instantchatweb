import React from 'react';

class Singlemessage extends React.Component{

	state = {
		utilisateur : ''
	}

	parsedate = (date) => {
		var date = new Date(date*1000);

		let month = date.getMonth();
		let day = date.getDate();
		let hour = date.getHours();
		let min = date.getMinutes();
		let scnd = date.getSeconds();
		return month+' '+day+' '+hour+' '+min+' '+scnd;
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