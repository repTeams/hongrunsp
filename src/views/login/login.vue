<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:57:40
 -->
<template>
  <div class="login-main box">
    <ul class="login-warp">
      <li class="login-title">
        <img class="login-img" src="./img/title.png" alt="">
      </li>
      <li class="user-input-warp">
        <i class="iconphone iconfont"></i>
        <input class="user-input" type="text" placeholder="请输入你的手机号码">
      </li>
      <li class="user-input-warp">
        <i class="iconpassword iconfont"></i>
        <input class="user-input" type="text" placeholder="请输入密码">
      </li>
      <li class="login-btn">登录</li>
      <li class="box other-btn-warp">
        <div @click="goToPage('/forget')">忘记密码</div>
        <div @click="goToPage('/login')">进入首页</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'login',
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
  .login-main{
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .login-main .login-warp{
    width: 80vw;
    height: 50vh;
    margin: 0 auto;
  }
  .login-main .login-title{
    text-align: center;
    padding-bottom: 40px;
  }
  .login-main .login-img{
    width: 259px;
    height: 45px;
  }
  .login-main .user-input-warp{
    position: relative;
    margin-bottom: 30px;
  }
  .login-main .user-input-warp .iconfont{
    font-size: 30px;
    color: #999999;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .login-main .user-input{
    line-height: 80px;
    width: 100%;
    font-size: 24px;
    background: #F2F2F2;
    border: 0;
    text-indent: 60px;
  }
  .login-main .login-btn{
    width: 100%;
    line-height: 80px;
    background: #D02D28;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
  }
  .login-main .other-btn-warp{
    justify-content: space-between;
    font-size: 25px;
    color: #D02D28;
    font-weight: bold;
    padding-top: 40px;
  }
</style>
