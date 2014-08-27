function goAbout() {
 $(document).ready(function(){
				$('#content').load('pages/about.html');
			});
};
function go2d() {
 $(document).ready(function(){
				$('#content').load('pages/2d.html');
			});
};
function goPoly() {
 $(document).ready(function(){
				$('#content').load('pages/poly.html');
			});
};
function go3d() {


	$(document).ready(function(){
		$('#content').load('pages/3d.html');
	});
 
};
function goVis() {
 $(document).ready(function(){
				$('#content').load('pages/visualization.html');
			});
};
function goArach() {
 $(document).ready(function(){
				$('#content').load('pages/arachno.html');
			});
};
function goGF() {
 $(document).ready(function(){
				$('#content').load('pages/gameforge.html');
			});
};
function goJiA() {
 $(document).ready(function(){
				$('#content').load('pages/jasialgosia.html');
			});
};
function goContact() {
 $(document).ready(function(){
				$('#content').load('pages/contact.html');
			});
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
