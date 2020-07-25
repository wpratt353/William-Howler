import React, { Component } from 'react'
import Progress from 'react-progressbar.js'

import { ProgressWrap } from './style'

class ProgressBar extends Component {
  render() {
    var ProgressBarApp = require('react-progressbar.js')
    var Line = ProgressBarApp.Line
    var options = {
      strokeWidth: 2,
    }

    return (
      <Line
        progress={this.state.progress}
        options={options}
        initialAnimate={true}
        containerClassName={'.progressbar-container'}
      />
    )
  }
}

export default ProgressBar
