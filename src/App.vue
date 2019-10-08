<!--
 * @Date: 2019-10-08 22:34:07
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-08 23:19:50
 -->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {}
};
</script>

<style lang="scss">
    #app {
        background-size: 100%;
        min-height: 100vh;
        overflow: hidden;
    }
</style>
