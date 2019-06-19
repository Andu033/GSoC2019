import React, { Component } from 'react'
import Thumbnail from './components/Thumbnail/Thumbnail.js'

class ThumbnailController extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'asdasdasasfas',
      content: {}
    }
  }

  componentDidMount = () => {
    // axios
    //   .get(
    //     'https://fortunedotcom.files.wordpress.com/2017/02/google-company-search-logo-fact-checking-truth-news.jpg'
    //   )
    //   .then(response => {
    //     if (response.data) {
    //       this.setState({ content: response.data })
    //       console.log(response.data)
    //       this.checkMIME(this.state.content)
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // this.setState({ content: this.props.file })
    // this.checkMIME(this.content)
  }

  getMime (signature) {
    switch (signature) {
      case '89504E47':
        return 'image/png'
      case '47494638':
        return 'image/gif'
      case '25504446':
        return 'application/pdf'

      case 'ffd8ffdb':
      case 'ffd8ffe0':
      case 'ffd8ffe1':
        return 'image/jpeg'
      case '504B0304':
        return 'application/zip'
      default:
        return 'Unknown filetype'
    }
  }

  onLoadCallBack = e => {
    var arr = new Uint8Array(e.target.result).subarray(0, 4)
    var header = ''
    for (var i = 0; i < arr.length; i++) {
      header += arr[i].toString(16)
    }
    console.log(this.getMime(header))
    console.log(header)
  }

  checkMIME (file) {
    var fileReader = new FileReader()
    fileReader.onloadend = this.onLoadCallBack

    fileReader.readAsArrayBuffer(file)
  }

  render () {
    return (
      <div>
        <Thumbnail name={this.state.value} content={this.state.content} />
      </div>
    )
  }
}

export default ThumbnailController
