/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 17:38:35
 */
export default {
    baseUrl: {
        dev: 'http://192.168.0.112:5555',
        pro: 'http://192.168.0.112:5555',
    },
    tabList: [{
            icon: 'iconfont icon-shouye',
            name: '首页',
            url: '/home'
        },
        {
            icon: 'iconfont icon-fenlei',
            name: '分类',
            url: '/category'
        },
        {
            icon: 'iconfont icon-gouwuche',
            name: '购物车',
            url: '/cart'
        },
        {
            icon: 'iconfont icon-wode',
            name: '我的',
            url: '/user'
        }
    ]
}