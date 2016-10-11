;(function ( $, window, document, undefined ) {
    'use strict';
    var pluginName = 'Eomlider';
    function Eomlider( element, options ) {
        var _ = this;

        _.defaults = {
            coordinates: '.pos',
            area: '.hit'
        };

        _.initials = {
            $pointerWrap: null
        };

        $.extend(_, _.initials);

        _.element = element;
        _.options = $.extend( {}, _.defaults, options);
        _._name = pluginName;

        _.init();
    }

    Eomlider.prototype = {
        init: function() {
            var _ = this;

            _.hammerInit();
        },
        hammerInit: function() {

        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Eomlider( this, options ));
            }
        });
    }

})( jQuery, window, document );