import * as BABYLON from 'babylonjs';
import {RandomCubeFactory} from "./RandomCubeFactory";
import {ColoredCube} from "./ColoredCube";
import {AnimationFactory} from "./animations/AnimationFactory";
import {BrilliantCube} from "./BrilliantCube";
import {fromRGB} from "./colorFunctions";

function create() {
    const root = document.getElementById('root') as HTMLCanvasElement;

    const engine = new BABYLON.Engine(root, true);
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", 0, (Math.PI ), 15, new BABYLON.Vector3(0, 0, 0), scene);
    // const camera = new BABYLON.FreeCamera("some", new BABYLON.Vector3(0, 1, -10), scene);

    camera.attachControl(root, true);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0,
        1, 0), scene);

    const animationFactory = new AnimationFactory();


    const cubeFactory = new RandomCubeFactory();

    const cubes: BrilliantCube[] = [];

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomBrilliantCube(scene);
        currentCube.draw();

        animationFactory.randomFloating(currentCube.nativeElement, scene, 60);
        cubes.push(currentCube);
    }

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomBrilliantCube(scene);
        currentCube.draw();

        animationFactory.randomFloating(currentCube.nativeElement, scene, 34);
        cubes.push(currentCube);
    }

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomBrilliantCube(scene);
        currentCube.draw();

        animationFactory.randomFloating(currentCube.nativeElement, scene, 44);
        cubes.push(currentCube);
    }

    for (let i = 0; i < 20; i++) {
        const currentCube = cubeFactory.createRandomBrilliantCube(scene);
        currentCube.draw();

        animationFactory.randomFloating(currentCube.nativeElement, scene, 44);
        cubes.push(currentCube);
    }

    const background = new BABYLON.BackgroundMaterial("background", scene);
    background.reflectionTexture = new BABYLON.Texture("assets/images/rectangle6.png", scene);
    background.reflectionTexture.coordinatesMode = BABYLON.Texture.EXPLICIT_MODE;

    const backgroundMesh = BABYLON.MeshBuilder.CreateBox("bg", { size: 500, sideOrientation: BABYLON.Mesh.BACKSIDE },scene);

    backgroundMesh.material = background;

    engine.runRenderLoop(() => {
        scene.render();
    });

    // const mouseMoveListener = (e: MouseEvent) => {
    //
    //     console.log("X: "+e.clientX);
    //     console.log("Y: "+e.clientY);
    //
    //     console.log("screenX: " + e.screenX);
    //     console.log("screenY: " + e.screenY);
    //
    //     console.log("pageX: " + e.pageX);
    //     console.log("pageY: " + e.pageY);
    //
    //     cubes.forEach((cube: BrilliantCube) => {
    //         animationFactory.followCursor(cube.nativeElement, scene, 0.1, e);
    //     });
    //
    // };

    // root.addEventListener("mouseenter", () => {
    //     root.addEventListener("mousemove", mouseMoveListener);
    // });
    //
    // root.addEventListener("mouseout", () => {
    //     root.removeEventListener("mousemove", mouseMoveListener);
    // })

}

document.addEventListener('DOMContentLoaded', () => {
    create();
})
