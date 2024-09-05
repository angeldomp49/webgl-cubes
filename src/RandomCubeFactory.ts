import * as BABYLON from 'babylonjs';
import Mesh = BABYLON.Mesh;
import {ColoredCube} from "./ColoredCube";
import Scene = BABYLON.Scene;
import {ColoredCubeSettings} from "./types";

export class RandomCubeFactory {

    public createRandomCube(scene: Scene): ColoredCube{

        const maxSize = 0.4;
        const minSize = 0.2;

        const settings: ColoredCubeSettings = {
            size: this.getRandomByLimit(maxSize, minSize),
            color: new BABYLON.Color3(
                this.getRandomByLimit(1, 0.4),
                this.getRandomByLimit(1, 0.4),
                this.getRandomByLimit(1, 0.4)
            ),
            position: new BABYLON.Vector3(
                this.getRandomByLimit(5, -5),
                this.getRandomByLimit(5, -5),
                this.getRandomByLimit(8, -8)
            ),
            rotation: new BABYLON.Vector3(
                this.getRandomByLimit(1),
                this.getRandomByLimit(1),
                this.getRandomByLimit(1)
            )
        };

        return new ColoredCube(scene, settings);

    }

    private getRandomByLimit(limit: number = 1, minimal: number = 0): number{
        return Math.random() * (limit - minimal) + minimal;
    }


}