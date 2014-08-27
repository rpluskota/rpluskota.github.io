   	var scene, camera, renderer;
	init();
	animate();


  	function init(){


		scene = new THREE.Scene();

		//init of renderer
		renderer = new THREE.WebGLRenderer({antialias:true});
    		renderer.setSize(WIDTH, HEIGHT);
    		document.body.appendChild(renderer.domElement);

		//init of cam
		camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    		camera.position.set(1.29/1.5,3/1.5,6.9/1.5);
   		scene.add(camera);

		// Set the background color of the scene.
   		renderer.setClearColorHex(BACKGROUND, 1);//second arg is opacity
		
		// Create a light, set its position, and add it to the scene.
    		
            var light = new THREE.PointLight(0xa8a8a8);
            light.position.set(13,12,7);
            scene.add(light);
            light = new THREE.PointLight(0x6f6f6f);
            light.position.set(-9,-8,-10);
            scene.add(light);
            light = new THREE.PointLight(0x6f6f6f);
            light.position.set(-6,5,14);
            scene.add(light);
            light = new THREE.PointLight(0x6f6f6f);
            light.position.set(3,-6,-4);
            scene.add(light);
            light = new THREE.PointLight(0x6f6f6f);
            light.position.set(2,5,-2);
            scene.add(light);
            light = new THREE.PointLight(0x6f6f6f);
            light.position.set(-2,5,-2);
            scene.add(light);
		
		//Load mesh
    		var loader = new THREE.JSONLoader();
    		loader.load( "http://kotda.pl/visual/models/kubek.js", function(geometry){
				 var texture = THREE.ImageUtils.loadTexture(TEXTURE);
				 var material = new THREE.MeshLambertMaterial({map: texture});
				 mesh = new THREE.Mesh(geometry, material);
				 scene.add(mesh)
    		});
		
		// Add OrbitControls so that we can pan around with the mouse.
    		controls = new THREE.OrbitControls(camera, renderer.domElement);
		
		
	}
  	function animate(){
		// magic, DO NOT TOUCH!
    		requestAnimationFrame(animate);
			var time = Date.now() / 6000;
			for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

				var mesh = scene.children[ i ];
				mesh.position.x = Math.sin( time * 4 ) * i * i * 0.005;
				mesh.position.z = Math.cos( time * 6 ) * i * i * 0.005;

			}
 
    		// Render the scene.
    		renderer.render(scene, camera);
    		controls.update();
	}
	
 
