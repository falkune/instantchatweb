import React from 'react';

class Singlemessage extends React.Component{

	state = {
		utilisateur : ''
	}

	parsedate = (date) => {
		var date = new Date(date*1000);
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		let hour = date.getHours();
		let min = date.getMinutes();

		return date.toLocaleDateString(undefined, options)+' à '+hour+':'+min;
	}

	render(){
		if(this.props.user === this.props.connectedUser){
			return(
				<div id="trasmit">
					{this.props.content}
					<br/>
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