import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AudioVisualiser from '../src/components/AudioVisualiser'
import AudioAnalyser from '../src/components/AudioAnalyser'

import {
  XYPlot,
  XAxis, YAxis,
  HorizontalGridLines,
  ArcSeries,
  AreaSeries,
  LineSeries,
  PolygonSeries
} from 'react-vis'

import { pie } from 'd3-shape'

import 'react-vis/dist/style.css'

const colorBrewerSeq9 = [
  '#f7fbff',
  '#deebf7',
  '#c6dbef',
  '#9ecae1',
  '#6baed6',
  '#4292c6',
  '#2171b5',
  '#08519c',
  '#08306b'
]

storiesOf('AudioAnalyser', module).add('Basic Usage', () => (
  <AudioAnalyser
    src={ require('../assets/childish-gambino-redbone.mp3') }
    onPlay={ action('onPlay') }
    onAbort={ action('onAbort') }
    onEnded={ action('onEnded') }
    onPause={ action('onPause') }
    onFrequencyData={ action('onFrequencyData') }
  />
))

storiesOf('AudioVisualiser', module).add('With a LineSeries', () => (
  <AudioVisualiser
    src={ require('../assets/childish-gambino-redbone.mp3') }
    renderFrequencyData={ frequencyData => {
      const data = frequencyData.map((y, x) => ({ x, y }))

      return (
        <XYPlot width={ 600 } height={ 300 }>
          <LineSeries data={ data } color="purple" />
        </XYPlot>
      )
    } }
  />
)).add('With AreaSeries', () => (
  <AudioVisualiser
    src={ require('../assets/skrillex-humble.mp3') }
    renderFrequencyData={ frequencyData => {
      const data = frequencyData.map((y, x) => ({ x, y }))

      return (
        <XYPlot width={ 600 } height={ 300 }>
          <AreaSeries data={ data } color="purple" />
        </XYPlot>
      )
    } }
  />
)).add('With PolygonSeries', () => (
  <AudioVisualiser
    src={ require('../assets/egeste-sinnplex.mp3') }
    renderFrequencyData={ frequencyData => {
      const data = frequencyData.map((y, x) => ({ x, y }))

      return (
        <XYPlot width={ 600 } height={ 300 }>
          <PolygonSeries data={ [ { x: 0, y: 0 }, ...data, { x: data.length, y: 0 }] } color="purple" />
        </XYPlot>
      )
    } }
  />
)).add('With ArcSeries', () => (
  <AudioVisualiser
    src={ require('../assets/egeste-sinnplex.mp3') }
    renderFrequencyData={ frequencyData => {
      const data = pie()
        .sort(() => true)
        .value(identity => identity)
        .call(null, frequencyData)
        .map(datum => ({
          value: 1,
          color: colorBrewerSeq9[datum.index % colorBrewerSeq9.length],
          angle: datum.endAngle,
          angle0: datum.startAngle,
          radius: (datum.value / 255),
          radius0: 0
        }))

      return (
        <XYPlot
          width={ 300 }
          height={ 300 }
          xDomain={ [ 0, 300 ] }
          yDomain={ [ 300, 0 ] }
        >
          <ArcSeries data={ data }
            center={ { x: 150, y: 150 } }
            colorType="literal"
          />
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
