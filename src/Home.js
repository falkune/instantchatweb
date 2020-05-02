import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class Home extends React.Component{

	render(){
		return(
			<div id="accueiContainer">
				<aside id="users">
					<div className="col-md-4 col-xl-3 chat">ko<div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="card-header">
						<div className="input-group">
							<input type="text" placeholder="Search..." name="" className="form-control search">
							<div className="input-group-prepend">
								
							</div>
						</div>
					</div>
					<div className="card-body contacts_body">
						<ui className="contacts">
						<li className="active">
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img">
									<span className="online_icon"></span>
								</div>
								<div className="user_info">
									<span>Khalid</span>
									<p>Kalid is online</p>
								</div>
							</div>
						</li>
						<li>
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" className="rounded-circle user_img">
									<span className="online_icon offline"></span>
								</div>
								<div className="user_info">
									<span>Taherah Big</span>
									<p>Taherah left 7 mins ago</p>
								</div>
							</div>
						</li>
						<li>
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" className="rounded-circle user_img">
									<span className="online_icon"></span>
								</div>
								<div className="user_info">
									<span>Sami Rafi</span>
									<p>Sami is online</p>
								</div>
							</div>
						</li>
						<li>
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/sweet-girl-profile-pictures-9.jpg" className="rounded-circle user_img">
									<span className="online_icon offline">hun</span>
								</div>
								<div className="user_info">
									<span>Nargis Hawa</span>
									<p>Nargis left 30 mins ago</p>
								</div>
							</div>
						</li>
						<li>
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img">
									<span className="online_icon offline">yes</span>
								</div>
								<div className="user_info">
									<span>Rashid Samim</span>
									<p>Rashid left 50 mins ago</p>
								</div>
							</div>
						</li>
						</ui>
					</div>
					<div className="card-footer"/>
				</div>
				</aside>

				<main id="actualite">
					
				</main>

				<aside id="pub">
					
				</aside>
			</div>
		);
	}
}

export default Home;