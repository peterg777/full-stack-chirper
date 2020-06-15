import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Details from './pages/Details';
import Edit from './pages/Edit';


class App extends React.Component<AppProps> {
	render() {

		return (
			<BrowserRouter>
				<Container>
					<Switch>
						<Route exact path="/" component={Home} />

						<Route exact path="/chirps/details/:chirpid" component={Details} />

						<Route exact path="/chirps/edit/:chirpid" component={Edit} />

					</Switch>
				</Container>
			</BrowserRouter>


		);

	}

}

export interface AppProps { }



export default App;
