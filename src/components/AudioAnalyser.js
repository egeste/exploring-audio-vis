import React, {
  PureComponent
} from 'react'

import PropTypes from 'prop-types'

import ReactAudioPlayer from 'react-audio-player'

export default class AudioAnalyser extends PureComponent {

  static propTypes = {
    ...ReactAudioPlayer.propTypes,
    onFrequencyData: PropTypes.func.isRequired
  }

  // Track our playing state
  state = { playing: false }

  // Analyse a single "frame" of audio
  onAudioFrame = () => {
    // Don't do anything if we're paused, or if we don't have an analyser
    if (!this.state.playing || !this.audioAnalyser) return

    // Create a new Uint8Array to inject the frequency data into
    const frequencyData = new Uint8Array(this.audioAnalyser.frequencyBinCount)

    // Inject the frequency data into the array
    this.audioAnalyser.getByteFrequencyData(frequencyData)

    // Invoke our `onFrequencyData` prop
    this.props.onFrequencyData(frequencyData)

    // On the next animation frame, repeat the process
    requestAnimationFrame(this.onAudioFrame)
  }

  // Handle the audio player ref once it's rendered
  onAudioPlayerRef = audioPlayerRef => {
    if (!audioPlayerRef || !audioPlayerRef.audioEl) return

    // Allow the audio element to read data from dubious sources
    audioPlayerRef.audioEl.crossOrigin="anonymous"

    // Interface with the Web Audio API
    const audioContext = new AudioContext()
    const audioSource = audioContext.createMediaElementSource(audioPlayerRef.audioEl)
    this.audioAnalyser = audioContext.createAnalyser()

    // Connect our audio source to the analyser
    audioSource.connect(this.audioAnalyser)

    // And also to the audio destination
    audioSource.connect(audioContext.destination)
  }

  // Create a simple interface for tracking play state
  onUpdatePlaying = (playing, callback) => (...args) => {
    // Figure out what the current/new play state is
    const isCurrentlyPlaying = this.state.playing
    const shouldNowBePlaying = playing

    // Cache the new play state
    this.setState({ playing })

    // Start tracking the audio frequencies if we started playing
    if (!isCurrentlyPlaying && shouldNowBePlaying) {
      this.onAudioFrame()
    }

    // Invoke the callback with whatever args we were passed
    if (typeof callback === 'function') {
      return callback(...args)
    }
  }

  render() {
    return (
      <ReactAudioPlayer controls
        { ...this.props }
        ref={ this.onAudioPlayerRef }
        onAbort={ this.onUpdatePlaying(false, this.props.onAbort) }
        onEnded={ this.onUpdatePlaying(false, this.props.onEnded) }
        onPause={ this.onUpdatePlaying(false, this.props.onPause) }
        onPlay={ this.onUpdatePlaying(true, this.props.onPlay) }
      />
    )
  }

}
