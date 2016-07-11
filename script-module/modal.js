
/* Modal Function */
var bodyHeight, innerScrollHeight, modalTarget;
var modal = {
    giveBackScroll : 0,
    grandparent: $('html, body'),
    call : function (target) {  /* Modal 호출 함수 */
        var $target = $(target),
            chkCall = $target.data('call');
        modalTarget = $(target).data('route');
        if (chkCall == 'modal') {
            var chkRoute = $target.data('route');
            if ( $(modalTarget).hasClass('modal-primary') ) {
                modal.giveBackScroll = $(document).scrollTop();
                modal.grandparent.addClass('modal-active');
            }
            $(chkRoute).addClass('active');
        }

        /* modal touch방지 */
        var $head = $(modalTarget).find('.modal-head'), $body = $(modalTarget).find('.modal-body'), $foot = $(modalTarget).find('.modal-foot'),
            headHeight = $head.outerHeight(), footHeight = $foot.outerHeight();
        innerScrollHeight = deviceHeight - headHeight - footHeight - 24;
        aaaHeight = $(modalTarget).find('.modal-body').children('div').outerHeight();
        bodyHeight = $body.outerHeight();
        if(modalTarget == "#modal-orderNumber") {

        }else{
            $('body').on('touchmove',function(e){
                if(bodyHeight >= aaaHeight && bodyHeight <= innerScrollHeight && $('.modal-active').has($(e.target)).length){
                    return false;
                }
            });
        }
        $('.modal-mask').on('touchmove scroll',function(e){
            if($('.modal-active').has($(e.target)).length){
                return false;
            }
        });
        /* modal 재실행시 맨위화면으로 실행 */
        $('.modal-body').scrollTop(0);

        modal.setHeight(target);
        modal.scrollEnd(target);

        /* 관심상품,장바구니담기 모달 fade 사라짐 */
        setTimeout(function(){
            $('#modal-floating,#modal-floating-cart').removeClass('active');
        }, 800);
    },
    dismiss : function () {     /* Modal Close */
        if ( $(modalTarget).hasClass('modal-primary') ) {
            modal.grandparent.animate({scrollTop: modal.giveBackScroll}, 1);
            modal.giveBackScroll = 0;
        }
        modal.grandparent.removeClass('modal-active');
        $('.modal').removeClass('active');
    },
    setHeight: function() {     /* Modal body section height */
        var $modalWindow = $(modalTarget).find('.modal-window'),
            $head = $(modalTarget).find('.modal-head'), $body = $(modalTarget).find('.modal-body'), $foot = $(modalTarget).find('.modal-foot'),
            headHeight = $head.outerHeight(), footHeight = $foot.outerHeight();
        innerScrollHeight = deviceHeight - headHeight - footHeight - 24;
        bodyHeight = $body.outerHeight();
        if ( $(modalTarget).hasClass('modal-primary') ) {
            if (bodyHeight > innerScrollHeight) {
                $modalWindow.css({
                    width: deviceWidth - 24,
                    height: innerScrollHeight + headHeight
                });
                $body.addClass('inner-scroll').css({
                    height: innerScrollHeight
                });
            } else {
                $modalWindow.css({
                    width: deviceWidth - 24,
                    height: bodyHeight + headHeight + footHeight
                });
                $body.css({height: bodyHeight});
            }
        }

    },
    scrollEnd: function(target) {   /* Modal Body Scroll 최하단에 닿았을때 */
        $(modalTarget).find('.modal-body.infinite-scroll').on('scroll', function() {
            innerScrollHeight = parseInt($('.infinite-scroll').css('height'));
            if ( $(this).scrollTop() == $(this).prop("scrollHeight")-innerScrollHeight ) {
                $(modalTarget).find('.modal-body.infinite-scroll').off('scroll');
                modalScroll();
                setTimeout(function(){
                    modal.setHeight(target);
                }, 50);
                setTimeout(function(){
                    modal.scrollEnd();
                }, 60);
            }
        });
    }
};