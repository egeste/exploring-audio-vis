require.ensure([], (require) => {
  const { default: React } = require('react')
  const { default: ReactDOM } = require('react-dom')
  const { XYPlot, LineSeries } = require('react-vis')
  require.ensure([], (require) => {
    const audio = require('../assets/childish-gambino-redbone.mp3')
    require.ensure([], (require) => {
      const { default: AudioVisualiser } = require('../src/components/AudioVisualiser')
      ReactDOM.render((
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
      ), document.querySelector('.react-spectrogram'))
    })
  })
})

// import React from 'react'
// import ReactDOM from 'react-dom'

// import AudioVisualiser from '../src/components/AudioVisualiser'
// import audio from '../assets/childish-gambino-redbone.mp3'

// import

// // import '../node_modules/react-vis/dist/style.css'


