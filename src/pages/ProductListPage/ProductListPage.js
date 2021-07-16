import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductListPage extends Component { 
    constructor(props) {
        super(props);
        this.state ={
            products: []
        };  
    }

    componentDidMount(){
        this.props.fetchProductsRequest();
    }

    render() {
        var {products} = this.props;
        return (
             <div className="row">
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to='/product/add' className='btn btn-info mb-10'>Them san pham</Link>
                    <ProductList>{this.showProductItem(products)}</ProductList>                     
                 </div>
             </div>
        );
        }

    showProductItem = (products) => {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key = {index}
                        product = {product}
                        onDeleteItem = {this.onDeleteItem}
                        onUpdateItem = {this.onUpdateItem}
                        index = {index}
                    ></ProductItem>
                );
            })
        }
        return result;
    }

    onDeleteItem = (id) => {
        this.props.deleteItemRequest(id);
    }


    // find id at this
    onUpdateItem = (id) => {
        // this.props.getUpdateItemRequest(id);
        // var {products} = this.state;
        // var index = this.findIndex(products, id);

        // if(index !== -1) {
        //     // console.log(products[index]);
        //     this.props.updateItem(products[index])
        // }
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if(product.id === id) {
                result = index;
            }
        });
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // updateItem : (product) => {
        //     dispatch(actions.updateItem(product));
        // },

        fetchProductsRequest : () => {
            dispatch(actions.fetchProductsRequest());
        },

        deleteItemRequest : (id) => {
            dispatch(actions.deleteItemRequest(id));
        },

        getUpdateItemRequest : (id)=> {
            dispatch(actions.getUpdateItemRequest(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
    