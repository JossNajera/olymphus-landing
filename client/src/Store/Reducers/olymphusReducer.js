import * as types from '../ActionTypes/olymphusActionTypes';

const initialState = {
    isOnSite: false,
    user: [],
    userData: []
}

const olymphusReducer = ( state = initialState, action ) => {
    switch (action.type) {

        case types.SITE_ON:
            return{
                ...state,
                isOnSite: true,
                
            };

        default:
            return state;
    }
};

export default olymphusReducer;