import React, { Component } from 'react'
import Dropzone from './Dropzone.js'
import './App.css'
import ThumbnailController from './ThumbnailController.js'
class App extends Component {
  render () {
    return (
      <div>
        <ThumbnailController name='asdasasdasda' />
        <Dropzone className='Child' />
      </div>
    )
  }
}

export default App
