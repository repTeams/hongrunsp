<template>
  <div class="hello">
    <h1>我这里添加银行卡</h1>
  </div>
</template>

<script>
export default {
    name: 'addBank',
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
