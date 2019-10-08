<!--
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-02 15:39:37
-->
<template>
    <div id="app">
        <headerVue v-if="isShowHeader" />
        <router-view/>
        <FooterVue v-if="isShowFooter" />
    </div>
</template>

<script>
import headerVue from './components/header.vue';
import FooterVue from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        headerVue,
        FooterVue
    },
    data () {
        return {
            isShowHeader: true,
            isShowFooter: true
        };
    },
    watch: {
        '$route' () {
            this.isShowHeader = this.$route.name !== 'register';
            this.isShowFooter = this.$route.name !== 'home' && this.$route.name !== 'register';
        }
    }
};
</script>

<style lang="scss">
  #app{
    background: url('./static/img/bg_pc.png');
    background-size: 100%;
    min-height: 100vh;
    overflow: hidden;
  }
  @media screen and (max-width: 750px) {
    #app{
      background: url('./static/img/bg_mobile.png');
    }
  }
</style>
