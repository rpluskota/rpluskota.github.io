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
		$('#content').load('http://kotda.pl/test/demos-jquery/image-gallery.source.html');
	});
 
};
function goProjects() {
 $(document).ready(function(){
				$('#content').load('pages/projects.html');
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
