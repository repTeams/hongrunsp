<template>
    <div class="my-self-nav-main">
      <ul class="my-self-nav-warp">
        <li class="my-self-nav box">
          <div class="my-self-nav-left">
            <img src="../../static/img/customer-icon.png" alt="">
          </div>
          <div class="flex my-self-content-item">
            <p>用户名</p>
            <p>等级：2级</p>
          </div>
          <div>
            <p>号码：15736655418</p>
            <p>余额：100</p>
          </div>
        </li>
        <li class="my-self-money-nav box">
          <div class="flex">
            <p>100</p>
            <p>总收益</p>
          </div>
          <div class="flex">
            <p>100</p>
            <p>已提现</p>
          </div>
          <div class="flex">
            <p>100</p>
            <p>未提现</p>
          </div>
        </li>
      </ul>
      <ul class="my-self-content-warp">
        <li class="my-self-content-list box" @click="goToPage('myOrder')">
          <div>全部订单</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="my-self-content-list box" @click="goToPage('myOrder')">
          <div>我的资料</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="my-self-content-list box" @click="goToPage('myTeam')">
          <div>我的团队</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="my-self-content-list box" @click="goToPage('presentation')">
          <div>我的钱包</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="my-self-content-list box" @click="goToPage('invitation')">
          <div>邀请码</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="my-self-content-list box" @click="goToPage('detailed')">
          <div>积分记录</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="my-self-content-list box">
          <div>区域代理</div>
          <i class="iconright iconfont"></i>
        </li>
        <li class="un-login" @click="goToPage('login')">
          退出登录
        </li>
      </ul>
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
        },
        goToPage (path) {
            this._jumpOtherUrl(path);
        }
    }
};
</script>
<style land="scss">
  .my-self-nav-main{
    background: #F6F6F6;
  }
  .un-login{
    line-height: 80px;
    margin-top: 20px;
    text-align: center;
    font-size: 32px;
    background: #ffffff;
  }
  .my-self-money-nav{
    text-align: center;
    color: #ffffff;
    line-height: 50px;
    padding-top: 60px;
  }
  .my-self-nav-warp{
    background: url('./img/bg.png');
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .my-self-nav{
    padding-left: 32px;
    font-size: 32px;
    color: #ffffff;
    align-items: center;
    padding-right: 32px;
    line-height: 50px;
  }
  .my-self-nav-left{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }
   .my-self-nav-left img{
     width: 100%;
     height: 100%;
   }
   .my-self-content-item{
     padding-left: 20px;
   }
   .my-self-content-warp .my-self-content-list{
     padding-left: 20px;
     justify-content: space-between;
     font-size: 30px;
     line-height: 80px;
     border-bottom: 1px solid #cccccc;
     background: #ffffff;
     padding: 0 37px;
   }
   .my-self-content-warp .my-self-content-list .iconfont{
     font-size: 30px;
     color: black;
   }
</style>
