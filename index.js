$(document).ready(function() {
	if (document.documentElement.clientWidth > 991) {
		$('#fullpage').fullpage();
	}
});

var tips = [1,2,3,4];

var i = 0;
setInterval(function() {
    if (i == tips.length) i=0;
    $('#icon-links li a').removeClass("active");
    $('#icon-links li:nth-child('+ tips[i] +') a').addClass("active");
    i++;
}, 1000);