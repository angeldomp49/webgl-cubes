import * as BABYLON from 'babylonjs';
import {ColoredCube} from "./ColoredCube";
import {BrilliantCubeSettings, ColoredCubeSettings} from "./types";
import {randomByLimit} from "./random";
import {BrilliantCube} from "./BrilliantCube";
import {fromRGB} from "./colorFunctions";
import Scene = BABYLON.Scene;

export class RandomCubeFactory {

    public createRandomCube(scene: Scene): ColoredCube {

        const maxSize = 0.4;
        const minSize = 0.2;

        const settings: ColoredCubeSettings = {
            size: this.getRandomByLimit(maxSize, minSize),
            color: new BABYLON.Color3(
                this.getRandomByLimit(0.8, 0.4),
                this.getRandomByLimit(0.8, 0.4),
                this.getRandomByLimit(0.8, 0.4)
            ),
            position: new BABYLON.Vector3(
                this.getRandomByLimit(5, -5),
                this.getRandomByLimit(3, -8),
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

    public createRandomBrilliantCube(scene: Scene): BrilliantCube {
        const maxSize = 0.4;
        const minSize = 0.2;

        const settings: BrilliantCubeSettings = {
            size: this.getRandomByLimit(maxSize, minSize),
            color: new BABYLON.Color3(
                randomByLimit(fromRGB(160), 0),
                randomByLimit(fromRGB(160), 0),
                randomByLimit(fromRGB(160), 0)
            ),
            position: new BABYLON.Vector3(
                this.getRandomByLimit(5, -5),
                this.getRandomByLimit(3, -8),
                this.getRandomByLimit(8, -8)
            ),
            rotation: new BABYLON.Vector3(
                this.getRandomByLimit(1),
                this.getRandomByLimit(1),
                this.getRandomByLimit(1)
            ),
            alpha: randomByLimit(0.9, 0.6)
        };

        return new BrilliantCube(scene, settings);
    }

    private getRandomByLimit(limit: number = 1, minimal: number = 0): number {
        return randomByLimit(limit, minimal);
    }


}