/* Main & Baby plus item Page Contents swipe Iscroll */
var swipeScroll = {
    width : function(target) {  /* iscroll width 값 구하는 함수 */
        $(target).each(function() {
            var _ = $(this), itemWidth, railWidth,
                item = _.children('[data-scroll="rail"]').children('[data-scroll="item"]'),
                itemLen = item.length;
            if(_.attr('data-width') || _.hasClass('.horizontal-scroll')) {
                itemWidth = _.data('width');
                railWidth = (itemWidth*itemLen+itemLen*10)+20;
            } else {
                itemWidth = _.width();
                railWidth = itemWidth*itemLen;
            }
            _.children('[data-scroll="rail"]').css({
                width: railWidth
            });
            item.css({
                width: itemWidth
            });
        });
    },
    widthRem : function(target) {   /* iscroll width rem 값 구하는 함수 */
        $(target).each(function() {
            var _ = $(this), itemWidth, railWidth,
                item = _.children('[data-scroll="rail"]').children('[data-scroll="item"]'),
                itemLen = item.length;
            if(_.attr('data-width') || _.hasClass('.horizontal-scroll')) {
                itemWidth = _.data('width');
                railWidth = (itemWidth*itemLen+itemLen*10) + 20;
            } else {
                itemWidth = _.width();
                railWidth = itemWidth*itemLen;
            }
            _.children('[data-scroll="rail"]').css({
                width: (railWidth*0.1) + 'rem'
            });
            item.css({
                width: (itemWidth*0.1) + 'rem'
            });
        });
    },
    variableWidth: function(target) {   /* 각 item 마다 width 값이 다른 경우 쓰는 함수 */
        var total = 0;
        $(target).each(function(){
            var _ = $(this),
                item = _.find('[data-scroll="item"]');
            item.each(function() {
                total += parseInt($(this).outerWidth());
            });
            _.find('[data-scroll="rail"]').css('width', total+2);
        });
    },
    tab : function(selector, target) {  /* Contents Scroll 상단 Nav 부분 클릭시 이동되는 함수 */
        selector.each(function() {
            $(this).click(function() {
                target.goToPage($(this).data('current'),0,400);
                return false;
            });
        });
    },
    scrollTop : function(target, targetScroll) {    /* swipe 후 scroll 을 상단으로 옮겨주는 함수 */
        var currentPage,
            scrollPos = $(target).offset().top;
        targetScroll.on('beforeScrollStart', function(){
            currentPage = this.currentPage.pageX;
        });
        targetScroll.on('scrollEnd', function(){
            var scrollEndPage = this.currentPage.pageX;
            if (currentPage != scrollEndPage && scrollPos < $(document).scrollTop()) {
                if ( target == scrollHeader ) {
                    $('html, body').animate({scrollTop: scrollPos-55}, 100);
                } else {
                    $('html, body').animate({scrollTop: 0}, 100);
                }
            }
        });
    },
    scrollHeight : function(rail, contents, targetScroll) { /* item 마다 다른 height 값을 구해주는 함수 */
        var currentPage = targetScroll.currentPage.pageX;
        function railHeight() {
            $(rail).css({
                'height': $(contents).outerHeight(),
                'overflow': 'hidden'
            });
        }
        contents = $(rail).children(contents+'[data-current="' + currentPage + '"]');
        $(rail).find('img').one('load', function () {
            railHeight();
        });
        railHeight();
        $(rail).children(contents).removeClass('active');
        contents.addClass('active');
    },
    nav : function(target, navScroll, contentsScroll, time) {   /* Contents Scroll 상단 Nav 관련 함수들 */
        /* nav active */
        contentsScroll.on('scrollEnd', function() {
            var scrollEndPage = contentsScroll.currentPage.pageX,
                activeLink = $(target + ' li[data-current="' + scrollEndPage + '"]');
            $(target + ' li').removeClass('active');
            $(activeLink).addClass('active');
        });
        /* Left & Right Fade */
        var fadeLeft = $(target).find('span.left'),
            fadeRight = $(target).find('span.right');
        function fadeScroll() {
            if (navScroll.x == 0) {
                fadeLeft.addClass('hidden');
                fadeRight.removeClass('hidden');
            } else if (navScroll.x == navScroll.maxScrollX) {
                fadeLeft.removeClass('hidden');
                fadeRight.addClass('hidden');
            } else if (navScroll.x != 0 && navScroll.x != navScroll.maxScrollX) {
                fadeLeft.removeClass('hidden');
                fadeRight.removeClass('hidden');
            }
        }
        fadeScroll();
        navScroll.on('scrollEnd', function(){
            fadeScroll();
        });
        /* Moving Nav */
        var activeTarget = $(target).find('.active')[0],
            offsetLeft = activeTarget.offsetLeft;
        if (navScroll.x >= navScroll.maxScrollX && -offsetLeft > navScroll.maxScrollX) {
            navScroll.scrollTo(-offsetLeft+20, 0, time);
            if (offsetLeft == 0) {
                navScroll.scrollTo(0, 0, time);
            }
        } else {
            navScroll.scrollTo(navScroll.maxScrollX, 0, time);
        }
    }
};