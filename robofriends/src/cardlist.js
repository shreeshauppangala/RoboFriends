import React,{useState,useEffect} from 'react';
import Card from './card'

const CardList = ({ robots, onCloseClicklist, }) => {
	const [cardListRobot,setCardListRobot]=useState(robots)
	useEffect(() => { setCardListRobot(robots) },[robots])
	return (
		<div>
			{
				cardListRobot.map((user, i) => {
					return (
						<Card
							onCloseClick={onCloseClicklist}
							key={i}
							id={cardListRobot[i].id}
							name={cardListRobot[i].name}
							email={cardListRobot[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;