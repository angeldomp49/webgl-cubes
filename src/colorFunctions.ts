import * as BABYLON from 'babylonjs';

export const rgb = (red: number, green: number, blue: number) => new BABYLON.Color3(fromRGB(red), fromRGB(green), fromRGB(blue));
export const fromRGB = (input: number) => input/255;