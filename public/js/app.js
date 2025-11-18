$(document).ready(function(){
	$('.sidenav').sidenav();
	 $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible();

});


// Load from cache
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}



// $(window).on('resize', function() {
//   var win = $(this);
//   if (win.width() < 1130) {

//     $('#main').addClass('offset-l3');
//     $('#main').removeClass('offset-l2');
//   } else {
//     $('#main').removeClass('offset-l3');
//     $('#main').addClass('offset-l2');
//   }
// });