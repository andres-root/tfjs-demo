
import React from 'react'
import * as tf from '@tensorflow/tfjs'
import * as automl from '@tensorflow/tfjs-automl'


class ObjectDetection extends React.Component {
    async run() {
      console.log('run');
      // [START load_and_run_model]
      const model = await automl.loadObjectDetection('model.json');
      const img = document.getElementById('image');
      const options = {score: 0.5, iou: 0.5, topk: 20};
      const predictions = await model.detect(img, options);
      // [END load_and_run_model]
      console.log(predictions);
      // Show the resulting object on the page.
      const pre = document.createElement('image');
      pre.textContent = JSON.stringify(predictions, null, 2);
      document.body.append(pre);
    }

    componentDidMount() {
      this.run()
    }

    render() {
      return <div className="wrapper">
        <img id="image" crossOrigin="anonymous" src="/4a.png"></img>
      </div>      
    }
}

export default ObjectDetection
