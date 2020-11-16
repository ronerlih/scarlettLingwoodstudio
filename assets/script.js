var welcomeScreen = $('#welcome-screen');
$(function() {
var mobileCheck = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
mobileCheck = true;}

console.log('mobile check: ' + mobileCheck );
  var $projects = $('#projects');

  if( mobileCheck ) {
    $('#projects img').css({'width': '90vw',
                            'margin': '5px'});
									 
	$('#project-content').css('margin-top','33px');
//	$('table').css('margin-bottom','37px');
  }

			var location = window.location.href ;
			var boole = location.match('home');
			if(boole == null) boole = [];
			console.log("location: " + location + "has home: " + boole.length);	
			
			if(boole.length > 0){
//				console.log("home apears " + boole.length + " times");
				document.getElementById("welcome-screen-cover").style.display = "none";
				}
		
	//last p
	$( "p" ).last().css('margin-bottom','40px');
});


//fade laofinf screen timer
//$(window).on('load', function () {
//    setTimeout(function () {
//      
//    }, 6200);
//
//});


	function exitLoading(){
console.log("exitLoading");
		
		document.getElementById("welcome-screen-cover").style.display = "none";
		
		//fade loading screen
		
		welcomeScreen.animate({opacity: '0'}, 500,function(){
        	window.location = "https://s3.amazonaws.com/scarlettlingwoodstudio/public/index.html?home";
			
		  
      });
}
