<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="/slick/css/slick.css">
    <style>
        .img-responsive {
            width: 100%;
        }
        #test {
            position: relative;
            overflow: hidden;
            margin-top: 100px;
        }
        #zoom-view {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99999;
            width: 100%;
        }
        #zoom-view img {
            width: 100%;
        }
    </style>

    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script>window.jQuery || document.write('<script src="/js/jquery-1.11.1.min.js"><\/script>')</script>
    <link rel="stylesheet" href="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
    <script src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <script src="/hammer/js/hammer.js"></script>
    <script src="/slick/js/min/slick.min.js"></script>
</head>
<body>
<!--<div id="test-innerZoom">
        <img id="rect1" src="/image/Shiba-001.jpg">
        <img id="rect2" src="/image/Shiba-002.jpg">
        <img id="rect3" src="/image/Shiba-003.jpg">
        <img id="rect4" src="/image/Shiba-004.jpg">
</div>-->
<div id="test">
    <div id="zoom-view"></div>
    <div id="test-innerZoom">
        <div id="rect1" class="thumnail-item">
            <img class="img-responsive" src="/image/Shiba-001.jpg">
        </div>
        <div class="thumnail-item">
            <img id="rect2" class="img-responsive" src="/image/Shiba-002.jpg">
        </div>
        <div class="thumnail-item">
            <img id="rect3" class="img-responsive" src="/image/Shiba-003.jpg">
        </div>
        <div class="thumnail-item">
            <img id="rect4" class="img-responsive" src="/image/Shiba-004.jpg">
        </div>
    </div>
</div>

<script>
    $('#test-innerZoom').slick({
        adaptiveHeight: true,
        pauseOnDotsHover: true
    });
    function hammerIt(elm) {
        hammertime = new Hammer(elm, {
            touchAction: 'pan-x'
        });
        var posX = 0,
            posY = 0,
            scale = 1,
            last_scale = 1,
            last_posX = 0,
            last_posY = 0,
            max_pos_x = 0,
            max_pos_y = 0,
            transform = "",
            el = elm;

        transform =
            "translate3d(0, 0, 0) " +
            "scale3d(3, 3, 1) ";
        scale = 3;
        last_scale = 3;

        el.style.webkitTransform = transform;
        transform = "";
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime.on('pan panend', function (ev) {
            //pan
            if (scale != 1) {
                posX = last_posX + ev.deltaX;
                posY = last_posY + ev.deltaY;
                max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
                max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
                if (posX > max_pos_x) {
                    posX = max_pos_x;
                }
                if (posX < -max_pos_x) {
                    posX = -max_pos_x;
                }
                if (posY > max_pos_y) {
                    posY = max_pos_y;
                }
                if (posY < -max_pos_y) {
                    posY = -max_pos_y;
                }
            }

            //panend
            if (ev.type == "panend") {
                last_posX = posX < max_pos_x ? posX : max_pos_x;
                last_posY = posY < max_pos_y ? posY : max_pos_y;
            }

            if (scale != 1) {
                transform =
                    "translate3d(" + posX + "px," + posY + "px, 0) " +
                    "scale3d(" + scale + ", " + scale + ", 1)";
            }

            if (transform) {
                el.style.webkitTransform = transform;
            }
        });
    }
    (function($) {
        $.fn.doubleTap = function(doubleTapCallback) {
            return this.each(function(){
                var elm = this;
                var lastTap = 0;
                $(elm).bind('vmousedown', function (e) {
                    var now = (new Date()).valueOf();
                    var diff = (now - lastTap);
                    lastTap = now ;
                    if (diff < 250) {
                        if($.isFunction( doubleTapCallback ))
                        {
                            doubleTapCallback.call(elm);
                        }
                    }
                });
            });
        }
    })(jQuery);
    function doubletapZoom(el) {
        var targetImg = el.parents('#test').children('#zoom-view');
        el.doubleTap(function () {
            var imgSrc = $(this).attr('src');

            targetImg.append('<img src="' + imgSrc + '">');
            hammerIt(document.getElementById("zoom-view").children[0]);
        });
    }
    doubletapZoom($('#test-innerZoom img'));
    $('#zoom-view').doubleTap(function () {
       $(this).children().remove();
    });

</script>
</body>
</html>
