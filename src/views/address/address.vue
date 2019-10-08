<template>
  <div class="address-main">
    <ul class="register-warp">
      <li class="user-input-warp">
        <span class="register-tips">收货人</span>
        <input class="user-input" type="text" placeholder="请输入收货人">
      </li>
      <li class="user-input-warp">
        <span class="register-tips">电话号码</span>
        <input class="user-input" type="text" placeholder="请输入电话号码">
      </li>
      <li class="user-input-warp">
        <span class="register-tips">收货地址</span>
        <input class="user-input" type="text" placeholder="请输入收货地址">
        <i class="iconright iconfont"></i>
      </li>
      <li class="user-input-warp">
        <span class="register-tips">详细地址</span>
        <input class="user-input" type="text" placeholder="请输入详细地址">
      </li>
      <li class="register-btn">
        确定
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'newAddress',
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
  .address-main .user-input{
    text-indent: 120px;
  }
  .address-main .register-warp .user-input-warp .iconfont{
    position: absolute;
    right: 0;
    line-height: 80px;
    font-size: 28px;
  }
  .register-tips{
    position: absolute;
    line-height: 80px;
    font-size: 25px;
    font-weight: bold;
    color: #333333;
  }
</style>
