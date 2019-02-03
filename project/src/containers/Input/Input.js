import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

class Input extends Component{
    state = {
        selectCategory: "the-times-of-india"
    }
    optionChangeHandler = (event) => {
        this.setState({
            selectCategory: event.target.value
        })
    }
    
    render(){
        console.log(this.state);
        return(
            <Aux>
                <div className="input-field col s12" style = {{"width": "50%", "margin": "50px auto"}}>
                    <select className="browser-default" id = "selectCategory" onChange={this.optionChangeHandler}>
                        <option value="the-times-of-india">The Times of India</option>
                        <option value="the-hindu">The Hindu</option>
                        <option value="espn-cric-info">ESPN Cric Info</option>
                    </select>
                </div>
                <div style = {{"textAlign": "center"}}>
                    <button type="button" className="btn btn-dark">Get News.!!</button>
                </div>
            </Aux>
        );
    }
}

export default Input;