import React, { Component } from 'react'
import '../../assets/Thumbnail.css'

class Thumbnail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hightlight: false,
      value: this.props.name,
      clicked: false,
      input: ''
    }

    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onMouseOver (evt) {
    this.setState({ hightlight: true })
  }

  onMouseLeave () {
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
            src='https://i.ytimg.com/vi/szmS_M-BMls/maxresdefault.jpg'
            alt='Paris'
          />
        </div>
        {!this.state.clicked ? (
          <div
            onMouseEnter={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}
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
            <br />
            <button onClick={() => this.setState({ clicked: false })}>Y</button>
            <button onClick={() => this.setState({ clicked: false })}>X</button>
          </div>
        )}
      </div>
    )
  }
}

export default Thumbnail
