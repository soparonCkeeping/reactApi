import * as types from './../constants/ActionTypes';

var initialState = [];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if(product.id === id){
            result = index;
        }
    });   
    return result;
}

var products = (state = initialState, actions) => {
    var index = -1;
    switch(actions.type) {
        case types.FETCH_PRODUCT:
            state = actions.product;
            return[...state]
        case types.DELETE_ITEM:
            index = findIndex(state, actions.id);
            if(index !== -1){
                state.splice(index,1);
            }
            return[...state];        
        case types.ADD_ITEM:
            console.log(actions.product);
            state.push(actions.product);
            return [...state];
        case types.UPDATE_ITEM:
            // var id = actions.product.id;
            // console.log(actions);
            // index = findIndex(state, id);
            // if(index !== -1) {
            //     state[index] = actions.product;
            // }
            // return state;
            break;
        default : 
            return [...state];
    }
}


export default products;