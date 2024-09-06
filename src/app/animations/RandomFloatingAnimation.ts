import * as BABYLON from 'babylonjs';

import {ElementAnimation} from "./types";
import Mesh = BABYLON.Mesh;
import Scene = BABYLON.Scene;


export class RandomFloatingAnimation implements ElementAnimation {

    private rangeX = {
        min: -0.4,
        max: 0.4,
    };
    private rangeY = {
        min: -0.4,
        max: 0.4,
    }
    private rangeZ = {
        min: -0.4,
        max: 0.4,
    }

    public constructor(private framerate: number = 60) {
    }

    public apply(element: Mesh, scene: Scene, duration: number): void {

        const durationInFramesX = this.framerate * (duration / 4);

        const framesX = [
            {
                frame: 0,
                value: element.position.x + this.rangeX.min
            },
            {
                frame: durationInFramesX,
                value: element.position.x + this.rangeX.max
            },
            {
                frame: 2 * durationInFramesX,
                value: element.position.x + this.rangeX.max
            },
            {
                frame: 3 * durationInFramesX,
                value: element.position.x + this.rangeX.min
            },
            {
                frame: 4 * durationInFramesX,
                value: element.position.x + this.rangeX.min
            }
        ];

        const animationX = new BABYLON.Animation(
            "xSlide",
            "position.x",
            this.framerate,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        animationX.setKeys(framesX);

        element.animations.push(animationX);

        const durationInFramesZ = durationInFramesX;

        const framesZ = [
            {
                frame: 0,
                value: element.position.z + this.rangeZ.min
            },
            {
                frame: durationInFramesZ,
                value: element.position.z + this.rangeZ.min
            },
            {
                frame: 2 * durationInFramesZ,
                value: element.position.z + this.rangeZ.max
            },
            {
                frame: 3 * durationInFramesZ,
                value: element.position.z + this.rangeZ.max
            },
            {
                frame: 4 * durationInFramesZ,
                value: element.position.z + this.rangeZ.min
            }
        ];

        const animationZ = new BABYLON.Animation(
            "zSlide",
            "position.z",
            this.framerate,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        animationZ.setKeys(framesZ);

        element.animations.push(animationZ);

        const durationFramesRotationZ = durationInFramesZ;

        const completeCircle = 2 * Math.PI;

        const framesRotationZ = [
            {
                frame: 0,
                value: 0
            },
            {
                frame: durationFramesRotationZ,
                value: 0.25 * completeCircle
            },
            {
                frame: 2 * durationFramesRotationZ,
                value: 0.5 * completeCircle
            },
            {
                frame: 3 * durationFramesRotationZ,
                value: 0.75 * completeCircle
            },
            {
                frame: 4 * durationFramesRotationZ,
                value: completeCircle
            }
        ];

        const animationRotationZ = new BABYLON.Animation(
            "zRotation",
            "rotation.z",
            this.framerate,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        animationRotationZ.setKeys(framesRotationZ);

        element.animations.push(animationRotationZ);

        scene.beginAnimation(element, 0, duration * this.framerate, true);

    }

}