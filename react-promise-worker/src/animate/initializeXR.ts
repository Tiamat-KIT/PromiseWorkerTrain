import * as Babylon from "babylonjs"
// https://www.docswell.com/s/Tks_Yoshinaga/K24EG1-quest-webxr
export default async(scene: Babylon.Scene) => {
    const xr =  await scene.createDefaultXRExperienceAsync({
        uiOptions: {
            sessionMode: "immersive-ar"
        }
    })
    if(xr.baseExperience){
        xr.baseExperience.onStateChangedObservable.add((state) => {
            if(state === Babylon.WebXRState.IN_XR){
                if(scene.activeCamera !== null){
                    xr.baseExperience.camera.position.set(
                        0,
                        scene.activeCamera.position.y,
                        -2
                    )
                }
            }
            /* const xrHandTrackFeature = xr.baseExperience.featuresManager.enableFeature(
                Babylon.WebXRFeatureName.HAND_TRACKING,
                "latest",
                {
                    xrInput: xr.input
                }
            ) */
        })
    }
}