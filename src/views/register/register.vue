<template>
  <div class="register-main">
    <ul class="register-warp">
      <li class="user-input-warp">
        <span class="register-tips">手机号码</span>
        <input class="user-input" type="text" placeholder="请输入你的手机号码">
      </li>
      <li class="user-input-warp">
        <span class="register-tips">验证码</span>
        <input class="user-input" type="text" placeholder="请输入验证码">
        <span class="get-code">获取验证码</span>
      </li>
      <li class="user-input-warp">
        <span class="register-tips">昵称</span>
        <input class="user-input" type="text" placeholder="请输入昵称">
      </li>
      <li class="user-input-warp">
        <span class="register-tips">推荐人</span>
        <input class="user-input" type="text" placeholder="请输入推荐码">
      </li>
      <li class="user-input-warp">
        <span class="register-tips">密码</span>
        <input class="user-input" type="text" placeholder="请输入密码">
      </li>
      <li class="user-input-warp">
        <span class="register-tips">确认密码</span>
        <input class="user-input" type="text" placeholder="请确认密码">
      </li>
      <li class="register-btn" @click="goToPage('/myCustomer')">
        确定
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'register',
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
  @import "../../static/css/register.css";
  .register-main .user-input{
    text-indent: 120px;
  }
  .register-tips{
    position: absolute;
    line-height: 80px;
    font-size: 25px;
    font-weight: bold;
    color: #333333;
  }
</style>
