// scripts.js
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Login functionality is not implemented in this demo.');
});

document.querySelector('.start-btn').addEventListener('click', function() {
    alert('Get Started functionality is not implemented in this demo.');
});
// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Load the 3D model
const loader = new THREE.GLTFLoader();
let model;
loader.load('path/to/your/model.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Toggle button functionality
document.getElementById('toggleButton').addEventListener('click', () => {
    if (model) {
        model.visible = !model.visible;
    }
});
