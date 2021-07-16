import React, { Component } from 'react';

class ProductList extends Component { 
    render() {
        var {children} = this.props;
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sach san pham</h3>
                </div>
                <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ma san pham</th>
                                <th>ten san pham</th>
                                <th>gia</th>
                                <th>trang thai</th>
                                <th>hanh dong</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
           </div>
        );
    }
}
export default (ProductList);
 