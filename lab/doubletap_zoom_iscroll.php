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
                <img src="/image/Shiba-001.jpg">
        </div>
        <div class="billboard-item">
                <img src="/image/Shiba-002.jpg">
        </div>
        <div class="billboard-item">
                <img src="/image/Shiba-003.jpg">
        </div>
        <div class="billboard-item">
                <img src="/image/Shiba-004.jpg">
        </div>
        <!--<div class="billboard-item">
            <div class="zoom">
                <img src="/image/Shiba-001.jpg">
            </div>
        </div>
        <div class="billboard-item">
            <div class="zoom">
                <img src="/image/Shiba-002.jpg">
            </div>
        </div>
        <div class="billboard-item">
            <div class="zoom">
                <img src="/image/Shiba-003.jpg">
            </div>
        </div>
        <div class="billboard-item">
            <div class="zoom">
                <img src="/image/Shiba-004.jpg">
            </div>
        </div>-->
    </div>
</div>

<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/jquery-1.11.1.min.js"><\/script>')</script>
<script src="/iscroll/build/iscroll.js"></script>
<!--<script src="/js/RTP.PinchZoom.js"></script>-->
<script>
    function getSlideWidth(target, rail, item) {
        var itemWidth = target.width(),
            itemHeight = target.height(),
            railWidth = itemWidth * item.length;
        rail.css('width', railWidth);
        item.css('width', itemWidth);
    }
    $(document).ready(function(){
        getSlideWidth($('.billboard'), $('.billboard .billboard-wrap'), $('.billboard .billboard-item'));
        var myScroll = new IScroll('.billboard', {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: true,
            snapSpeed: 400
        });
    });

    $(window).resize(function() {
        getSlideWidth($('.billboard'), $('.billboard .billboard-wrap'), $('.billboard .billboard-item'));
    });
    /*$('.zoom').each(function() {
        new RTP.PinchZoom($(this), {});
    });*/
</script>
</body>
</html>
