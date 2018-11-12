$(document).ready(function () {
	changeNavColor();
	smooth();
});

$(window).scroll(function () {
	changeNavColor();
});

function changeNavColor() {
	var navHeight = $('nav').height();
	var actualPos = $(window).scrollTop();
	if (actualPos > navHeight) {
		$('nav').addClass('nav-colored');
	} else {
		$('nav').removeClass('nav-colored');
	}
}

function smooth() {
	$("a").on('click', function (event) {

		
		if (this.hash !== "") {
			
			event.preventDefault();

			
			var hash = this.hash;

		
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				window.location.hash = hash;
			});
		} 
	});
}