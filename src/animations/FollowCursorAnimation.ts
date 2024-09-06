import * as BABYLON from 'babylonjs';
import {ElementAnimation} from "./types";
import Mesh = BABYLON.Mesh;
import Scene = BABYLON.Scene;

export class FollowCursorAnimation implements ElementAnimation{

    public constructor(private framerate: number = 60, private mouseEvent: MouseEvent) {
    }

    public apply(element: Mesh, scene: Scene, duration: number) {

        const frameDuration = this.framerate * duration;
        const cursorX = this.mouseEvent.screenX / 500;

        const framesX = [
            {
                frame: 0,
                value: element.position.x
            },
            {
                frame: frameDuration,
                value: cursorX
            }];

        const animationX = new BABYLON.Animation(
            "xSlide",
            "position.x",
            this.framerate,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );

        animationX.setKeys(framesX);

        element.animations.push(animationX);

        const cursorY = this.mouseEvent.screenY / 500;

        const framesY = [
            {
                frame: 0,
                value: element.position.y
            },
            {
                frame: frameDuration,
                value: cursorY
            }];

        const animationY = new BABYLON.Animation(
            "ySlide",
            "position.y",
            this.framerate,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );

        animationY.setKeys(framesY);

        element.animations.push(animationY);

        element.position.z = 1;

        scene.beginAnimation(element, 0, duration * this.framerate, true);

    }

    private isPositiveXDirection(mouseEvent: MouseEvent) {
        const originPoint = window.innerWidth / 2;
        return mouseEvent.screenX >= originPoint;
    }

    private isPositiveYDirection(mouseEvent: MouseEvent) {
        const originPoint = ((window.innerHeight - 110) / 2);

        return mouseEvent.screenY >= originPoint;
    }

}