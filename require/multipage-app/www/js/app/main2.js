define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c2'),
        model = require('./model/m2');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model); // controller = c2.js호출, c2.js는 Base.js에 의존, Base.js에 setModel 함수 호출
                                // setModel(model)의 model 매개변수는 위에서 선언한 변수로 m2.js 호출, m2.js는 같은폴더내에 Base.js 의존
    $(function () { // controller = c2.js호출, c2.js는 Base.js에 의존, Base.js에 render 함수 호출
        controller.render(lib.getBody());   // lib.js 의 getBody = return $('body');
    });
});
