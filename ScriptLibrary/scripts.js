// JavaScript Document
jQuery(document).ready(function ($) {
    
	//initialise Stellar.js
    $(window).stellar( 
		{
			horizontalScrolling: false,
		}
	);
$('.nav a').click(function(){
  $.scrollTo( this.hash, 800, { easing:'easeOutCirc' });
  return false;
});

});