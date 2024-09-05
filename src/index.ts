import * as BABYLON from 'babylonjs';
import {RandomCubeFactory} from "./RandomCubeFactory";
import {ColoredCube} from "./ColoredCube";
import {AnimationFactory} from "./animations/AnimationFactory";

function create() {
    const root = document.getElementById('root') as HTMLCanvasElement;

    const engine = new BABYLON.Engine(root, true);
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

    camera.attachControl(root, true);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,
        1, 0), scene);

    const animationFactory = new AnimationFactory();


    const cubeFactory = new RandomCubeFactory();

    const cubes = [];

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomCube(scene);
        currentCube.draw();
        animationFactory.randomFloating(currentCube.nativeElement, scene, 32);
        cubes.push(currentCube);
    }

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomCube(scene);
        currentCube.draw();
        animationFactory.randomFloating(currentCube.nativeElement, scene, 28);
        cubes.push(currentCube);
    }

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomCube(scene);
        currentCube.draw();
        animationFactory.randomFloating(currentCube.nativeElement, scene, 40);
        cubes.push(currentCube);
    }

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomCube(scene);
        currentCube.draw();
        animationFactory.randomFloating(currentCube.nativeElement, scene, 44);
        cubes.push(currentCube);
    }

    engine.runRenderLoop(() => {
        scene.render();
    });

}

document.addEventListener('DOMContentLoaded', () => {
    create();
})

function getColor(base: number) {
    return (base / 255);
}