import * as THREE from './three.module.js';
import {
	OBJLoader
} from './OBJLoader.js';

export async function loadModel() {

	const finalPositions = [];

	const loader = new OBJLoader();
	loader.load(
		// resource URL
		'./models/Blaues_Salz_01.obj',
		// called when resource is loaded
		function (object) {
		
			let vertices = object.children[0].geometry.attributes.position.array;
			console.log(vertices)
			return vertices;

		},
		// called when loading is in progresses
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);


	

	/*for (let i = 0; i < indices.length; i++) {
		const index1 = indices[i] * 3 + 0;
		const index2 = indices[i] * 3 + 1;
		const index3 = indices[i] * 3 + 2;

		finalPositions.push(positions[index1]);
		finalPositions.push(positions[index2]);
		finalPositions.push(positions[index3]);
	}
	return new Float32Array(finalPositions);*/
}