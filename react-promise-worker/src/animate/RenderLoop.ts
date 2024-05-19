import * as Babylon from "babylonjs";

export default (engine: Babylon.Engine,scene: Babylon.Scene) => {
    engine.runRenderLoop(() => {
        if(scene && scene.activeCamera){
            scene.render()
        }
    })
}

