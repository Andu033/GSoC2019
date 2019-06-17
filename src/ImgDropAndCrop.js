import React, { Component } from 'react'

class ImgDropAndCrop extends Component {
  handleOnDrop = (files, rejected) => {
    console.log(files)
  }
  render () {
    return (
      <div>
        <h1>Drop and crop</h1>
        <Dropzone onDrop={handleOnDrop} />
      </div>
    )
  }
}

export default ImgDropAndCrop
