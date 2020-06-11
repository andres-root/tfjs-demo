
import React from 'react'
import React, { useState, useRef, useReducer } from "react";

// import * as tf from '@tensorflow/tfjs-node'
import * as mobilenet from '@tensorflow-models/mobilenet'

const Demo = (props) => {
  const [model, setModel] = useState(null)
  const [results, setResults] = useState([])
  const [imageUrl, setImageUrl] = useState(null)
  const imageRef = useRef()
  const inputRef = useRef()

  const load = async () => {
    const mobilenetModel = await mobilenet.load()
    setModel(mobilenetModel)
  }

  const handleUpload = event => {
    const { files } = event.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageUrl(url)
    }
   }
  
  const identify = async () => {
    const results = await model.classify(imageRef.current)
    
    setResults(results)
  }

  return (
    <input type="file" accept="image/*" capture="camera" ref={inputRef} onChange={handleUpload}></input>
  )
}

// class Demo extends React.Component {
//     constructor() {
//       const [model, setModel] = useState(null)
//     }

//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
// }

export default Demo;
