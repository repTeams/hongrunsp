/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-08 22:55:44
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const vueRouter = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: '首页'
            },
            component: resolve => require(['@/views/home/Home'], resolve) // 路由懒加载
        },
        {
            path: '/myCustomer',
            name: 'myCustomer',
            meta: {
                title: '我的顾客'
            },
            component: resolve => require(['@/views/my-customer'], resolve) // 路由懒加载
        },
        {
            path: '/myTeam',
            name: 'myTeam',
            meta: {
                title: '我的团队'
            },
            component: resolve => require(['@/views/my-team/my-team'], resolve) // 路由懒加载
        },
        {
            path: '/presentation',
            name: 'presentation',
            meta: {
                title: '提现'
            },
            component: resolve => require(['@/views/presentation/presentation'], resolve) // 路由懒加载
        },
        {
            path: '/invitation',
            name: 'invitation',
            meta: {
                title: '邀请注册'
            },
            component: resolve => require(['@/views/invitation/invitation'], resolve) // 路由懒加载
        },
        {
            path: '/addBank',
            name: 'addBank',
            meta: {
                title: '添加银行卡'
            },
            component: resolve => require(['@/views/add-bank/add-bank'], resolve) // 路由懒加载
        },
        {
            path: '/myOrder',
            name: 'myOrder',
            meta: {
                title: '我的订单'
            },
            component: resolve => require(['@/views/my-order/my-order'], resolve) // 路由懒加载
        },
        {
            path: '/address',
            name: 'address',
            meta: {
                title: '新增地址'
            },
            component: resolve => require(['@/views/address/address'], resolve) // 路由懒加载
        },
        {
            path: '/settlement',
            name: 'settlement',
            meta: {
                title: '结算详情'
            },
            component: resolve => require(['@/views/settlement/settlement'], resolve) // 路由懒加载
        },
        {
            path: '/register',
            name: 'register',
            meta: {
                title: '注册'
            },
            component: resolve => require(['@/views/register/register'], resolve) // 路由懒加载
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            meta: {
                title: '关于我们'
            },
            component: resolve => require(['@/views/about-us/about-us'], resolve) // 路由懒加载
        },
        {
            path: '/forget',
            name: 'forget',
            meta: {
                title: '忘记密码'
            },
            component: resolve => require(['@/views/forget/forget'], resolve) // 路由懒加载
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登录'
            },
            component: resolve => require(['@/views/login/login'], resolve) // 路由懒加载
        },
        {
            path: '/detailed',
            name: 'detailed',
            meta: {
                title: '团队明细'
            },
            component: resolve => require(['@/views/detailed/detailed'], resolve) // 路由懒加载
        }
    ]
});
vueRouter.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        window.scrollTo(0, 0);
        document.title = to.meta.title;
    }
    next();
});
export default vueRouter;
