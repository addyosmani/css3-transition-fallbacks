$(function(){
	
	function updateStatus(msg){
        $('.status').html(msg);
    }

	function compatTest(){
        if (Modernizr.csstransitions) {
            $('.compat span').html('yes');
        }
    }

	compatTest();

	$('.alt0').animate({width: '480px'}, 4000, function(){
		updateStatus('Animation 1 Complete');
	});

	$('.alt1').animate({width: '480px'}, 5000, function(){
		updateStatus('Animation 2 Complete');
	});

	$('.alt2').animate({width: '480px'}, 7000, function(){
		updateStatus('Animation 3 Complete');
	});

});