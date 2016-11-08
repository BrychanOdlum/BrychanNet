function openModal() {
	$("#modal").css("display", "block");
	$("body").css("overflow", "hidden");
	$("#window").slideDown();
}
function closeModal() {
	$("#modal").fadeOut();
	$("body").css("overflow", "scroll");
	$("#window").slideUp(100);
}
function toggleModal() {
	if ($("#modal").css("display") != "block") {
		openModal();
	} else {
		closeModal();
	}
}

$('#modal').on('click', function(e) {
	if (e.target != this) 
		return;
	closeModal();
});

function toggleModalSize() {
	console.log("t");
	if ($("#window").hasClass("full")) {
		$("#window").removeClass("full");
	} else {
		$("#window").addClass("full");
	}
}



$(window).scroll(function() {
	adjustNav()
});
$( window ).resize(function() {
	adjustNav()
});

function adjustNav() {
	var percentage = Math.round( (100 / $(".screen#first").height()) * $(window).scrollTop()) / 100;
	//if (percentage < 0.5)
	//	percentage = 0.5;
	console.log( $("nav").offset().top );
		
	if ( $(window).scrollTop() > $(".screen#first").height()-$("nav").height() ) {
		$(".screen#second").css("margin-top", $(".screen#first").height());
		$(".screen#first").css("position", "fixed");
		$(".screen#first").css("top", -$(".screen#first").height()+50);
	} else {
		$(".screen#second").css("margin-top", 0);
		$(".screen#first").css("position", "relative");
		$(".screen#first").css("top", 0);
	}
		
	var t1 = ( 1 - Math.round( (100 / ( $("nav").height()  ) ) * ( ($(".screen#first").height()-$("nav").height()) - $(window).scrollTop() ) ) / 100 ) - 1;
	if (t1 < 0)
		t1 = 0;
	if (t1 > 1)
		t1 = 1;
	$("nav").css("opacity", t1);
}


$(".fullscreen").click(function(e) {
	
});


$(function(){
    $(".fullscreen").tipTip({delay:0,fadeIn:50,content:'Click to show fullscreen preview'});
});