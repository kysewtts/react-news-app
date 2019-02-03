import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';

const navbar = (props) => {
    return(
        <Aux>
            <nav>
                <div className="nav-wrapper">
                    <Link to = '/' className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to = "#">Sass</Link></li>
                    </ul>
                </div>
            </nav>
        </Aux>
        
    );
}

export default navbar;