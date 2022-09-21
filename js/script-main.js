var pills_y_top;
var header_fixer_height;

// update the variables
function updateValues() {
	pills_y_top = document.getElementById('pills').offsetTop;
	console.log('pills_y_top: ' + pills_y_top);
	
	header_fixer_height = document.getElementById('header-fixed-top').clientHeight;
	console.log('header_fixer_height: ' + header_fixer_height);

}

// marquee show/hide @ #pills
document.addEventListener('scroll', (e) => {
	//console.log("scrollY:" + window.scrollY);
	if(window.scrollY > getPillsYTop()) {
		//console.log(document.getElementById("marquee"));
		document.getElementById("marquee").classList.add("hidden");
	}
	else {
		document.getElementById("marquee").classList.remove("hidden");
	}
});


// add padding on top of #network for menu
function menuPadding() {
	document.getElementById('network-main').style.paddingTop = header_fixer_height + 'px';
}

// adapt the .anchors top position for nav anchor links
function updateAnchors() {
	var anchors = document.getElementsByClassName('anchors');
	
	console.log(anchors);
	
	for(let i=0; i<anchors.length; i++) {
		anchors[i].style.top = - header_fixer_height + 'px';
	}
	
}

// @page load at the beginning
updateValues();
menuPadding();
updateAnchors();


function getHeaderHeight() {
	updateValues();
	return header_fixer_height;
}

function getPillsYTop() {
	updateValues();
	return pills_y_top;
}



window.addEventListener('resize', (e) => {
	updateValues();
	menuPadding();
	updateAnchors();
});


	