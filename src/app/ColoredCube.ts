import * as BABYLON from 'babylonjs';
import {ColoredCubeSettings, DrawableElement} from "./types";
import Scene = BABYLON.Scene;
import Mesh = BABYLON.Mesh;

export class ColoredCube implements DrawableElement {

    public constructor(private scene: Scene, private settings: ColoredCubeSettings) {
        this._nativeElement = BABYLON.MeshBuilder.CreateBox("cube", {size: this.settings?.size ?? 1}, this.scene);
    }

    private _nativeElement: Mesh;

    get nativeElement(): Mesh {
        return this._nativeElement;
    }

    public draw() {

        const cube1Material = new BABYLON.StandardMaterial("material", this.scene);
        cube1Material.diffuseColor = this.settings?.color ?? new BABYLON.Color3(1, 1, 1);

        this._nativeElement.position = this.settings?.position ?? new BABYLON.Vector3(0, 0, 0);

        this._nativeElement.rotation = this.settings?.rotation ?? new BABYLON.Vector3(0, 0, 0);

        this._nativeElement.material = cube1Material;
    }
}