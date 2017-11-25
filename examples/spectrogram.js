require.ensure([], (require) => {
  const React = require('react')
  const { render } = require('react-dom')
  const { XYPlot, LineSeries } = require('react-vis')
  require('react-vis/dist/style.css')
  require.ensure([], (require) => {
    const audio = require('../assets/childish-gambino-redbone.mp3')
    require.ensure([], (require) => {
      const { default: AudioVisualiser } = require('../src/components/AudioVisualiser')
      render((
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
    })
  })
})
