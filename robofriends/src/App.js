import React, {useState,useEffect} from 'react';
import CardList from './cardlist';
import Searchbox from './searchbox';
import AddRoboButton from "./AddRoboButton";
import Scroll from './scroll';
import "./App.css";

const App = () => {
	const [robots,setRobots] = useState([])
	const [searchfield,setSearchfield] = useState('')

	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {setRobots(users) });
	 },[])
	const onSearchChange = ( event ) => {
		setSearchfield(event.target.value )
	}

     const addRobo = () => {
		const oldrobo = [...robots];
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
		setRobots(oldrobo)
	}
	const closeRobo = (id) => {
		const allrobo = robots;
		const deletedRobo = allrobo.filter(x => x.id !== id);
		setRobots(deletedRobo)
	}
		const filteredrobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
			<h1>Please Refresh This Page</h1> :
			(
				<div className='tc'>
					<h1 style={{ cursor: 'none' }} className='f1'>Robofriends</h1>
					<Searchbox searchChange={onSearchChange} />
					<AddRoboButton onButtonClick={addRobo} />
					<Scroll>
						<CardList onCloseClicklist={closeRobo} robots={filteredrobots} />
					</Scroll>
				</div>

			);
}

export default App;