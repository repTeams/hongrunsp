<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:57:31
 -->
<template>
  <div class="my-team-main">
    <ul class="box top-title-warp">
      <li class="flex">
        <div class="top-title">20</div>
        <div class="top-content">团队人数</div>
      </li>
      <li class="flex">
        <div class="top-title">20283</div>
        <div class="top-content">团队总销量</div>
      </li>
    </ul>
    <ul class="team-content-warp">
      <li class="box team-content-item team-content-item-first" @click="goToPage('/invitation')">
        <div class="team-content-item-key">邀请码</div>
        <i class="iconright iconfont team-content-item-icon"></i>
      </li>
      <li class="box team-content-item" @click="goToPage('/detailed')">
        <div class="team-content-item-key">我的团队</div>
        <i class="iconright iconfont team-content-item-icon"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'my-team',
    data () {
        return {};
    },
    methods: {
        goToPage (path) {
            this._jumpOtherUrl(path);
        }
    }
};
</script>
<style land="scss">
  @import "../../static/css/top-title.css";
  .my-team-main{
    background: #F2F2F2;
    padding: 0 23px 0 27px;
    padding-top: 38px;
  }
  .team-content-warp{
    margin-top: 41px;
  }
  .team-content-item{
    line-height: 104px;
    background: #ffffff;
    justify-content: space-between;
  }
  .team-content-item-first{
    border-bottom: 1px solid #E7E7E7;
  }
  .team-content-item-key{
    color: #333333;
    font-size: 24px;
    font-weight: bold;
    padding-left: 54px;
  }
  .team-content-item-icon{
    font-size: 28px;
    color: #333333;
    padding-right: 20px;
    font-weight: bold;
  }
</style>
