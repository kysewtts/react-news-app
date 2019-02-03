import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';

const navbar = (props) => {
    return(
        <Aux>
            <nav>
                <div className="nav-wrapper">
                    <Link to = '/' className="brand-logo center" style = {{"textDecoration": "none"}}>NewsOnReact</Link>
                </div>
            </nav>
        </Aux>
        
    );
}

export default navbar;