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
		console.log(event);
		this.setState({ searchfield: event.target.value })
	}

	AddRobo = () => {
		console.log('click');
		 
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
					<h1 className='f1'>Robofriends</h1>
					<Searchbox searchChange={this.onSearchChange} />
					<AddRobo onButtonClick={this.AddRobo} />
					<Scroll>
						<CardList robots={filteredrobots} />
					</Scroll>
				</div>

			);
	}
}
export default App;