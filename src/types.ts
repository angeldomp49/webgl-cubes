import * as BABYLON from 'babylonjs';
import Color3 = BABYLON.Color3;
import Vector3 = BABYLON.Vector3;

export type ColoredCubeSettings = {
    color?: Color3;
    size?: number;
    position?: Vector3;
    rotation?: Vector3;
}

export type BrilliantCubeSettings = {
    color?: Color3;
    size?: number;
    position?: Vector3;
    rotation?: Vector3;
    alpha?: number;
}

export type DrawableElement = {
    draw: () => void;
}