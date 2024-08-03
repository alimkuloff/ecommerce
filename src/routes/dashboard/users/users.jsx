import { Navigate, useRoutes } from 'react-router-dom';
import { lazy } from 'react';

import Suspense from '../../../utils/index';
import Private from '../../private/private';
import { useSelector } from 'react-redux';
import DashboardProfile from '../profile/profile';

const Home = lazy(() => import('../../home/Home'));
const Auth = lazy(() => import('../../auth/Auth'));
const Dashboard = lazy(() => import('../Dashboard'));

const Products = lazy(() => import('../products/products'));
const Popular_product = lazy(() => import('../../popular_products'));;
const Login = lazy(() => import('../../auth/login/Login'));
const Register = lazy(() => import('../../auth/register/Register'));

const RouteController = () => {
    const auth = useSelector(state => state.token);
    return useRoutes([
        {
            path: '',
            element: <Suspense><Popular_product /></Suspense>,
        },
        {
            path: 'auth',
            element: auth ? <Navigate to='/dashboard' /> : <Suspense><Auth /></Suspense>,
            children: [
                {
                    path: '',
                    element: <Suspense><Login /></Suspense>,
                },
                {
                    path: 'register',
                    element: <Suspense><Register /></Suspense>,
                },
            ],
        },
        {
            path: 'dashboard',
            element: <Suspense><Private /></Suspense>,
            children: [
                {
                    path: '',
                    element: <Suspense><Dashboard /></Suspense>,
                    children: [
                        {
                            path: '',
                            element: <Suspense><Products /></Suspense>,
                        },
                        {
                            path: 'Popular-product',
                            element: <Suspense><Popular_product /></Suspense>,
                        },
                        {
                            path: 'profile',
                            element: <Suspense><DashboardProfile /></Suspense>,
                        },

                    ]
                }
            ]
        },

    ]);
};

export default RouteController;
