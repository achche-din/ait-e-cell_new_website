import React from 'react'
import { TeamCard } from './TeamCard'
import './TeamPage.css'

export const TeamPage = () => {
	return (
		<div>
			<div className="card-wrapper">
				<TeamCard />
				<TeamCard />
				<TeamCard />
				<TeamCard />
			</div>
		</div>
	)
}
