import * as Babylon from "babylonjs"
export default () => {
    const WebGLCanvas = document.getElementById("webgl") as HTMLCanvasElement
    const WebGL2Context = WebGLCanvas.getContext("webgl2")
    const engine = new Babylon.Engine(
        WebGL2Context,
        true
    )
    return createTransparentScene(WebGLCanvas,engine)
}

function createTransparentScene(CanvasElement: HTMLCanvasElement,engine: Babylon.Engine){
    const scene = new Babylon.Scene(engine)
    // https://zenn.dev/iwakenlab_book/articles/babylonjs-background-alpha
    scene.clearColor = new Babylon.Color4(0,0,0,0)
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(CanvasElement,true)
    return {engine,scene}
}