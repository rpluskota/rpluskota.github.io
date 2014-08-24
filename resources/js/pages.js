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
 $(window).load(function(){
				$('#gallery').rvnGallery({effect: ['randomBoxes', 'tiles']});
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
