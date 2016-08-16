// controller module
define(function () {
    function controllerBase(id) {
        this.id = id;
        console.log(this.id);   // c2.js에서의 Controller 1 , 2
    }

    controllerBase.prototype = {
        setModel: function (model) {    // main2.js 의 model = require('./model/m2'); m2.js 파일
            this.model = model;
        },

        render: function (bodyDom) {    // main2.js 의 lib.getBody() 의 값 = lib.js의 getBody return값 $('body')
            bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
                      this.model.getTitle() + '"</h1>');
        }
    };

    return controllerBase;
});
