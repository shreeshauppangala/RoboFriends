import React from 'react';
import Card from './card'

const CardList = ({ robots, onCloseClickList }) => {
	if (robots && robots.length > 0) {
		return (
			robots.map((robot, i) => {
				return (
					<Card
						onCloseClick={onCloseClickList}
						key={i}
						id={robot.id}
						name={robot.name}
						email={robot.email}
					/>
				);
			})
		);
	}
	else {
		return null;
	}
}

export default CardList;