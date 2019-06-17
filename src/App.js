import React, { Component } from 'react'
import Dropzone from './Dropzone.js'

import './App.css'
import ThumbnailController from './ThumbnailController.js'
class App extends Component {
  state = {
    value: '',
    content: null
  }
  constentUpdate = file => {
    this.setState({ content: file })
  }
  handleChange = event => {
    this.state.value = event.target.value
    console.log(event.target.value)
  }
  handleFile = file => {
    this.state.file = file
  }

  render () {
    return (
      <div>
        <ThumbnailController name='asdasasdasda' />
        {/* <p>File</p> */}
        <Dropzone className='Child' />
        {/* <textarea className='Child' onChange={this.handleChange } /> */}
      </div>
    )
  }
}

export default App
