<template>
  <div class="forget-main">
    <ul class="register-warp">
      <li class="user-input-warp">
        <i class="iconphone iconfont"></i>
        <input class="user-input" type="text" placeholder="请输入你的手机号码">
      </li>
      <li class="user-input-warp">
        <i class="iconcode iconfont"></i>
        <input class="user-input" type="text" placeholder="请输入验证码">
        <span class="get-code">获取验证码</span>
      </li>
      <li class="user-input-warp">
        <i class="iconpassword iconfont"></i>
        <input class="user-input" type="text" placeholder="请设置密码">
      </li>
      <li class="register-btn">
        确定
      </li>
    </ul>
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
  @import "../../static/css/register.css";
  .forget-main .register-warp .user-input{
    text-indent: 80px;
  }
</style>
