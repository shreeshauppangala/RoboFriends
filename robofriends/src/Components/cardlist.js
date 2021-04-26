import React from 'react';
import Card from './card'

const CardList = ({ robots, onCloseClicklist }) => {
	if(robots && robots.length>0){
	return (<div>
			{robots.map((robot, i) => {
					return (
						<Card
							onCloseClick={onCloseClicklist}
							key={i}
							id={robot.id}
							name={robot.name}
							email={robot.email}
						/>
					);
				})
			}
		</div>
	);
		}
		else{
			return null;
		}
}

export default CardList;