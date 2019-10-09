<template>
  <div class="home-main">
    <img src="./img/home.jpg" alt="">
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {};
    },
    methods: {
        changeLand (tex) {
            console.log(tex);
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style land="scss">
  .home-main{
    overflow: scroll;
  }
</style>
