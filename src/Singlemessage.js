import React from 'react';

class Singlemessage extends React.Component{

	componentDidMount(){
		this.forceScroll();
	}

	forceScroll(){
  	const parent = document.getElementById('modal-body');
  	if(parent !== undefined){
  		parent.scrollTop = document.getElementById('modal-body').scrollHeight;
  	}
	}

	parsedate = (date) => {
		date = new Date(date*1000);
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		let hour = date.getHours();
		let min = date.getMinutes();

		return date.toLocaleDateString(undefined, options)+'/'+hour+':'+min;
	}

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