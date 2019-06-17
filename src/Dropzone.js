import React, { Component } from 'react'
import './Dropzone.css'

class Dropzone extends Component {
  constructor (props) {
    super(props)

    this.state = { file: '', imagePreviewUrl: '', hightlight: false }
    this.fileInputRef = React.createRef()
    this.openFileDialog = this.openFileDialog.bind(this)
    this.onFilesAdded = this.onFilesAdded.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  openFileDialog () {
    if (this.props.disabled) return
    this.fileInputRef.current.click()
  }

  onFilesAdded (evt) {
    if (this.props.disabled) return
    const files = evt.target.files
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array)
    }
  }

  onDragOver (evt) {
    evt.preventDefault()

    if (this.props.disabled) return

    this.setState({ hightlight: true })
  }

  onDragLeave () {
    this.setState({ hightlight: false })
  }

  onDrop (event) {
    event.preventDefault()

    if (this.props.disabled) return

    const files = event.dataTransfer.files
    let reader = new FileReader()
    let file = files[0]
    console.log(file)
    const file1 = new Blob([file], { type: 'application/pdf' })
    const fileURL = URL.createObjectURL(file1)

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
    console.log(fileURL)
    window.open(fileURL)
    this.state.photo = files[0].name
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array)
    }
    this.setState({ hightlight: false })
  }

  fileListToArray (list) {
    const array = []
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i))
    }
    return array
  }

  render () {
    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (
        <a src={imagePreviewUrl}>
          <img src='https://www.google.com/search?q=image&client=firefox-b-e&tbm=isch&source=iu&ictx=1&fir=CJwabmfmxl2ySM%253A%252CpFs_4Fcq5AgpmM%252C_&vet=1&usg=AI4_-kSmsJSXmOnLPc_7R6JjVOmyfiRQpw&sa=X&ved=2ahUKEwial8r9jeTiAhWPepoKHXkfAVMQ9QEwAHoECAUQBA#' />
        </a>
      )
    } else {
      $imagePreview = (
        <div className='previewText'>Click or drop a file here</div>
      )
    }
    return (
      <div
        className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        // onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className='FileInput'
          type='file'
          multiple
          onChange={this.onFilesAdded}
        />
        <div> {$imagePreview}</div>
      </div>
    )
  }
}

export default Dropzone
