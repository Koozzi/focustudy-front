import * as React from "react";
import * as tf from '@tensorflow/tfjs';
const initMesh = () => {
    const enterBtn = document.querySelector("#enterBtn");
    const webcamElement = document.getElementById('myVideo');
    const facemesh = require("@tensorflow-models/facemesh");
    
    async function main(){
        const model = await facemesh.load();
        console.log("AAAAAAAAAAAAAAA");
        const predictions = await model.estimateFaces(webcamElement);
        console.log("AAAAAAAAAAAAAAA");
        if(predictions.length > 0){
            for(let i=0;i<predictions.length;i++){
                const keypoints = predictions[i].scaledMesh;
                for(let j=0;j<keypoints.length;j++){
                    const [x, y, z] = keypoints[j];
                    console.log("Keypoint ${j}:[${x}, ${y}, ${z}]");
                }

            }
        }

    }
    webcamElement.addEventListener("loadeddata", function(){
        console.log("Nothing to load");
    }, false);
    webcamElement.addEventListener("loadeddata", function(){
        main();
    }, true);
    enterBtn.addEventListener("click",
        evt => {
          // main();
          evt.preventDefault();
        },
        false
    );
}
export default initMesh;