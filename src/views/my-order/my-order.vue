<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:12:53
 -->
<template>
    <div class="my-order-container">
        <order-msg-vue :isNeedPay="true"></order-msg-vue>
    </div>
</template>

<script>
import orderMsgVue from '../../components/order-msg.vue';

export default {
    name: 'MyOrder',
    components: {
        orderMsgVue
    },
    data () {
        return {};
    }
};
</script>
<style lang="scss">
    .my-order-container {
        background: #f6f6f6;
        padding: 30px 20px 0;
    }
</style>
