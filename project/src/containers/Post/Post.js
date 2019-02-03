import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';


class Post extends Component{
    render(){
        const news = this.props.news ? (
            <div className="post card" style = {{"padding": "10px"}}>
                <h3 className="center" style = {{"marginTop": "20px"}}>{this.props.news.title}</h3>
                <h5 className="center red" style = {{"marginTop": "20px"}}>By:- {this.props.news.author ? <u>{this.props.news.author}</u> : <i>Unknown</i>}</h5>
                <p style = {{"marginTop": "20px"}}>{this.props.news.content}</p>
                <h6 className="center" style = {{"marginTop": "20px"}}>Source:- <a href = {this.props.news.url} target="blank">{this.props.news.url}</a></h6>
                <h6 className = "center" style = {{"marginTop": "20px"}}>Published At:- {new Date(this.props.news.publishedAt).toString()}</h6>
            </div>
        ) : (
            <Redirect to = "/" />
        );
        return(
            <div className = "container">
                {news}
            </div>
        );
    }
}

const mapStatetoProps = (state,ownProps) => {
    let postId = ownProps.match.params.post_id;
    return {
        news: state.data[postId]
    }
}

export default connect(mapStatetoProps)(Post);

