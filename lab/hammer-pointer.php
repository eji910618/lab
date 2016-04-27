<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">
    <title>Eom Jeein</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .container {
            width: 1024px;
            margin: 50px auto 0;
        }
        .hit {
            position: relative;
            width: 100%;
            height: 300px;
            background-color: #f0f0f0;
            overflow: hidden;
        }
        .hit .pointer {
            display: block;
            cursor: pointer;
            width: 20px;
            height: 20px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: red;
        }
        .pos {
            margin-top: 20px;
            border: 2px solid #000;
            width: 20%;
            height: 30px;
            background-color: #fff;
        }
        .addPointer {
            border: 1px solid green;
            background-color: #fff;
            font-size: 20px;
            margin-bottom: 20px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            padding: 0 10px;
            cursor: pointer;
        }
        .addPointer:focus {
            outline: none;
        }
    </style>
</head>
<body>

<div class="container">

    <button class="addPointer" id="addBtn">addPointer</button>

    <div class="hit">
        <span class="pointer"></span>
    </div>

    <p class="pos"></p>

</div>

<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/jquery-1.11.1.min.js"><\/script>')</script>
<script src="/hammer/hammer.js"></script>

<script>

    ;(function ( $, window, document, undefined ) {
        'use strict';
        var pluginName = 'asdasd';
        function asdasd( element, options ) {
            var _ = this;

            _.defaults = {
                coordinates: '.pos',
                area: '.hit',
                addButton: 'button.addPointer',
                addPointer: '<span class="pointer"></span>',
                addLogBox: '<p class="pos"></p>',
                logBoxLocation: '.container'
            };

            _.initials = {
                currentPos: null,
                offsetX: 0,
                offsetY: 0,
                ticking: false
            };

            $.extend(_, _.initials);

            _.element = element;
            _.options = $.extend( {}, _.defaults, options) ;
            _._name = pluginName;

            _.init();
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        var reqAnimationFrame = (function () {
            return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();


        asdasd.prototype = {

            init: function() {
                var _ = this;

                _.addPointer();
                _.hammerInit(_.element);
            },
            getTranslateX: function(obj) {
                if(!window.getComputedStyle) return;
                var style = getComputedStyle(obj),
                    transform = style.transform;
                var mat = transform.match(/^matrix\((.+)\)$/);
                return mat ? ~~(mat[1].split(', ')[4]) : 0;
            },
            getTranslateY: function(obj) {
                if(!window.getComputedStyle) return;
                var style = getComputedStyle(obj),
                    transform = style.transform;
                var mat = transform.match(/^matrix\((.+)\)$/);
                return mat ? ~~(mat[1].split(', ')[5]) : 0;
            },
            hammerInit: function(el) {
                var _ = this;
                var transform = {
                    translate: {x: 0, y: 0}
                };
                var forEach = function (array, callback, scope) {
                    for (var i = 0; i < array.length; i++) {
                        callback.call(scope, i, array[i]);
                    }
                };
                var els = document.querySelectorAll('.' + el.className),
                    eachPos = document.querySelectorAll(_.options.coordinates),
                    areaWidth = document.querySelector(_.options.area).clientWidth,
                    areaHeight = document.querySelector(_.options.area).clientHeight;
                forEach(els, function(i) {
                    var mc = new Hammer.Manager(els[i]);
                    mc.add(new Hammer.Pan({threshold: 0, pointers: 0}));
                    mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));

                    mc.on("panmove", onPan);
                    mc.on("panend", onPanEnd);
                    mc.on("swipe", onSwipe);
                    mc.on("hammer.input", function (ev) {
                        if (ev.isFinal) {
                            eachPos[i].textContent = [transform.translate.x, transform.translate.y].join(" ");
                            _.offsetX = transform.translate.x;
                            _.offsetY = transform.translate.y;
                        }
                    });
                    function updateElementTransform(value) {
                        value = 'translate(' + transform.translate.x + 'px, ' + transform.translate.y + 'px)';
                        els[i].style.webkitTransform = value;
                        els[i].style.mozTransform = value;
                        els[i].style.transform = value;
                        _.ticking = false;
                    }
                    function requestElementUpdate() {
                        if (!_.ticking) {
                            reqAnimationFrame(updateElementTransform);
                            _.ticking = true;
                        }
                    }
                    function onPanEnd(ev) {
                        transform.translate = {
                            x: _.offsetX,
                            y: _.offsetY
                        };
                        if (_.offsetX < 0 || _.offsetY < 0 || areaWidth < _.offsetX || areaHeight < _.offsetY) {
                            transform.translate = {
                                x: 0,
                                y: 0
                            };
                            if (ev.isFinal) {
                                eachPos[i].textContent = [transform.translate.x, transform.translate.y].join(" ");
                            }
                            updateElementTransform();
                        }
                    }
                    function onPan(ev) {
                        if (_.offsetX < 0 || _.offsetY < 0 || areaWidth < _.offsetX || areaHeight < _.offsetY) {
                            _.offsetX = 0;
                            _.offsetY = 0;
                        }
                        transform.translate = {
                            x: ev.deltaX + _.offsetX,
                            y: ev.deltaY + _.offsetY
                        };
                        requestElementUpdate();
                    }

                    function onSwipe(ev) {
                        transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL) ? 1 : 0;
                        transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL) ? 1 : 0;

                        requestElementUpdate();
                    }
                    console.log('hammerInit!!!');
                });
            },
            addPointer: function() {
                var _ = this;

                $(_.options.addButton).on('click', function(){
                   $(_.options.addPointer).appendTo(_.options.area)
                        .css({'background-color' : getRandomColor()});
                    $(_.options.addLogBox).appendTo(_.options.logBoxLocation);
                    _.hammerInit(_.element);
                });
            }
        };

        $.fn[pluginName] = function ( options ) {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName,
                        new asdasd( this, options ));
                }
            });
        }

    })( jQuery, window, document );

    $('.pointer').asdasd();

</script>

</body>
</html>
