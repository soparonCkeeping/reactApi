import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductActionPage extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            txtName : '',
            txtPrice : '',
            txtStatus : false,
            title : 'them san pham',            
            redirect : false,
        }
    }

    componentDidMount = () => {
        var {match} = this.props;
        if(match) {
            var id = match.params.id;
            id = id.slice(1);
            this.props.getUpdateItemRequest(id);        
        }
        // var {updateItemProps} = this.props;
        // console.log(updateItemProps);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps.updateItemProps);
        var {updateItemProps} = nextProps;
        console.log('oi roi oi');
        if(updateItemProps.id !== prevState.id && updateItemProps.id) {
            return {
                id : updateItemProps.id,
                txtName : updateItemProps.name,
                txtPrice : updateItemProps.price,
                txtStatus : updateItemProps.status,
                title : 'cap nhat san pham',
                redirect : false,
            };
       }
       else return null;
    }

    render() {
        var {redirect ,txtName, txtPrice, txtStatus, title} = this.state;   
        console.log(txtName);     
        if(redirect) {
            return <Redirect to='/productList'></Redirect>
        }

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSubmit}>
                    <legend>{title}</legend>
                    <div className="form-group">
                        <label>ten san pham</label>
                        <input 
                            type="text"  
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange = {this.onChange}
                            ></input>
                    </div>
                    <div className="form-group">
                        <label>Gia</label>
                        <input 
                            type="number"  
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange = {this.onChange}
                        
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>trang thai</label>
                        <div className="checkbox">
                            <label>
                                <input 
                                    type="checkbox"
                                    name="txtStatus"
                                    value={txtStatus}
                                    onChange = {this.onChange}
                                    checked={txtStatus}
                                ></input>
                                Checkbox
                            </label>
                        </div>
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>                
            </div>
        );
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value; 
        this.setState({
            [name] : value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        var {id, txtName, txtPrice, txtStatus} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : txtStatus,
        }
        if(id) {
            this.props.updateItemRequest(product);                        
            history.goBack();
        }else{
            this.props.addItem(product);        
            history.goBack();    
        }
        


        // this.setState({
        //     redirect : true,
        // })
        
    }
}

const mapStateToProps = (state) => {
    return{
        updateItemProps : state.updateItem,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        addItem : (product) => {
            dispatch(actions.addItemRequest(product));
        },
        
        updateItemRequest : (product) => {
            dispatch(actions.updateItemRequest(product));
        },

        getUpdateItemRequest :(id) => {
            dispatch(actions.getUpdateItemRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
