<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 02:49:38
 -->
<template>
    <div class="invitation-container">
        <div class="code-wrap">
            <img src="../../static/img/customer-icon.png" alt="二维码">
            <p>我的邀请码：1273</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Invitation',
    data () {
        return {};
    }
};
</script>
<style lang="scss">
    .invitation-container {
        background: #f6f6f6;
        height: 100vh;
        .code-wrap {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            p {
                margin-top: 20px;
            }
        }
    }
</style>
