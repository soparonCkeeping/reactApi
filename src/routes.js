import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },

    {
        path: '/productList',
        exact: false,
        main: () => <ProductListPage></ProductListPage>
    },

    {
        path: '/product/add',   
        exact: false,
        main: ({history}) => <ProductActionPage history={history}></ProductActionPage>
    },

    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage history={history} match={match}></ProductActionPage>
    },

    {
        path: '/',
        exact: false,
        main: () => <NotFoundPage></NotFoundPage>
    },


];

export default routes;
