import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component { 
    render() {
        var { product, index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{product.id}</td>

                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    {this.showProductState(product)}
                </td>
                <td>
                    <Link 
                        to={`/product/:${product.id}/edit`} 
                        className='btn btn-success ml-10'
                        onClick = {() => this.onUpdateItem(product.id)}
                    >sua</Link>
                    <button 
                        type="button" 
                        className="btn btn-danger ml-10"
                        onClick = {() => this.onDeleteItem(product.id)}
                        >xoa</button>
                </td>
                <td></td>
                <td></td>
            </tr>
        );
    }

    onDeleteItem = (id) => {
        // if(confirm('ban co chac muon xoa')){ //eslint-disable-line
            this.props.onDeleteItem(id);
        // }
    }

    onUpdateItem = (id) => {
        if(confirm('ban co chac muon cap nhat')) {//eslint-disable-line
            this.props.onUpdateItem(id);
        }
    }

    showProductState(product) {
        var result = null;
        if(product.status === true) {
            result = <span className="label label-success">con hang</span>
        } else {
            result = <span className="label label-default">het hang</span>
        }
        
        return result;
    }
}
export default (ProductItem);
 