/*
 * @Date: 2019-09-06 18:14:04
 * @LastEditors: fashandian
 * @LastEditTime: 2019-09-07 21:10:49
 */
/**
 * 创建图片验证码
 * @param {DOM} box 图片验证码的父节点
 * @param {number} num 验证码个数
 * @param {number} spotNum 背景斑点个数
 */
function createVerificationCode (box, num = 4, spotNum = 10) {
    if (num < 4) {
        alert('验证码最好要4位及以上！');
        return;
    }

    if (box.className.indexOf('.code-spot') > -1) {
        alert(`传入的元素已包含'code-spot'类名！`);
        return;
    }

    // 移除子节点
    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }

    let verificationCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    let rotate = [-45, -30, -15, 15, 30, 45];
    let codeResult = '';
    // let boxWidth = box.offsetWidth;
    // let boxHeight = box.offsetHeight;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
        let codeRandom = verificationCode[getRandom(10)];
        let codeDom = document.createElement('p');
        codeDom.textContent = codeRandom;
        codeDom.style.width = 100 / num + '%';
        codeDom.style.color = getRandomColor();
        codeDom.style.fontWeight = 'bold';
        codeDom.style.fontSize = getRandom(18, 16);
        codeDom.style.transform = `rotate(${rotate[getRandom(6)]}deg)`;
        codeDom.style.display = 'inline-block';
        fragment.appendChild(codeDom);
        codeResult += codeRandom;
    }
    // for (let i = 0; i < spotNum; i++) {
    //     let spotDom = document.createElement('i');
    //     spotDom.className += ' code-spot';
    //     spotDom.style.backgroundColor = getRandomColor();
    //     spotDom.style.top = getRandom(boxHeight) + 'px';
    //     spotDom.style.left = getRandom(boxWidth) + 'px';
    //     fragment.appendChild(spotDom);
    // }
    box.appendChild(fragment);
    return codeResult;
}

/**
 * 获取随机的16进制颜色值
 */
function getRandomColor (isRealRandom = false) {
    if (!isRealRandom) {
        // 假随机，从给定的颜色里面随机取
        let color = ['#58a380', '#923678', '#1ad77c', '#c41133', '#8a41a5', '#1ac52d', '#f2488f', '#e5b725', '#f73fa1', '#207472', '#cfc226', '#2b4e0d', '#4345db'];
        return color[getRandom(13)];
    } else {
        // 真随机
        // ~ 按位取反，~~则表示自身，当产生随机二进制小数时，位操作符会转换为整数
        // 1左移24位，16进制颜色最大值
        return '#' + (~~(Math.random() * (1 << 24))).toString(16);
    }
}

/**
 * 获取位于两者之间的随机数
 * @param {number} max 最大值
 * @param {number} min 最小值
 */
function getRandom (max, min = 0) {
    return min + Math.floor(Math.random() * max);
}

export default createVerificationCode;
