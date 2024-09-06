import * as BABYLON from 'babylonjs';
import {BrilliantCubeSettings, ColoredCubeSettings, DrawableElement} from "./types";
import Mesh = BABYLON.Mesh;
import Scene = BABYLON.Scene;
import {fromRGB, rgb} from "./colorFunctions";

export class BrilliantCube implements DrawableElement{

    private _nativeElement: Mesh;

    public constructor(private scene: Scene, private settings: BrilliantCubeSettings) {
        this._nativeElement = BABYLON.MeshBuilder.CreateBox("cube", {size: this.settings?.size ?? 1}, this.scene);
    }

    public draw(){

        const cubeMaterial = new BABYLON.StandardMaterial("material", this.scene);
        cubeMaterial.emissiveColor = this.settings?.color ?? new BABYLON.Color3(1,1,1);
        cubeMaterial.alpha = this.settings?.alpha ?? 0.8;

        this._nativeElement.position = this.settings?.position ?? new BABYLON.Vector3(0, 0, 0);

        this._nativeElement.rotation = this.settings?.rotation ?? new BABYLON.Vector3(0, 0, 0);

        this._nativeElement.material = cubeMaterial;

    }


    get nativeElement(): Mesh {
        return this._nativeElement;
    }

}