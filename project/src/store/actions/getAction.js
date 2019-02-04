import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    };
};

export const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: error
    };
};

export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: data
    };
};

export const fetch = (sourceType) => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get('https://newsapi.org/v2/top-headlines?sources='+ sourceType +'&apiKey=e410fa0a67c049cd8d491c10c823d973')
            .then(response => {
                dispatch(fetchSuccess(response.data.articles));
            })
            .catch(error => {
                console.log(error);
                dispatch(fetchFail(error.response.data.message));
            })
    };
};