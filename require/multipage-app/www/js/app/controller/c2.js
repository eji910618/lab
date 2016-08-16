// @dependency ./Base.js
define(['./Base'], function (Base) {    // 같은 폴더 내의 Base.js 파일에 의존
    var c2 = new Base('Controller 2');
    return c2;
});
