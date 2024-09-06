import * as BABYLON from 'babylonjs';

export type ElementAnimation = {
    apply: (element: BABYLON.Mesh, scene: BABYLON.Scene, speed: number) => void;
}