import * as React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			chirps: []
		};
	}
	async componentDidMount() {
		try {
			let r = await fetch('/api/chirps');
			let chirps = await r.json();
			this.setState({ chirps: chirps });
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return (
			<Router>
				<nav className="nav">
					<Link to='/'><button className="btn mx-4 homeBtn">Home</button></Link>
					<Link to='/newchirp'><button className="btn mx-4 chirpBtn">Compose</button></Link>
				</nav>
				<main className="container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/newchirp" component={NewChirp} />
					</Switch>
				</main>
			</Router>
		);
	}
}
export interface IAppProps { }
export interface IAppState {
	chirps: chirp[];
}
export interface chirp {
	username: string,
	message: string,
}
export default App;