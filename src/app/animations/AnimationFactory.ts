import * as BABYLON from 'babylonjs';
import {RandomFloatingAnimation} from "./RandomFloatingAnimation";
import {FollowCursorAnimation} from "./FollowCursorAnimation";
import Mesh = BABYLON.Mesh;
import Scene = BABYLON.Scene;

export class AnimationFactory {

    public constructor(private framerate: number = 60) {
    }

    public randomFloating(element: Mesh, scene: Scene, duration: number) {

        const animation = new RandomFloatingAnimation();

        animation.apply(element, scene, duration);

    }

    public followCursor(element: Mesh, scene: Scene, duration: number, mouseEvent: MouseEvent): void {
        const animation = new FollowCursorAnimation(60, mouseEvent);

        animation.apply(element, scene, duration);
    }

}