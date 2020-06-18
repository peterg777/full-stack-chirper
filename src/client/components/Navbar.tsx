import * as React from 'react';
import {Link} from 'react-router-dom';

const Navbar:React.FC<NavbarProps> = (props)=>{
     
        return (
            <nav className="navbar navbar-dark bg-secondary">
                <Link to="/">
                    <h3 className="text-light">Welcome to FullStack Chirper Headquarters</h3>
                </Link>
                <Link className="btn btn-outline-light" to="/">Home</Link>
                {/* <Link className="btn btn-outline-success" to="./compose">Compose Chirp!</Link> */}
            </nav>

        )
    }

    interface NavbarProps {}

    export default Navbar;
