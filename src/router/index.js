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


const router = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        isTab: true
    },
    {
        path: '/goodsDetail/:id',
        name: 'goodsDetail',
        component: GoodsDetail,
        isTab: false
    },
    {
        path: '/category',
        name: 'category',
        component: Category,
        isTab: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        isTab: true
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        isTab: true
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        isTab: false
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        isTab: false
    }
]

export default router