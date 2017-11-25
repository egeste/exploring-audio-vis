import React, {
  PureComponent
} from 'react'

import PropTypes from 'prop-types'

import AudioAnalyser from './AudioAnalyser'

export default class AudioVisualiser extends PureComponent {

  static propTypes = {
    renderFrequencyData: PropTypes.func.isRequired
  }

  state = { frequencyData: [] }

  onFrequencyData = frequencyData => this.setState({ frequencyData })

  render() {
    return (
      <div>
        <AudioAnalyser src={ this.props.src }
          onFrequencyData={ this.onFrequencyData }
          style={ { width: '100%' } }
        />
        { this.props.renderFrequencyData([ ...this.state.frequencyData ]) }
      </div>
    )
  }

}
