import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const fecthProducts = (product) => {
    return {
        type : types.FETCH_PRODUCT,
        product : product
    }
}

export const fetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(fecthProducts(res.data));
        });
    }
}

export const deleteItem = (id) => {
    return {
        type : types.DELETE_ITEM,
        id : id,
    }
}

export const deleteItemRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res =>{
            dispatch(deleteItem(id))
        })
    }
}

export const addItem = (product) => {
    return {
        product : product,
        type : types.ADD_ITEM
    }
}

export const addItemRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(addItem(res.data))
        })
    }
}

export const updateItem = (product) => {
    return{
        product : product,
        type : types.UPDATE_ITEM,
    }
}

export const updateItemRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`,'PUT', product).then(res => {
            dispatch(updateItem(res.data));
        })
    }
}

export const getUpdateItem = (product) => {
    return{
        product : product,
        type : types.GET_UPDATE_ITEM,
    }
}

export const getUpdateItemRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`,'GET', null).then(res =>{
            dispatch(getUpdateItem(res.data));
        })
    }
}

