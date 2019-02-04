import React from 'react';

const footer = (props) => {
    return(
        <footer>
            <div className="footer-copyright">
                <div className="container" style = {{"textAlign": "center", "border": "2px solid blue"}}>
                 <a href = "https://newsapi.org/" target = "blank" style = {{"textDecoration": "none"}}>Powered By News API</a>
                </div>
            </div>
        </footer>
    );
}

export default footer;