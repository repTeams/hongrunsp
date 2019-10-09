<!--
 * @Date: 2019-10-08 23:29:04
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 19:15:21
 -->
<template>
    <div class="home-main">
        <img src="./img/home.jpg" alt width="100%" />
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {};
    },
    methods: {
        changeLand(tex) {
            console.log(tex);
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style land="scss">
.home-main {
    overflow: scroll;
}
</style>
