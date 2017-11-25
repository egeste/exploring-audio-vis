import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AudioVisualiser from '../src/components/AudioVisualiser'
import AudioAnalyser from '../src/components/AudioAnalyser'
import audio from '../assets/childish-gambino-redbone.mp3'

import {
  XYPlot,
  XAxis, YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis'

import 'react-vis/dist/style.css'

storiesOf('AudioAnalyser', module).add('Basic Usage', () => (
  <AudioAnalyser
    src={ audio }
    onPlay={ action('onPlay') }
    onAbort={ action('onAbort') }
    onEnded={ action('onEnded') }
    onPause={ action('onPause') }
    onFrequencyData={ action('onFrequencyData') }
  />
)).add('With a line chart', () => (
  <AudioVisualiser src={ audio }
    renderFrequencyData={ frequencyData => {
      const oneThirdLength = frequencyData.length / 3
      const lowerTwoThirds = frequencyData.slice(0, -oneThirdLength)
      const data = lowerTwoThirds.map((y, x) => ({ x, y }))

      return (
        <XYPlot width={ 600 } height={ 300 }>
          <LineSeries data={ data } color="purple" />
        </XYPlot>
      )
    } }
  />
))

// const chunkedData = []
// while (lowerThird.length) {
//   chunkedData.push(lowerThird.splice(0, 4))
// }

// const data = chunkedData.map((chunk, x) => {
//   const y = chunk.reduce((memo, amplitude) => {
//     return memo + amplitude
//   }, 0) / chunk.length
//   return { x, y }
// })
