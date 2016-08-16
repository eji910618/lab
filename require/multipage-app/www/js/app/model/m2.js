// @ependency ./Base.js
define(['./Base'], function (Base) {    // 같은 폴더 내의 Base.js 파일에 의존
    var m2 = new Base('This is the data for Page 2');
    return m2;
});
