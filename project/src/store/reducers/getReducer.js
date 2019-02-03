import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: '',
    data: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_START:
            return updateObject(state, { loading: true, data: [] });
        case actionTypes.FETCH_FAIL:
            return updateObject(state, { loading: false, error: action.error});
        case actionTypes.FETCH_SUCCESS:
            return updateObject(state, { loading: false, data: action.data });
        default:
            return state;
    }
} 

export default reducer;