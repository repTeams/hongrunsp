<!--
 * @Date: 2019-10-09 00:01:50
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 05:56:27
 -->
<template>
    <div class="presentation-container">
        <div class="add-bank-wrap" @click="goToPage('/addBank')">
            <span>
                <i class="iconfont iconbank icon-css icon-right-inside"></i>
                点击添加银行卡
            </span>
            <i class="iconfont iconright icon-css" style="font-weight: bold;"></i>
        </div>
        <ul>
            <li>
                <label>可提现金额：</label>
                <div class="form-content">
                    <span>1000元</span>
                </div>
            </li>
            <li>
                <label>提现金额：</label>
                <div class="form-content">
                    <input type="text" placeholder="输入提现金额">
                    <span>元</span>
                </div>
            </li>
            <li>
                <label>手机号：</label>
                <div class="form-content">
                    <span>157****4625</span>
                    <button class="btn-presentation">获取手机验证码</button>
                </div>
            </li>
            <li>
                <label>验证码：</label>
                <div class="form-content">
                    <input type="text" placeholder="请输入手机验证码" value="2343">
                </div>
            </li>
        </ul>
        <div class="btn-group">
            <button class="btn-presentation">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'presentation',
    data () {
        return {};
    },
    methods: {
        goToPage (path) {
            this._jumpOtherUrl(path);
        }
    }
};
</script>
<style lang="scss">
    .presentation-container {
        background: #f6f6f6;
        padding-top: 20px;
        .add-bank-wrap {
            background: #fff;
            margin-bottom: 40px;
            padding: 30px 40px;
            display: flex;
            justify-content: space-between;
            align-content: center;
        }
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
                .form-content {
                    text-align: right;
                    width: calc(100% - 30vw);
                }
                input {
                    border: 0;
                    outline: 0;
                    text-align: right;
                    &::-webkit-input-placeholder {
                        color: #aeaeae;
                    }
                    font-size: 26px;
                }
                .btn-presentation {
                    color: #ff497b;
                    border: 1PX solid #ff497b;
                    padding: 10px 20px;
                    background: #fff;
                    border-radius: 4px;
                    margin-left: 20px;
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
                border-radius: 10px;
                border: 1PX solid #D02D28;
                color: #fff;
            }
        }
    }
    .btn-presentation {
        outline: 0;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        -webkit-transition: .1s;
        transition: .1s;
        font-weight: 500;
    }
</style>
