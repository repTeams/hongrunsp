<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 19:08:38
 -->
<template>
    <div class="settlement-container">
        <div class="receiver-msg-container" @click="goToPage('/forget')">
            <i class="iconfont iconaddress icon-css"></i>
            <div class="receiver-msg">
                <p>收货人：伍杰 15712074625</p>
                <p>收货地址：广东省深圳市福田区 中航路世纪汇都会轩901</p>
            </div>
            <i class="iconfont iconright icon-css" style="font-weight: bold;"></i>
        </div>
        <order-msg-vue :isNeedPay="false" />
        <ul class="pay-type-container">
            <li>钱包余额</li>
            <li>支付宝</li>
        </ul>
        <div class="pay-price-container">
            <span>总计：￥200</span>
            <button>立即支付</button>
        </div>
    </div>
</template>

<script>
import orderMsgVue from "../../components/order-msg.vue";

export default {
    name: "Settlement",
    components: {
        orderMsgVue
    },
    data() {
        return {};
    }
};
</script>
<style lang="scss">
.settlement-container {
    background: #f6f6f6;
    padding: 20px 30px 0;
    position: relative;
    .receiver-msg-container {
        background: #fff;
        border-radius: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 0;
        margin-bottom: 20px;
        // border-bottom: 2PX dashed red;
        position: relative;
        &::after {
            position: absolute;
            display: block;
            content: "";
            width: 100%;
            // background: linear-gradient(
            //     to right,
            //     #52c8ff,
            //     #52c8ff 20px,
            //     #ff5073 20px,
            //     #ff5073
            // );
            background-image: repeating-linear-gradient(
                to right,
                #52c8ff,
                #52c8ff 40px,
                transparent 40px,
                transparent 60px,
                #ff5073 60px,
                #ff5073 100px,
                transparent 100px,
                transparent 120px
            );
            background-size: 120px 100%;
            height: 4px;
            bottom: 0;
        }
        i {
            width: 20vw;
            text-align: center;
        }
        .receiver-msg {
            p {
                line-height: 32px;
                &:not(:last-child) {
                    margin-bottom: 16px;
                }
            }
        }
    }
    .pay-type-container {
        background: #fff;
        padding: 41px 51px;
        margin-top: 20px;
        border-radius: 10px;
        li {
            padding: 45px 0;
            color: #333333;
            &:first-child {
                padding-top: 0;
            }
            &:last-child {
                padding-bottom: 0;
            }
            &:not(:last-child) {
                border-bottom: 2px solid #ececec;
            }
        }
    }
    .pay-price-container {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        width: 100vw;
        padding-left: 86px;
        border-top: 1px solid #ececec;
        span {
            font-size: 30px;
            color: #d02d28;
        }
        button {
            background: #d02d28;
            color: #fff;
            font-size: 30px;
            outline: 0;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            -webkit-appearance: none;
            text-align: center;
            -webkit-transition: 0.1s;
            transition: 0.1s;
            font-weight: 500;
            padding: 35px 45px;
            border: 1px solid #d02d28;
        }
    }
}
</style>
