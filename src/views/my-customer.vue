<!--
 * @Date: 2019-10-08 23:05:45
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-08 23:55:29
 -->
<template>
    <div>
        <section class="msg-title-container padding">
            <span>客户信息</span>
            <span>TA的消费订单/金额</span>
        </section>
        <ul class="msg-content-container padding">
            <li>
                <div>
                    <img src="../assets/logo.png" alt="客户头像">
                    <p>
                        <span>客户001</span>
                        <span>2018-08-20 10:06:30</span>
                    </p>
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
    .padding {
        padding: 0.2rem 0.4rem;
    }
    .msg-title-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        span:last-child {
            color:#bebebe;
        }
    }
    .msg-content-container {
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            > p {
                color: #f37a7a;
            }
        }
        p {
            span {
                color: #cbcbcb;
            }
        }
    }
</style>
