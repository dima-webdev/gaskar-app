import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/cabinet">Cabinet Page</Link>
                </li>
                <li>
                    <Link to="/auth">Auth Page</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default HomePage;