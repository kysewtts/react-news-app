import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import * as actions from '../../store/actions/getAction';
import Posts from '../Posts/Posts';

class Input extends Component{
    state = {
        selectCategory: "the-times-of-india"
    }
    optionChangeHandler = (event) => {
        this.setState({
            selectCategory: event.target.value
        })
    }
    handleNews = () => {
        this.props.onSubmit(this.state.selectCategory);
    }
    render(){
        return(
            <Aux>
                <div className="input-field col s12" style = {{"width": "50%", "margin": "50px auto"}}>
                    <select className="browser-default" id = "selectCategory" onChange={this.optionChangeHandler}>
                        <option value="the-times-of-india">The Times of India</option>
                        <option value="the-hindu">The Hindu</option>
                        <option value="espn-cric-info">ESPN Cric Info</option>
                        <option value="techradar">TechRadar</option>
                    </select>
                </div>
                <div style = {{"textAlign": "center"}}>
                    <button type="button" className="btn btn-dark" onClick = {this.handleNews}>Get News.!!</button>
                </div>
                <Posts />
            </Aux>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (sourceType) => dispatch(actions.fetch(sourceType))
    };
};


export default connect(null, mapDispatchToProps)(Input);