import * as React from 'react';
import {Link} from 'react-router-dom';

const Navbar:React.FC<NavbarProps> = (props)=>{
     
        return (
            <nav className="navbar navbar-dark bg-warning">
                <Link to="/">
                    <h3 className="text-dark">Welcome to FullStack Chirps</h3>
                </Link>
                <Link className="btn btn-outline-success" to="/">Home</Link>
                
            </nav>

        )
    }

    interface NavbarProps {}

    export default Navbar;
