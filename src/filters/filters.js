/*
 * @Date: 2019-08-26 23:27:34
 * @LastEditors: fashandian
 * @LastEditTime: 2019-08-27 21:06:08
 */
const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
let valCodePosition = 0;
// 校验身份证号码（只需调用IdCardValidate(idCard),把号码传入即可）
export function idCardValidate (idCard) {
    if (idCard.length === 15) {
        return isValidityBrithBy15IdCard(idCard);
    } else if (idCard.length === 18) {
        var _idCard = idCard.split('');
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(_idCard)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isValidityBrithBy18IdCard (idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    if (tempDate.getFullYear() !== parseFloat(year) ||
        tempDate.getMonth() !== parseFloat(month) - 1 ||
        tempDate.getDate() !== parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}

function isValidityBrithBy15IdCard (idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    if (tempDate.getYear() !== parseFloat(year) ||
        tempDate.getMonth() !== parseFloat(month) - 1 ||
        tempDate.getDate() !== parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}

function isTrueValidateCodeBy18IdCard (_idCard) {
    var sum = 0;
    if (_idCard[17].toLowerCase() === 'x') {
        _idCard[17] = 10;
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * _idCard[i];
    }
    valCodePosition = sum % 11;
    if (_idCard[17] === ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
// 是否为中文
export function isChinese (value) {
    var regex = /^[\u0391-\uFFE5]+$/;
    return regex.test(value);
}

// 是否为4-20个字符，由英文字母（不区分大小写）、数字或下划线组成
export function isValidateAccount (value) {
    var regex = /\w{4,20}$/i;
    return regex.test(value);
}

// 是否为8-20个字符，必由英文字母（区分大小写），和数字或符号组成
export function isValidatePassword (value) {
    var reg = /[a-zA-Z]/; // 是否含有字母
    var regex = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[(\\)])+$)([^(0-9a-zA-Z)]|[(\\)]|[a-zA-Z]|[0-9]){8,20}$/; // 是否含有字母、数字、符号任何混合两种以上
    if (reg.test(value) && regex.test(value)) {
        return true;
    } else {
        return false;
    }
}

// 是否为6位和数字组成
export function isValidatePayPassword (value) {
    var reg = /[0-9]{6}$/; // 是否含有字母

    if (reg.test(value)) {
        return true;
    } else {
        return false;
    }
}

// 邮箱验证
export function checkEmail (value) {
    // const regex = /^[a-zA-Z0-9_.-]+@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-z0-9]+$/i;
    const regex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/i;
    return regex.test(value);
}
/**
 * 比较两者时间是否正确
 * starTime 开始时间
 * endTime  结束时间
 */
export function orderTime (starTime, endTime) {
    let starTimeInt = parseInt(new Date(starTime).getTime() / 1000);
    let endTimeInt = parseInt(new Date(endTime).getTime() / 1000);
    let bo = starTimeInt < endTimeInt;
    return bo;
}
// 判断是否是正确的电话号码
export function isMob (value) {
    // const regex = /^0?(13[0-9]|17[07]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/;
    const regex = /^1[3456789]\d{9}$/gi;
    return regex.test(value);
}
export function formatPrice (value) {
    if (typeof value === 'string') {
        let num = parseFloat(value);
        return num.toFixed(2);
    } else {
        if (!value) {
            return 0.00;
        } else {
            return value.toFixed(2);
        }
    }
}
export function formatPayType (str) { // 过滤后台支付方式
    let objArr = [];
    if (str) {
        const arr = str.split(',');
        arr.forEach(item => {
            if (item === '1') {
                objArr.push({
                    id: 1,
                    name: '支付宝'
                });
            } else if (item === '2') {
                objArr.push({
                    id: 2,
                    name: '转账支付'
                });
            } else if (item === '3') {
                objArr.push({
                    id: 3,
                    name: '平台担保'
                });
            }
        });
    }
    return objArr;
}
export function formatDeliverType (str) {
    let objArr = [];
    if (str) {
        const arr = str.split(',');
        arr.forEach(item => {
            if (item === '1') {
                objArr.push({
                    id: 1,
                    name: this.$t('settlement.express')
                });
            }
            /* else if (item == '2') {
                objArr.push({
                    id: 2,
                    name: this.$t('settlement.self')
                })
            } else if (item == '3') {
                objArr.push({
                    id: 3,
                    name: '就近配送'
                })
            } */
        });
    }

    return objArr;
}

export function sensitive (str) { // 加密
    let dem = str[0] + '******' + str[str.length - 1];
    return dem;
}
export function phoneCodeVerification (str) { // 手机验证码
    let dem = str.length === 4 ? 1 : false;
    return dem;
}
// 筛选分类
export function searchTitle (str) {
    let obj = {
        Classification_1: '一级分类',
        Classification_2: '二级分类',
        Classification_3: '三级分类',
        priceInterval: '价格区间'
    };
    return obj[str];
}
// 筛选支付方式
export function payType (str) {
    let obj = {
        'Alipay': '支付宝',
        'WeChat': '微信'
    };
    return obj[str];
}
// 判断是否mp4
export function isVideo (val) {
    let desc = /\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/;
    return desc.test(val);
}
// 验证银行卡
export function luhnCheck (bankno) {
    var lastNum = bankno.substr(bankno.length - 1, 1); // 取出最后一位（与luhn进行比较）
    var first15Num = bankno.substr(0, bankno.length - 1); // 前15或18位
    var newArr = [];
    for (var i = first15Num.length - 1; i > -1; i--) { // 前15或18位倒序存进数组
        newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = []; // 奇数位*2的积 <9
    var arrJiShu2 = []; // 奇数位*2的积 >9
    var arrOuShu = []; // 偶数位数组
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 === 1) { // 奇数位
            if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
            else arrJiShu2.push(parseInt(newArr[j]) * 2);
        } else arrOuShu.push(newArr[j]);
    }

    var jishuChild1 = []; // 奇数位*2 >9 的分割之后的数组个位数
    var jishuChild2 = []; // 奇数位*2 >9 的分割之后的数组十位数
    for (var h = 0; h < arrJiShu2.length; h++) {
        jishuChild1.push(parseInt(arrJiShu2[h]) % 10);
        jishuChild2.push(parseInt(arrJiShu2[h]) / 10);
    }

    var sumJiShu = 0; // 奇数位*2 < 9 的数组之和
    var sumOuShu = 0; // 偶数位数组之和
    var sumJiShuChild1 = 0; // 奇数位*2 >9 的分割之后的数组个位数之和
    var sumJiShuChild2 = 0; // 奇数位*2 >9 的分割之后的数组十位数之和
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }

    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }

    for (var p = 0; p < jishuChild1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishuChild1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishuChild2[p]);
    }
    // 计算总和
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

    // 计算luhn值
    var k = parseInt(sumTotal) % 10 === 0 ? 10 : parseInt(sumTotal) % 10;
    var luhn = 10 - k;

    if (lastNum === luhn) {
        return true;
    } else {
        return false;
    }
}
