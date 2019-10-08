<!--
 * @Date: 2019-10-08 22:34:07
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:11:33
 -->
<template>
    <div id="app">
        <div class="app-title-warp" v-show="showTitle">
            <i class="iconleft iconfont" @click="comeBlack()"></i>
            <span>{{getTitle}}</span>
        </div>
        <router-view class="router-view" />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    methods: {
        comeBlack () {
            this.$router.go(-1);
        }
    },
    computed: {
        getTitle () {
            console.log(this.$route);
            return this.$route.meta.title;
        },
        showTitle () {
            return this.$route.meta.title !== '登录';
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
    .app-title-warp{
        line-height: 88px;
        background: #ffffff;
        width: 100vw;
        text-align: center;
        font-size: 36px;
        color: #333333;
        border-bottom: 1px solid #ECECEC;
    }
    .app-title-warp .iconfont{
        position: absolute;
        left: 18px;
        font-size: 50px;
        font-weight: bold;
    }

    .router-view {
        height: calc(100vh - 88px) !important;
    }
</style>
