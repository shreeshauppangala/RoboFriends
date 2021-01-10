import React, { Component } from 'react';
import CardList from './cardlist';
import Searchbox from './searchbox';
import AddRobo from "./AddRobo";
import Scroll from './scroll';
import "./App.css";


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => { this.setState({ robots: users }) });
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	AddRobo = () => {
		const oldrobo = this.state.robots;
		const newrobo = {
			id: 121,
			name: 'shreesha',
			username: 'sharma',
			email: 'shreeshauppangala@gmail.com'
		}
		oldrobo.push(newrobo);
		this.setState({ robots:oldrobo })
	}
	CloseRobo = (id) => {
		const allrobo = this.state.robots;
		const DeletedRobo = allrobo.filter(x => x.id !== id);
		this.setState({ robots:DeletedRobo })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredrobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
			<h1>LOADING....</h1> :
			(
				<div className='tc'>
					<h1 style={{ cursor: 'none' }} className='f1'>Robofriends</h1>
					<Searchbox searchChange={this.onSearchChange} />
					<AddRobo onButtonClick={this.AddRobo} />
					<Scroll>
						<CardList onCloseClicklist={this.CloseRobo} robots={filteredrobots} />
					</Scroll>
				</div>

			);
	}
}

export default App;