import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { setSearchField } from "../Redux/action";
import { getSearchFieldSelector,getRobotsSelector } from '../Redux/selector';
import { REQUEST_ROBOTS_FAIL,REQUEST_ROBOTS_SUCCESS } from "../Redux/const";
import CardList from './cardlist';
import Searchbox from './searchbox';
import AddRoboButton from "./AddRoboButton";
import Scroll from './scroll';
import "./App.css";

// const mapStateToProps = (state) => {
// 	return {
// 		searchField: getSearchFieldSelector(state),
// 		robots: getRobotsSelector(state),
// 		isPending: getisPendingSelector(state),
// 		error: getErrorSelector(state)
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onSearchChange : (event) ),
// 		onRequestRobots: () => requestRobots(dispatch)
// 	}
// }
const App = () => {
	const dispatch = useDispatch()

	const searchField = useSelector(getSearchFieldSelector)
  	const robots = useSelector(getRobotsSelector)

	const [localRobots, setLocalRobots] = useState(robots)

	useEffect( () => {
		    fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
            .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
            .catch(error=>dispatch({type:REQUEST_ROBOTS_FAIL,payload:error}))
	 },[dispatch])

	 useEffect( () => {
		 setLocalRobots(robots)
	 },[robots])

     const addRobo = () => {
		const oldrobo = [...localRobots];
		const newrobo = {
			id: 121,
			name: 'shreesha',
			username: 'sharma',
			email: 'shreeshauppangala@gmail.com'
		}
		const home = {
			id: 122,
			name: 'uppangala',
			username: 'sharma',
			email: 'uppangala@gmail.com'
		}
		oldrobo.push(newrobo,home);
		setLocalRobots(oldrobo)
	}
	const closeRobo = (id) => {
		const allrobo = localRobots;
		const deletedRobo = allrobo.filter(x => x.id !== id);
		setLocalRobots(deletedRobo)
	}
		const filteredrobots = localRobots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField?.toLowerCase());
		})
		return !localRobots.length  ?
			<h1>Please Refresh This Page</h1> :
			(
				<div className='tc'>
					<h1 style={{ cursor: 'none' }} className='f1'>Robofriends</h1>
					<Searchbox searchChange={(event)=> dispatch(setSearchField(event.target.value))} />
					<AddRoboButton onButtonClick={addRobo} />
					<Scroll>
						{
							(filteredrobots && filteredrobots.length >0)
							? <CardList onCloseClicklist={closeRobo} robots={filteredrobots} />
							: null
						}
					</Scroll>
				</div>

			);
}

export default /*connect(mapStateToProps,mapDispatchToProps) */App;
