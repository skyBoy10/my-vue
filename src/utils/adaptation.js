/**
 * 移动端适配
 */
(function (win, doc) {
    var docEle = doc.documentElement;
    var dpr = win.devicePixelRatio || 1;
    var scale = 1 / dpr;
    var designWid = 750;

    /** 设置viewport */
    document.getElementsByName('viewport')[0].setAttribute('content',
        `width=device-width,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`);

    /**
     * 设置根字体扩大dpr倍
     *  由于clientWidth当页面缩小dpr倍时，本身获取的值就增加dpr倍
     * 所以这里不需要再乘以dpr了
     * 不过还是需要称100，第一点方便运算，第二点，对浏览器来说fontsize属性有最小值限制，pc最小：12，手机最小：8
    */
    docEle.style.fontSize = `${docEle.clientWidth * 100 / designWid}px`;
})(window, document);