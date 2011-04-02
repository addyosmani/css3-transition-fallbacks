$(function(){

	function getPrefix( prop ){
        var prefixes = ['Moz','Webkit','Khtml','0','ms'],
            elem     = document.createElement('div'),
            upper      = prop.charAt(0).toUpperCase() + prop.slice(1),
            pref     = "";

        for(var len = prefixes.length; len--;){
            if((prefixes[len] + upper) in elem.style){
                pref = (prefixes[len]);
            }
        }

        if(prop in elem.style){
            pref = (prop);
        }

        return '-' + pref.toLowerCase() + '-';

    }

	$.fn.extend({
	    defaultAnimate: $.fn.animate,
	    animate: function(props, speed, easing, callback) {
	                var options = speed && typeof speed === "object" ? jQuery.extend({}, speed) :{
	                        complete: callback || !callback && easing ||
	                        jQuery.isFunction( speed ) && speed,
	                        duration: speed,
	                        easing: callback && easing || easing && !jQuery.isFunction(easing) && easing
	                    };   
	                  return $(this).each(function() {
	                    var $this = $(this),
	                        altTransition,
	                        easing = (options.easing) ? easing : 'ease-in-out',
	                        prefix = (getPrefix('transition'));
                 
	                        if (Modernizr.csstransitions) 
	                        {
	                              $this.css(prefix + 'transition', 'all ' + speed / 1000 + 's ease-in-out').css(props);
	                              setTimeout(function() {
	                                $this.css(prefix + 'transition', altTransition);
	                                if ($.isFunction(options.complete)) {
	                                     options.complete();
	                                }
	                              }, speed);
	                        }
	                        else{
	                             $this.defaultAnimate(props, options); 
	                        }
	                })
	            }
		
	});

});