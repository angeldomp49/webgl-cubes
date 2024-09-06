import * as BABYLON from 'babylonjs';
import {BrilliantCubeSettings, DrawableElement} from "./types";
import Mesh = BABYLON.Mesh;
import Scene = BABYLON.Scene;

export class BrilliantCube implements DrawableElement {

    public constructor(private scene: Scene, private settings: BrilliantCubeSettings) {
        this._nativeElement = BABYLON.MeshBuilder.CreateBox("cube", {size: this.settings?.size ?? 1}, this.scene);
    }

    private _nativeElement: Mesh;

    get nativeElement(): Mesh {
        return this._nativeElement;
    }

    public draw() {

        const cubeMaterial = new BABYLON.StandardMaterial("material", this.scene);
        cubeMaterial.emissiveColor = this.settings?.color ?? new BABYLON.Color3(1, 1, 1);
        cubeMaterial.alpha = this.settings?.alpha ?? 0.8;

        this._nativeElement.position = this.settings?.position ?? new BABYLON.Vector3(0, 0, 0);

        this._nativeElement.rotation = this.settings?.rotation ?? new BABYLON.Vector3(0, 0, 0);

        this._nativeElement.material = cubeMaterial;

    }

}