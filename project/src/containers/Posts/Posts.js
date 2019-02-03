import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';

class Posts extends Component{
    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                        <div className="post card" key = {post.title}>
                            <div className="card-content">
                                <Link to = {'/' + posts.indexOf(post)}>
                                    <span className = "card-title">{post.title}</span>
                                </Link>
                                <p>{post.description}</p>
                            </div>
                        </div>
                    )
                }
            )
         ) : (
             this.props.loading ? <Spinner /> : null
         ) ;
        return(
            <div className="container" style = {{"marginTop": "50px"}}>
                {postList}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        posts: state.data,
        loading: state.loading
    }
}


export default connect(mapStateToProps)(Posts);


