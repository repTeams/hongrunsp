<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 01:53:19
 -->
<template>
    <div class="presentation-container">
        <div>
            <img src="" alt="">
            点击添加银行卡
            <img src="" alt="">
        </div>
        <ul>
            <li>
                <label>可提现金额：</label>
                <span>1000元</span>
            </li>
            <li>
                <label>提现金额：</label>
                <input type="text" placeholder="输入提现金额">
                <span>元</span>
            </li>
            <li>
                <label>手机号：</label>
                <span>157****4625</span>
                <button>获取手机验证码</button>
            </li>
            <li>
                <label>验证码：</label>
                <span>2343</span>
            </li>
        </ul>
        <div class="btn-group">
            <button>确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Presentation',
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
<style lang="scss">
    .presentation-container {
        background: #f6f6f6;
        ul {
            background: #fff;
            padding: 0 40px;
            li {
                padding: 40px 0;
                border-bottom: 1px solid #f6f6f6;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 26px;
                label {
                    width: 30vw;
                }
                input {
                    border: 0;
                    outline: 0;
                    width: calc(100% - 30vw);
                    &::-webkit-input-placeholder {
                        color: #aeaeae;
                    }
                    font-size: 26px;
                }
            }
        }
        .btn-group {
            text-align: center;
            margin-top: 100px;
            button {
                display: inline-block;
                padding: 26px 243px;
                background: #D02D28;
                border-radius:10px;
                border: 1px solid #D02D28;
                outline: 0;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                -webkit-appearance: none;
                text-align: center;
                -webkit-transition: .1s;
                transition: .1s;
                font-weight: 500;
                color: #fff;
            }
        }
    }
</style>
