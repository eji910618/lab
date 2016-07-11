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
            overflow-y: scroll;
        }
        .billboard-wide {
            overflow-y: scroll;
        }
        .billboard-wide img {
            width: auto;
            height: 500px;
        }
        img {
            display: block;
            width: 100%;
            height: auto;
        }
    </style>
</head>
<body>

<div class="billboard" data-scroll="snap">
    <div class="billboard-wrap" data-scroll="rail">
        <div class="billboard-item" data-scroll-current="0" data-scroll="item">
            <img src="/image/wide00.jpg">
        </div>
        <div class="billboard-item" data-scroll-current="1" data-scroll="item">
            <img src="/image/wide01.jpg">
        </div>
        <div class="billboard-item wide" data-scroll-current="2" data-scroll="item">
            <div class="billboard-wide">
                <div class="billboard-wide-wrap" style="width: 906px;">
                    <div class="billboard-wide-item" style="width: 906px;">
                        <img src="/image/wide02.JPG">
                    </div>
                </div>
            </div>
        </div>
        <div class="billboard-item" data-scroll-current="3" data-scroll="item">
            <img src="/image/wide03.JPG">
        </div>
        <div class="billboard-item" data-scroll-current="4" data-scroll="item">
            <img src="/image/wide04.jpg">
        </div>
    </div>
</div>
<!--<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">-->
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<!--<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>-->
<!--<script src="/iscroll/build/iscroll.js"></script>-->
<script src="/iscroll/build/iscroll-probe.js"></script>
<script>
    function slideWidth() {
        $('[data-scroll="snap"]').each(function() {
            var _ = $(this), itemWidth, railWidth,
                item = _.find('[data-scroll="item"]'),
                itemLen = item.length;
            if(_.attr('data-width') || _.hasClass('.horizontal-scroll')) {
                itemWidth = _.data('width');
                railWidth = (itemWidth*itemLen+itemLen*10)+20;
            } else {
                itemWidth = _.width();
                railWidth = itemWidth*itemLen;
            }
            _.find('[data-scroll="rail"]').css({
                width: railWidth
            });
            item.css({
                width: itemWidth
            });
        });
    }
    slideWidth();
    var myScroll = new IScroll('.billboard', {
        scrollX: true,
        scrollY: false,
        snap: true,
        momentum: false,
        eventPassthrough: true
    });
    var wideScroll = new IScroll('.billboard-wide', {
        scrollX: true,
        scrollY: false,
        probeType: 3,
        bounce: false
    });
    var scrollDirection, wideScrollDirection;
    myScroll.on('scrollStart', function(){
        scrollDirection = this.directionX;
    });
    wideScroll.on('scrollStart', function() {
        wideScrollDirection = this.directionX;
        console.log(this.distX);
//        console.log(wideScrollDirection);
    });
    wideScroll.on('scrollEnd', function() {
        if ( wideScrollDirection == -1 && wideScroll.x == 0 ) {
            myScroll.enable();
            wideScroll.disable();
        }
        if ( wideScrollDirection == 1 && wideScroll.x == wideScroll.maxScrollX ) {
            myScroll.enable();
            wideScroll.disable();
        }
    });
    wideScroll.on('scroll', function() {
        if ( this.distX > 0 && wideScroll.x == 0 ) {
            myScroll.enable();
            wideScroll.disable();
        }
//       console.log(this.distX);
    });
    /*if ( wideScroll.x == wideScroll.maxScrollX ) {
    $('.billboard-wide').on('swipeleft', function(){
            myScroll.enable();
            wideScroll.disable();
    });
    }
    $('.billboard-wide').on('swiperight', function(){
        if ( wideScroll.x == 0 ) {
            myScroll.enable();
            wideScroll.disable();
        }
    });*/
    myScroll.on('scrollEnd', function(){
        addActiveClass(this, '.billboard');
        if ( scrollDirection == 1 && $('.billboard .billboard-item.active').hasClass('wide') ) {
            myScroll.disable();
            wideScroll.enable();
            wideScrollDirection = -1;
        }
        if ( scrollDirection == -1 && $('.billboard .billboard-item.active').hasClass('wide') ) {
            myScroll.disable();
            wideScroll.enable();
            wideScrollDirection = 1;
        }
    });
    function addActiveClass(contentsScroll, target) {
        var scrollEndPage = contentsScroll.currentPage.pageX,
            activeLink = $(target + ' .billboard-item[data-scroll-current="' + scrollEndPage + '"]');
        $(target + ' .billboard-item').removeClass('active');
        $(activeLink).addClass('active');
    }
    addActiveClass(myScroll, '.billboard');

    $(window).resize(function() {
        slideWidth();
    });

</script>
</body>
</html>
