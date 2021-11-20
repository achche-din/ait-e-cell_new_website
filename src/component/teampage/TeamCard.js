import React from 'react'

export const TeamCard = () => {
	return (
		<div>
			
			<div className="card">
				<div className="card-folder hover">
					<div className="profile">Profile</div>
					<div className="socials">
						<a href="https://www.instagram.com/" target="_blank">
							instagram
							
						</a>
						<a href="https://www.linkedin.com/in/" target="_blank">
							
							linkedin
						</a>
					</div>
				</div>
				<div className="card-content-wrapper">
					<div className="member-name">Name</div>
					<div className="branch-year">Branch / Year</div>
					<div className="role-domain">Role
						<div></div> Domain</div>
				</div>
			</div>
</div>
	)
}
