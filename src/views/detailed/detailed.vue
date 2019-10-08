<!--
 * @Date: 2019-10-09 01:57:57
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:28:03
 -->
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
    <ul class="people-warp box" v-for="item in 2" :key="item">
      <li>
        <img src="../../static/img/customer-icon.png" alt="">
      </li>
      <li class="perple-content">
        <div class="perple-content-item perple-content-title">用户账号：15712074625</div>
        <div class="perple-content-item">用户等级：4级</div>
        <div class="perple-content-item">团队详细：15人/12台</div>
        <div class="perple-content-item">加入时间：2019/08/04 12:00</div>
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
  @import "../../static/css/top-title.css";
  .detailed-main{
    background: #F2F2F2;
    padding: 0 23px 0 27px;
    padding-top: 45px;
  }
  .people-warp{
    padding: 50px 38px 50px;
    background: #ffffff;
    margin-top: 41px;
    border-radius: 6Px;
    align-items: center;
  }
  .perple-content{
    margin-left: 38px;
  }
  .perple-content-item{
    margin-bottom: 12px;
    color: #999999;
    font-size: 24px;
  }
  .perple-content-title{
    font-size: 26px;
    color: #333333;
  }
</style>
