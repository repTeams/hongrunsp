<template>
  <div class="login-main box">
    <ul class="login-warp">
      <li class="login-title">
        <img class="login-img" src="./img/title.png" alt="">
      </li>
      <li class="uiser-input-warp">
        <i class="iconpassword iconfont"></i>
        <input class="user-input" type="text" placeholder="请输入你的手机号码">
      </li>
      <li>
        <input class="user-input" type="text" placeholder="请输入密码">
      </li>
      <li>登录</li>
      <li class="box">
        <div>忘记密码</div>
        <div>进入首页</div>
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
        changeLand (tex) {
            console.log(tex);
            this.$i18n.locale = tex;
        }
    }
};
</script>
<style land="scss">
  .login-main{
    justify-content: center;
    align-content: center;
    height: 100vh;
    flex-direction: column;
  }
  .login-warp{
    width: 80vw;
    height: 50vh;
    margin: 0 auto;
  }
  .login-title{
    text-align: center;
    padding-bottom: 40px;
  }
  .login-img{
    width: 259px;
    height: 45px;
  }
  .uiser-input-warp{
    position: relative;
    margin-bottom: 30px;
  }
  .uiser-input-warp .iconfont{
    font-size: 26px;
    color: #999999;
    position: absolute;
    top: 10px;
    left: 25px;
  }
  .user-input{
    line-height: 40px;
    width: 100%;
    font-size: 16px;
    background: #F2F2F2;
    border: 0;
    text-indent: 60px;
  }
</style>
