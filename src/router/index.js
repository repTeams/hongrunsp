/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-31 23:50:41
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const vueRouter = new Router({
    routes: [{
        path: '/',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: resolve => require(['@/views/home/Home'], resolve) // 路由懒加载
    },
    {
        path: '/companyIntroduction',
        name: 'companyIntroduction',
        meta: {
            title: '公司介绍'
        },
        component: resolve => require(['@/views/company-introduction/company-introduction'], resolve) // 路由懒加载
    }, {
        path: '/register',
        name: 'register',
        meta: {
            title: '注册'
        },
        component: resolve => require(['@/views/register/register'], resolve) // 路由懒加载
    },
    {
        path: '/cooperation',
        name: 'cooperation',
        meta: {
            title: '合作伙伴'
        },
        component: resolve => require(['@/views/cooperation/cooperation'], resolve) // 路由懒加载
    },
    {
        path: '/newDetail',
        name: 'newDetail',
        meta: {
            title: '新闻媒体'
        },
        component: resolve => require(['@/views/new/new-detail'], resolve) // 路由懒加载
    },
    {
        path: '/new',
        name: 'new',
        meta: {
            title: '新闻媒体'
        },
        component: resolve => require(['@/views/new/new'], resolve) // 路由懒加载
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        meta: {
            title: '联系我们'
        },
        component: resolve => require(['@/views/contact-us/contact-us'], resolve) // 路由懒加载
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
