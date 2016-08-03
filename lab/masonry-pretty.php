<!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">
    <title>Eom Jeein</title>
    <link rel="stylesheet" href="/bootstrapk/css/bootstrap-3.3.2.css">
    <style>
        #masonry-pretty .pretty-item {

        }
    </style>
</head>
<body>
<div class="container">
    <div id="masonry-pretty" class="clearfix">
        <div class="pretty-item-sizer col-xs-12 col-sm-6 col-md-4"></div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001146491R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001225386R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001232069R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001234760R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001236282R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001237425R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001238311R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001238415R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001239377R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001239988R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001240010R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001240048R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001240050R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-4">
            <img src="/image/001240175R.jpg" class="img-responsive">
        </div>
        <div class="pretty-item col-xs-12 col-sm-6 col-md-5">
            <img src="/image/001240258R.jpg" class="img-responsive">
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/jquery-1.11.1.min.js"><\/script>')</script>
<script src="/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="/masonry/masonry.pkgd.min.js"></script>
<script>
    $(document).ready(function(){
        var $aaa = $('#masonry-pretty').imagesLoaded( function() {
            $aaa.masonry({
                itemSelector: '.pretty-item',
                columnWidth: '.pretty-item-sizer',
                gutter: 0,
                percentPosition: true
            });
        });
    });
</script>
</body>
</html>
