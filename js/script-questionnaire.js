var pills_y_top;
var header_fixer_height_questionnaire;

// update the variables
function updateValues() {
	pills_y_top = document.getElementById('pills').offsetTop;
	console.log('pills_y_top: ' + pills_y_top);
	
	header_fixer_height_questionnaire = document.getElementById('header-fixed-top-questionnaire').clientHeight;
	console.log('header_fixer_height_questionnaire: ' + header_fixer_height_questionnaire);
	
	

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
function menuPaddingQuestionnaire() {
	document.getElementById('questionnaire-main').style.paddingTop = header_fixer_height_questionnaire + 'px';
}



// adapt the .anchors top position for nav anchor links
function updateAnchors() {
	var anchors = document.getElementsByClassName('anchors-questionnaire');
	
	console.log(anchors);
	
	for(let i=0; i<anchors.length; i++) {
		anchors[i].style.top = - header_fixer_height_questionnaire + 'px';
	}
	
}

// @page load at the beginning
updateValues();
menuPaddingQuestionnaire();
updateAnchors();


function getHeaderHeight() {
	updateValues();
	return header_fixer_height_questionnaire;
}

function getPillsYTop() {
	updateValues();
	return pills_y_top;
}


window.addEventListener('resize', (e) => {
	updateValues();
	menuPaddingQuestionnaire();
	updateAnchors();
});


	