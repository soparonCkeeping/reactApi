import * as types from './../constants/ActionTypes';

var initialState = {
};

var updateItem = (state = initialState, actions) => {
    switch(actions.type) {
        case(types.GET_UPDATE_ITEM):
            state = actions.product;
            // console.log(state);
            return state;
        default : 
            return state;
    }
}

export default updateItem;