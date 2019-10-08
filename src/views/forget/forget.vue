<template>
  <div class="hello">
    <h1>忘记密码</h1>
  </div>
</template>

<script>
export default {
    name: 'forget',
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
