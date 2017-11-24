import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AudioAnalyser from '../src/components/AudioAnalyser'

storiesOf('AudioAnalyser', module)
  .add('Basic Usage', () => (
    <AudioAnalyser
      src={ require('../assets/Sinnplex.mp3') }
      onPlay={ action('onPlay') }
      onAbort={ action('onAbort') }
      onEnded={ action('onEnded') }
      onPause={ action('onPause') }
      onFrequencyData={ action('onFrequencyData') }
    />
  ));
