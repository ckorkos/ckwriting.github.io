// Page Width Breakpoints
$(document).ready(function() {
	if($(window).width() >= 1080) {

		console.log("Screen Width: Greater than 1080px");
	}
    else if($(window).width() <= 1080) {
        $(".project-header").width = "90%";
        $(".project-header").paddingLeft = "5%";
        $(".project-header").paddingRight = "5%";

		console.log("Screen Width: 1080px");
	}
});

$(window).resize(function() {
    // Copy all breakpoints code here

	if($(window).width() >= 1080) {

		console.log("Screen Width: Greater than 1080px");
	}
    else if($(window).width() <= 1080) {
        $(".project-header").width = "90%";
        $(".project-header").paddingLeft = "5%";
        $(".project-header").paddingRight = "5%";

		console.log("Screen Width: 1080px");
	}
});

// Change Project Thumbnails on Hover-In
function changeBG(project) {
    if(project==="skywind-image") {
        document.getElementById(project).src = "./files/images/thumbnails/skywind-thumb-hover.png";
        document.getElementById("skywind-card-text").style.opacity = 1;
    }
}

// Change Project Thumbnails on Hover-Out
function revertBG(project) {
    if(project==="skywind-image") {
        document.getElementById(project).src = "./files/images/thumbnails/skywind-thumb.png";
        document.getElementById("skywind-card-text").style.opacity = 0;
    }
}