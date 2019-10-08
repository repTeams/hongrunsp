<!--
 * @Date: 2019-10-09 00:43:16
 * @LastEditors: fashandian
 * @LastEditTime: 2019-10-09 01:43:18
 -->
<template>
    <div class="add-bank-container">
        <p>请添加本人持有的银行卡</p>
        <ul>
            <li>
                <label>持卡人：</label>
                <span>伍杰</span>
            </li>
            <li>
                <label>银行卡号：</label>
                <input type="text" placeholder="请输入银行卡号">
            </li>
            <li>
                <label>开户行：</label>
                <input type="text" placeholder="例如：工商银行股份有限公司杭州分行">
            </li>
        </ul>
        <div class="btn-group">
            <button>确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddBank',
    data () {
        return {};
    }
};
</script>
<style lang="scss">
    .add-bank-container {
        background: #f6f6f6;
        height: 100vh;
        > p {
            padding: 20px 40px;
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
