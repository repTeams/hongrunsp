<template>
  <div class="hello">
    <h1>我这里是我的团队的啦</h1>
  </div>
</template>

<script>
export default {
    name: 'my-team',
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
  .active-block{
    padding:10px;
  }
</style>
