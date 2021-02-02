const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 25, 1, 0.1, 1000 );
camera.position.z = 6 ;

const renderer = new THREE.WebGLRenderer({ canvas: earthCanvas });
renderer.setSize(500, 500);

const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

const geometry = new THREE.SphereGeometry(1, 32, 32);
const texture = new THREE.TextureLoader().load( './textures/earth_texture.jpg' );
const materialTex = new THREE.MeshBasicMaterial( { map: texture } );
//  materialTex.map = loader.load('textures/earth_texture.jpg');
const earth = new THREE.Mesh( geometry, materialTex );

scene.add( earth ) ;
//  camera.lookAt( earth ) ;

const controls = new THREE.OrbitControls( camera, renderer.domElement );

const animate = function () {
   requestAnimationFrame( animate );
   renderer.render( scene, camera );
};
animate();