/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-03 23:39:02
 */
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from '../filters/filters.js'; // global filters
import '@/static/css/reset.css';
import '@/static/css/animated.css';
import '@/static/css/common.scss';
// import '@/static/font/iconfont.css';
import axios from 'axios';
import router from '../router';
import qs from 'qs';

// import VueQArt from 'vue-qart'
// Vue.use(VueQArt);
// if (location.href.indexOf('localhost') > -1) {
axios.defaults.baseURL = 'http://etfe.ddblock.pro';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// }
// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.data && config.method === 'post' && config.data.constructor !== FormData) {
        // 判断config.data.constructor不是formdata，则不qs格式化data
        config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }); // 数组需要格式化一下，格式化模式有三种：indices、brackets、repeat
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code === 4003) { // 后台接口拦截
            if (router.app._route.name === 'determine-order' || router.app._route.name === 'shopping-cart') {
                router.replace({
                    path: '/login'
                });
            } else {
                return response.data;
            }
        } else {
            return response.data;
        }
    });
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(Element, {
    size: 'medium' // set element-ui default size
});
// if (location.href.indexOf('localhost') > -1) {
Vue.prototype.$baseUrl = 'http://etfe.ddblock.pro';
// } else {'
// Vue.prototype.$baseUrl = '';
// }
// Vue.prototype.defaultImg = 'this.src="' + require('@/static/img/defaultImg.png') + '"'; // 默认图片
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

function upToTop () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    backTop(scrollTop);
    // document.documentElement.scrollTop = 0;
};

function backTop (scrollTopPar) {
    setTimeout(() => {
        let ispeed = Math.floor(scrollTopPar / 10);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTopPar - ispeed;
        if (scrollTopPar <= 10) {
            document.documentElement.scrollTop = 0;
        } else {
            upToTop();
        }
    }, 16);
};

function jumpOtherUrl (pathName, query = {}) {
    this.$router.push({
        path: pathName,
        query: query
    });
}

function autoTips (res) { // 自动提示
    let typeName = 'warning';
    if (res.code === 200) {
        typeName = 'success';
    }
    this.$message({
        message: res.msg,
        type: typeName
    });
}

function showLoding () {
    const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return loading;
}
Vue.prototype._autoTips = autoTips;
Vue.prototype._upToTop = upToTop;
Vue.prototype._jumpOtherUrl = jumpOtherUrl;
Vue.prototype._showLoding = showLoding;
export default {};
