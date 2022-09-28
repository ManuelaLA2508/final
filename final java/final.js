const scene = new THREE.Scene();
scene.background = new THREE.Color(0x78DDFA);
const texture = new THREE.TextureLoader();
var loader = new THREE.TextureLoader();
loader.load('./imagen/WhatsApp Image 2022-09-26 at 10.29.57 AM.jpeg', function(texture) {
    scene.background = texture;
});
const gltfLoader = new THREE.GLTFLoader();
const camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 1, 500);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotGeometry(3.192, 8.1774, 220, 3, 15, 3);
const material = new THREE.MeshMatcapMaterial();
const matcap = texture.load("../imagen/pngtree-blue-and-purple-galaxy-particles-background-image_444824.jpeg");
material.matcap = matcap;
material.flatShading = true;

var torusKnot = new THREE.Mesh(geometry, material);
const edges = new THREE.EdgesGeometry(geometry);
//const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
//scene.add(line);
scene.add(torusKnot);

camera.position.z = 60
camera.position.y = 17
camera.position.x = -3

const GLLTFLoader = new THREE.GLTFLoader();

//man
gltfLoader.load('../man_in_suit/scene.gltf',
    (gltf) => {

        var loaderObjeto = gltf.scene;
        loaderObjeto.scale.set(0.1, 0.1, 0.1)
        console.log('carga completa');
        scene.add(loaderObjeto);
        loaderObjeto.position.x = -50
        loaderObjeto.position.y = -12
        loaderObjeto.position.z = 10
        const directionalLight2 = new THREE.AmbientLight(0xffffff)
        scene.add(directionalLight2)
        const controls1 = new THREE.DragControls([loaderObjeto], camera, renderer.domElement);
    }, () => {
        console.log('cargando');
    }, () => {
        console.log('error')
    }

);

//robot
const GLLTFLoader2 = new THREE.GLTFLoader();

gltfLoader.load('../baby_robot__3dcoat/scene.gltf',
    (gltf) => {

        var loaderObjeto2 = gltf.scene;
        loaderObjeto2.scale.set(0.2, 0.2, 0.2)
        console.log('carga completa');
        scene.add(loaderObjeto2);
        const directionalLight2 = new THREE.AmbientLight(0xffffff)
        scene.add(directionalLight2)
        loaderObjeto2.position.x = -1
        loaderObjeto2.position.y = 15
        loaderObjeto2.position.z = 0

        const controls2 = new THREE.DragControls([loaderObjeto2], camera, renderer.domElement);
    }, () => {
        console.log('cargando');
    }, () => {
        console.log('error')
    }

);

function animate() {
    requestAnimationFrame(animate);
    //torusKnot.rotation.x += 0.05;
    //torusKnot.rotation.y += 0.06;
    torusKnot.rotation.z += 0.05;
    //line.rotation.z += 0.05;
    renderer.render(scene, camera);
}
animate()