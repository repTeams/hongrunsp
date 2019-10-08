<template>
  <div class="hello">
    <h1>我这里关于我们</h1>
  </div>
</template>

<script>
export default {
    name: 'aboutUs',
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
