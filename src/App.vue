<!--
 * @Date: 2019-10-08 22:34:07
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 18:32:19
 -->
<template>
    <div id="app">
        <div class="app-title-warp" v-show="showTitle">
            <i class="iconleft iconfont" @click="comeBlack()"></i>
            <span>{{getTitle}}</span>
        </div>
        <router-view class="router-view" />
        <ul class="box footer-nav-warp">
            <li class="flex" @click="goToPage('home')">
                <i class="iconbank iconfont"></i>
                <div>首页</div>
            </li>
            <li class="flex" @click="goToPage('invitation')">
                <i class="iconbank iconfont"></i>
                <div>推广</div>
            </li>
            <li class="flex" @click="goToPage('mySelf')">
                <i class="iconbank iconfont"></i>
                <div>我的</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    methods: {
        comeBlack() {
            this.$router.go(-1);
        },
        goToPage(path) {
            this._jumpOtherUrl(path);
        }
    },
    computed: {
        getTitle() {
            console.log(this.$route);
            return this.$route.meta.title;
        },
        showTitle() {
            return this.$route.meta.title !== "登录";
        }
    }
};
</script>

<style lang="scss">
#app {
    background-size: 100%;
    min-height: 100vh;
    overflow: hidden;
}
.footer-nav-warp {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    left: 0;
    padding: 20px 0;
    height: 120px;
    border-top: 1px solid #cccccc;
    background: #fff;
}
.footer-nav-warp .iconfont {
    font-size: 30px;
    line-height: 50px;
}
.app-title-warp {
    line-height: 88px;
    background: #ffffff;
    width: 100vw;
    text-align: center;
    font-size: 36px;
    color: #333333;
    border-bottom: 1px solid #ececec;
}
.app-title-warp .iconfont {
    position: absolute;
    left: 18px;
    font-size: 50px;
    font-weight: bold;
}

.router-view {
    height: calc(100vh - 88px - 120px) !important;
}
</style>
