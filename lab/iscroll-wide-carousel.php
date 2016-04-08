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
        }
        .billboard-wrap:after,
        .billboard-wrap:before {
            display: table;
            content: "";
        }
        .billboard-wrap:after {
            clear: both;
        }
        .billboard {
            overflow: hidden;
        }

        .billboard-item {
            float: left;
        }
        img {
            display: block;
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>

<div class="billboard">
    <div class="billboard-wrap">
        <div class="billboard-item">
            <img src="/image/wide00.jpg">
        </div>
        <div class="billboard-item">
            <img src="/image/wide01.jpg">
        </div>
        <div class="billboard-item wide">
            <img src="/image/wide02.JPG">
        </div>
        <div class="billboard-item">
            <img src="/image/wide03.JPG">
        </div>
        <div class="billboard-item">
            <img src="/image/wide04.jpg">
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/jquery-1.11.1.min.js"><\/script>')</script>
<script src="/iscroll/build/iscroll.js"></script>
<script>
    var total = 0;
    function getSlideWidth(target, rail, item) {
        var itemWidth = target.width();
        item.each(function() {
            if($(this).hasClass('wide')) {
                $(this).css('width', itemWidth*3);
            } else {
                $(this).css('width', itemWidth);
            }
            total += parseInt($(this).width());
        });
        rail.css('width', total);
    }
    getSlideWidth($('.billboard'), $('.billboard .billboard-wrap'), $('.billboard .billboard-item'));

    var myScroll = new IScroll('.billboard', {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true
    });

    myScroll.on('scroll', function() {
        if(this.x <= -(this.wrapperWidth*2)) {
            this.options.snap = false;
            this.options.scrollX = false;
            this.options.momentum = true;
        }
       /* else {
            console.log("end!!");
            this.options.snap = true;
            this.options.scrollX = true;
        }*/
        console.log(this.x);
        console.log(this.options.snap);
    });

    $(window).resize(function() {
        getSlideWidth($('.billboard'), $('.billboard .billboard-wrap'), $('.billboard .billboard-item'));
    });

</script>
</body>
</html>
