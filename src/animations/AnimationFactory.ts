import * as BABYLON from 'babylonjs';
import Mesh = BABYLON.Mesh;
import {RandomFloatingSettings} from "./types";
import Scene = BABYLON.Scene;
import {RandomFloatingAnimation} from "./RandomFloatingAnimation";

export class AnimationFactory {

    public constructor(private framerate: number = 60) {
    }

    public randomFloating(element: Mesh, scene: Scene, duration: number) {

        const animation = new RandomFloatingAnimation();

        animation.apply(element, scene, duration);

    }

}