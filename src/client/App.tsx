import * as React from 'react';
import {BrowserRouter,Switch, Route,} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Admin from './pages/Admin';
import Compose from './pages/Compose';
import Navbar from './components/Navbar';

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter>
		<Navbar />
		<Switch>
			
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/chirps/details/:chirpid">
				<Details/>
			</Route>
			<Route exact path="/chirps/admin/:chirpid">
				<Admin/>
			</Route>
			<Route exact path="/compose">
				<Compose/>
			</Route>

			
		</Switch>
		</BrowserRouter>
    );
}


interface AppProps { }

export default App;