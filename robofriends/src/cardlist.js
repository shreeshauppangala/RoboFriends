import React from 'react';
import Card from './card'

const CardList = ({ robots, onCloseClicklist, }) => {
	return (
		<div>
			{
				robots.map((user, i) => {
					return (
						<Card
							onCloseClick={onCloseClicklist}
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;