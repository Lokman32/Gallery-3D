// const aspectRatio = window.innerWidth / window.innerHeight


// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   1000
// );
// const vertices = new Float32Array([
//   -2, 5, 0.5, -1, 5, 0.5, -1, 1, 0.5, -2, 0, 0.5, 2, 1, 0.5, 2, 0, 0.5, -2, 5,
//   -0.5, -1, 5, -0.5, -1, 1, -0.5, -2, 0, -0.5, 2, 1, -0.5, 2, 0, -0.5,
// ]);

// const index = [
//   0, 1, 3, 3, 1, 2, 3, 2, 4, 4, 5, 3, 6, 7, 9, 9, 7, 8, 9, 8, 10, 10, 11, 9, 0,
//   6, 7, 7, 1, 0, 1, 7, 2, 7, 8, 2, 2, 8, 10, 10, 4, 2, 4, 10, 5, 5, 10, 11, 3,
//   6, 0, 6, 9, 3,
// ];

// const geometry = new THREE.TorusKnotGeometry();


//
/* MESH TRANSOFORMATION */
// cube.position
// cube.rotation
// cube.scale
/* MESH TRANSOFORMATION */
//

// scene.add(cube); // ADD THE MODEL TO THE SCENE

// const helper = new THREE.GridHelper(2000, 100);
// helper.position.y = -10
// helper.material.opacity = 0.25;
// helper.material.transparent = true;
// scene.add(helper);

/////////////////////////////////

// const boxChmn = new THREE.BoxGeometry(0.5, 1, 0.5);

// const plane = new THREE.PlaneGeometry(10, 10, 100, 100);

// const boxHome = new THREE.BoxGeometry(6, 3, 3);

// const vertices = new Float32Array([
//   0, 1.5, 0, -2, 0, 2, 2, 0, 2, -2, 0, -2, 2, 0, -2,
// ]);
// const index = [0, 1, 2, 0, 3, 4, 0, 1, 3, 0, 4, 2, 1, 2, 4, 4, 3, 1];

// const bufferr = new THREE.BufferAttribute(vertices, 3);
// const BoxFlr = new THREE.BufferGeometry();
// BoxFlr.setAttribute("position", bufferr);
// BoxFlr.setIndex(index);

// const material1 = new THREE.MeshBasicMaterial({
//   color: 0xffff90,
//   side: THREE.DoubleSide,
// });
// const material2 = new THREE.MeshBasicMaterial({
//   color: 0xff2323,
//   side: THREE.DoubleSide,
// });


// const cube = new THREE.Mesh(boxChmn, material2); // CREATE THE MODEL
// cube.position.y = 3.6;
// cube.position.x = 1.6;

// const pln = new THREE.Mesh(plane, material);
// pln.rotation.x = Math.PI * 0.5;

// const Homebx = new THREE.Mesh(boxHome, material);
// Homebx.position.y = 1.5;

// const BoxFlour = new THREE.Mesh(BoxFlr, material1);
// BoxFlour.position.y = 3;
// BoxFlour.scale.x = 1.5;
// BoxFlour.scale.z = 0.75;

// const port = new THREE.Mesh(plane, material2);
// port.scale.set(0.1, 0.2);
// port.position.set(0, 1, 1.5);



// renderer.render(scene, camera);


////////////////////////////////////

// const clock = new THREE.Clock();
// let prvTime = 0;
// const renderLoop = () => {
//   const currentTime = clock.getElapsedTime();
//   const delta = currentTime - prvTime;
//   prvTime = currentTime;

//   group.rotation.y += THREE.MathUtils.degToRad(1) * delta * 10;
//   // controls.update(); 
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(renderLoop);
// };
// 

// renderLoop();

/////////////////////////////////////