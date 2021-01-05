import React,{Component} from 'react';
import CardList from './cardlist';
import Searchbox from './searchbox';
import Scroll from './scroll';

class App extends Component {
	state = {
		robots: [],
	searchfield: ''
	}
	constructor() {
		super()
		this.state = {
	robots: [],
	searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
		return response.json();
		})
		.then(users => {
		this.setState({robots:users})
	});
	}
	onsearchchange = (event) => {
		this.setState({searchfield: event.target.value})
}
	render() {
		const filteredrobots = this.state.robots?.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	return (
		<div className='tc'>
		<h1 className='f1'>Robofriends</h1>
		<Searchbox searchchange={this.onsearchchange}/>
		<Scroll>
		<CardList robots={filteredrobots} />
		</Scroll>
		</div>

	);
}
}
export default App;