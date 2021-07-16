import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'trang chu',
        to: '/',
        exact: true,
    },

    {
        name: 'quan li',
        to: '/productList',
        exact: false,
    }
]

const MenuLink = ({to, label, ActiveOnlyWhenExact}) => {
    return (
        <Route
            path = {to}
            exact = {ActiveOnlyWhenExact}
            children = {({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className = {active}>
                        <Link to = {to}> {label} </Link>
                    </li>
                );
            }}
        ></Route>
    );
}

class Menu extends Component { 
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">CALL API</a>
                <ul className="nav navbar-nav">
                    { this.showMenu(menus) }
                </ul>
            </div>          
        );
    }

    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index)=>{
                return (
                    <MenuLink
                        key = {index}
                        label = {menu.name}
                        to = {menu.to}
                        ActiveOnlyWhenExact = {menu.exact}
                    ></MenuLink>
                )
            });
        }
        return result;
    }
}
export default (Menu);
 