import React, { Component } from 'react'
import CenterComponent from './component/center'
import ImageApi from './config/image_api'
import './style/index.scss'
import 'typeface-montserrat'

export default class Homepage extends Component {

  constructor(props) {
    super(props)

    this.state = { isLoaded: false, background: '' }
  }

  componentDidMount() {
    ImageApi.getImageBase64('unsplash').then((result) => {
      if (result.success) {
        this.setState({ isLoaded: true, background: result.data });
      }
    });
  }

  render() {
    return (
      <div
        className={`index${this.state.isLoaded ? ' loaded' : ''}`}
        style={{ backgroundImage: `url('data:image/jpg;base64,${this.state.background}')` }}>
        <CenterComponent />
      </div>
    )
  }
}
