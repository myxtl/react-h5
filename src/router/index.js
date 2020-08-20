/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 14:29:59
 */
import Home from '../pages/Home';
import Category from '../pages/Category';
import GoodsDetail from '../pages/GoodsDetail';
import Cart from '../pages/Cart';
import User from '../pages/User';
import Login from '../pages/Login';
import Register from '../pages/Register';


const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        hasTab: true
    },
    {
        path: '/goodsDetail/:id',
        name: 'goodsDetail',
        component: GoodsDetail,
        hasTab: false
    },
    {
        path: '/category',
        name: 'category',
        component: Category,
        hasTab: false
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        hasTab: true
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        hasTab: true
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        hasTab: false
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        hasTab: false
    }
]

export default routes;