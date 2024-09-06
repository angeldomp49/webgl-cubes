import * as BABYLON from 'babylonjs';
import {AnimationFactory} from "./animations/AnimationFactory";
import {RandomCubeFactory} from "./RandomCubeFactory";
import {BrilliantCube} from "./BrilliantCube";

export class CubeHeroSection extends HTMLElement {

    public static register() {
        customElements.define("cube-hero-section", CubeHeroSection);
    }

    public connectedCallback() {

        this.classList.add("cube-hero-section");

        const root = document.createElement('canvas');
        root.classList.add("hero-interactive-elements");
        root.classList.add("hero-layer");
        this.appendChild(root);

        const engine = new BABYLON.Engine(root, true);
        const scene = new BABYLON.Scene(engine);
        const camera = new BABYLON.ArcRotateCamera("camera", 0, (Math.PI), 15, new BABYLON.Vector3(0, 0, 0), scene);

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

        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        engine.runRenderLoop(() => {
            scene.render();
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });

        const backgroundImage = document.createElement("img");
        backgroundImage.src = this.dataset.backgroundImage ?? "";
        backgroundImage.classList.add("hero-background-image");
        backgroundImage.classList.add("hero-layer");

        this.appendChild(backgroundImage);
    }

}