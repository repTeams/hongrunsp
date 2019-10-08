<!--
 * @Date: 2019-10-08 23:05:45
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 00:33:56
 -->
<template>
    <div class="container">
        <section class="title-container">
            <span>客户信息</span>
            <span>TA的消费订单/金额</span>
        </section>
        <ul class="content-container">
            <li>
                <div class="customer-msg-wrap">
                    <img src="../static/img/customer-icon.png" alt="客户头像">
                    <div>
                        <p class="name">客户001</p>
                        <p class="time">2018-08-20 10:06:30</p>
                    </div>
                </div>
                <p>3个/88元</p>
            </li>
            <li>
                <div class="customer-msg-wrap">
                    <img src="../static/img/customer-icon.png" alt="客户头像">
                    <div>
                        <p class="name">客户001</p>
                        <p class="time">2018-08-20 10:06:30</p>
                    </div>
                </div>
                <p>3个/88元</p>
            </li>
            <li>
                <div class="customer-msg-wrap">
                    <img src="../static/img/customer-icon.png" alt="客户头像">
                    <div>
                        <p class="name">客户001</p>
                        <p class="time">2018-08-20 10:06:30</p>
                    </div>
                </div>
                <p>3个/88元</p>
            </li>
            <li>
                <div class="customer-msg-wrap">
                    <img src="../static/img/customer-icon.png" alt="客户头像">
                    <div>
                        <p class="name">客户001</p>
                        <p class="time">2018-08-20 10:06:30</p>
                    </div>
                </div>
                <p>3个/88元</p>
            </li>
            <li>
                <div class="customer-msg-wrap">
                    <img src="../static/img/customer-icon.png" alt="客户头像">
                    <div>
                        <p class="name">客户001</p>
                        <p class="time">2018-08-20 10:06:30</p>
                    </div>
                </div>
                <p>3个/88元</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MyCustomer',
    components: {},
    data () {
        return {

        };
    }
};
</script>

<style lang="scss">
    .container {
        background: #f6f6f6;
        height: 100vh;
    }
    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        background: #fff;
        padding: 0.2rem 0.4rem;
        span:last-child {
            color:#bebebe;
        }
    }
    .content-container {
        background: #fff;
        padding: 0 0.4rem;
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #f7f7f7;
            padding: 0.3rem 0;
            > p {
                color: #f37a7a;
            }
        }
        .customer-msg-wrap {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
                border-radius: 50%;
                margin-right: 0.4rem;
                width: 100px;
                height: 100px;
            }
            .time {
                color: #cbcbcb;
            }
        }
        p {

        }
    }
</style>
