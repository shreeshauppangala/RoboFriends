import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSearchField } from "../Redux/action";
import { getSearchFieldSelector, getRobotsSelector } from '../Redux/selector';
import { REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_SUCCESS } from "../Redux/const";
import CardList from './cardList';
import SearchBox from './searchBox';
import AddRobotButton from "./AddRobotButton";
import "./App.css";

const App = () => {
	const dispatch = useDispatch()

	const searchField = useSelector(getSearchFieldSelector)
	const robots = useSelector(getRobotsSelector)

	const [localRobots, setLocalRobots] = useState(robots)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error }))
	}, [dispatch])

	useEffect(() => {
		setLocalRobots(robots)
	}, [robots])

	const addRobot = () => {
		const oldRobot = [...localRobots];
		const newRobot = {
			id: 121,
			name: 'Shreesha',
			username: 'Sharma',
			email: 'shreeshauppangala@gmail.com'
		}
		const home = {
			id: 122,
			name: 'Uppangala',
			username: 'Sharma',
			email: 'uppangala@gmail.com'
		}
		oldRobot.push(newRobot, home);
		setLocalRobots(oldRobot)
	}
	const closeRobot = (id) => {
		const allRobot = localRobots;
		const deletedRobot = allRobot.filter(x => x.id !== id);
		setLocalRobots(deletedRobot)
	}
	const filteredRobots = localRobots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField?.toLowerCase());
	})
	return !localRobots.length ?
		<p className='header tc'>Please Refresh This Page</p> :
		(
			<div className='tc'>
				<span className='header'>Robot Friends</span>
				<SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))} />
				<AddRobotButton onButtonClick={addRobot} />
				{
					(filteredRobots && filteredRobots.length > 0)
						? <CardList onCloseClickList={closeRobot} robots={filteredRobots} />
						: null
				}
			</div>

		);
}

export default App;
