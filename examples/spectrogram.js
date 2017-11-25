import React from 'react'
import ReactDOM from 'react-dom'
import { XYPlot, LineSeries } from 'react-vis'

import 'react-vis/dist/style.css'

import audio from '../assets/childish-gambino-redbone.mp3'
import AudioVisualiser from '../src/components/AudioVisualiser'

ReactDOM.render((
  <AudioVisualiser src={ audio }
    renderFrequencyData={ frequencyData => {
      const oneThirdLength = frequencyData.length / 3
      const lowerTwoThirds = frequencyData.slice(0, -oneThirdLength)
      const data = lowerTwoThirds.map((y, x) => ({ x, y }))

      return (
        <XYPlot width={ 938 } height={ 300 }>
          <LineSeries data={ data } color="purple" />
        </XYPlot>
      )
    } }
  />
), document.querySelector('.react-spectrogram'))
