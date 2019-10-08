<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:57:02
 -->
<template>
    <div class="order-msg">
        <div class="order-code">
            <span>订单：26382638488475</span>
            <span class="order-status">订单状态</span>
        </div>
        <div class="goods-msg">
            <img src="../static/img/customer-icon.png" alt="商品图标">
            <div>
                <p class="name">商品名称</p>
                <p class="money-number-wrap">
                    <span class="money">￥100</span>
                    <span class="number">x2</span>
                </p>
                <p class="time">2019-01-14 12:00:00</p>
            </div>
        </div>
        <div class="price"  :class="pricePosition">
            <span>总计：¥200</span>
            <div class="btn-group" v-if="isNeedPay">
                <button>取消订单</button>
                <button @click="goToPage('/settlement')">立即支付</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderMsg',
    props: {
        isNeedPay: Boolean
    },
    data () {
        return {};
    },
    computed: {
        pricePosition () {
            return {
                'flex-between': this.isNeedPay,
                'flex-end': !this.isNeedPay
            };
        }
    },
    methods: {
        goToPage (path) {
            this._jumpOtherUrl(path);
        }
    }
};
</script>
<style lang="scss">
    .order-msg {
        background: #fff;
        border: 1px solid rgba(238, 238, 238, 1);
        border-radius: 10px;
        padding: 0 26px;
        .order-code {
            padding: 25px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 30px;
            border-bottom: 1PX solid #f7f7f7;
            .order-status {
                color: #D02D28;
            }
        }
        .goods-msg {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1PX solid #f7f7f7;
            padding: 26px 0;
            > img {
                margin-right: 30px;
            }
            .name {
                color: #333333;
                font-size: 30px;
                font-weight: 700;
            }
            .money-number-wrap {
                margin-top: 50px;
                .money {
                    color: #D02D28;
                    font-size: 30px;
                    margin-right: 42px;
                }
                .number {
                    color: #D02D28;
                    font-size: 24px;
                }
            }
            .time {
                color: #999999;
                font-size: 24px;
                margin-top: 44px;
            }
        }
        .price {
            padding: 40px 0;
            > span {
                font-size: 30px;
                color: #D02D28;
            }
            .btn-group {
                button:not(:last-child) {
                    margin-right: 50px;
                }
            }
            button {
                outline: 0;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                -webkit-appearance: none;
                text-align: center;
                -webkit-transition: .1s;
                transition: .1s;
                font-weight: 500;
                background: #fff;
                color: #D02D28;
                font-size: 24px;
                padding: 13px 23px;
                border-radius: 25px;
                border: 2px solid #D02D28;
            }
        }
    }
    .flex-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex-end {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>
