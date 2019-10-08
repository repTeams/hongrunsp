<template>
  <div class="detailed-main">
    <ul class="box top-title-warp">
      <li class="flex">
        <div class="top-title">1572340820</div>
        <div class="top-content">我的上级</div>
      </li>
      <li class="flex">
        <div class="top-title">3台</div>
        <div class="top-content">直推台数</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'detailed',
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
  .detailed-main{
    background: #F2F2F2;
    min-height: 100vh;
    padding: 0 23px 0 27px;
  }
  .top-title-warp{
    background: #ffffff;
    text-align: center;
  }
  .top-title{
    color: #D02D28;
    font-size: 36px;
    padding-top: 45px;
    line-height: 46px;
    padding-bottom: 36px;
  }
  .top-content{
    font-size: 30px;
    color: #333333;
    padding-bottom: 32px;
  }
</style>
