import React, { Component } from 'react'
import './Thumbnail.css'

class Thumbnail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hightlight: false,
      value: this.props.name,
      clicked: false,
      input: ''
    }

    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
  }
  onDragOver (evt) {
    this.setState({ hightlight: true })
  }

  onDragLeave () {
    this.setState({ hightlight: false })
  }
  handleChange = event => {
    this.setState({ input: event.target.value })
  }
  handleClick = () => {
    this.setState({ clicked: true })
    this.setState({ hightlight: false })
  }
  render () {
    return (
      <div>
        <p>
          <time datetime={this.props.datetime}>16.May</time>
        </p>
        <div className='Thumbnail'>
          <img
            className='Image'
            src='https://wallpaperplay.com/walls/full/5/8/2/294655.jpg'
            alt='Paris'
          />
        </div>
        {!this.state.clicked ? (
          <div
            onMouseEnter={this.onDragOver}
            onMouseLeave={this.onDragLeave}
            onClick={this.handleClick}
            className={`Name ${this.state.hightlight ? 'Highlight' : ''}`}
          >
            <p
              className={`${
                this.state.hightlight ? 'ThumbnailTextHover' : 'ThumbnailText'
              }`}
            >
              {this.state.value}
            </p>
          </div>
        ) : (
          <div>
            <input
              type='text'
              defaultValue={this.state.value}
              onChange={this.handleChange}
              className='InputName'
            />
            <button onClick={() => this.setState({ clicked: false })}>X</button>
          </div>
        )}
      </div>
    )
  }
}

export default Thumbnail
