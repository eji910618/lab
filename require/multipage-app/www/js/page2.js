//Load common code that includes config, then load the app logic for this page.
requirejs(['./common'], function (common) {     // common.js 의 requirejs.config 를 먼저 읽어들이고..
    requirejs(['app/main2']);
});
