webpackJsonp([1],{

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAudioPlayer = __webpack_require__(425);

var _reactAudioPlayer2 = _interopRequireDefault(_reactAudioPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioAnalyser = (_temp2 = _class = function (_PureComponent) {
  _inherits(AudioAnalyser, _PureComponent);

  function AudioAnalyser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AudioAnalyser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AudioAnalyser.__proto__ || Object.getPrototypeOf(AudioAnalyser)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Track our playing state


  // Analyse a single "frame" of audio


  // Handle the audio player ref once it's rendered


  // Create a simple interface for tracking play state


  _createClass(AudioAnalyser, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactAudioPlayer2.default, _extends({ controls: true
      }, this.props, {
        ref: this.onAudioPlayerRef,
        onAbort: this.onUpdatePlaying(false, this.props.onAbort),
        onEnded: this.onUpdatePlaying(false, this.props.onEnded),
        onPause: this.onUpdatePlaying(false, this.props.onPause),
        onPlay: this.onUpdatePlaying(true, this.props.onPlay)
      }));
    }
  }]);

  return AudioAnalyser;
}(_react.PureComponent), _class.propTypes = _extends({}, _reactAudioPlayer2.default.propTypes, {
  onFrequencyData: _propTypes2.default.func.isRequired }), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { playing: false };

  this.onAudioFrame = function () {
    // Don't do anything if we're paused, or if we don't have an analyser
    if (!_this2.state.playing || !_this2.audioAnalyser) return;

    // Create a new Uint8Array to inject the frequency data into
    var frequencyData = new Uint8Array(_this2.audioAnalyser.frequencyBinCount);

    // Inject the frequency data into the array
    _this2.audioAnalyser.getByteFrequencyData(frequencyData);

    // Invoke our `onFrequencyData` prop
    _this2.props.onFrequencyData(frequencyData);

    // On the next animation frame, repeat the process
    requestAnimationFrame(_this2.onAudioFrame);
  };

  this.onAudioPlayerRef = function (audioPlayerRef) {
    if (!audioPlayerRef || !audioPlayerRef.audioEl) return;

    // Allow the audio element to read data from dubious sources
    audioPlayerRef.audioEl.crossOrigin = "anonymous";

    // Interface with the Web Audio API
    var audioContext = new AudioContext();
    var audioSource = audioContext.createMediaElementSource(audioPlayerRef.audioEl);
    _this2.audioAnalyser = audioContext.createAnalyser();

    // Connect our audio source to the analyser
    audioSource.connect(_this2.audioAnalyser);

    // And also to the audio destination
    audioSource.connect(audioContext.destination);
  };

  this.onUpdatePlaying = function (playing, callback) {
    return function () {
      // Figure out what the current/new play state is
      var isCurrentlyPlaying = _this2.state.playing;
      var shouldNowBePlaying = playing;

      // Cache the new play state
      _this2.setState({ playing: playing });

      // Start tracking the audio frequencies if we started playing
      if (!isCurrentlyPlaying && shouldNowBePlaying) {
        _this2.onAudioFrame();
      }

      // Invoke the callback with whatever args we were passed
      if (typeof callback === 'function') {
        return callback.apply(undefined, arguments);
      }
    };
  };
}, _temp2);
exports.default = AudioAnalyser;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),i=o(l),c=n(1),d=o(c),f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.audioEl;t.addEventListener("error",function(t){e.props.onError(t)}),t.addEventListener("canplay",function(t){e.props.onCanPlay(t)}),t.addEventListener("canplaythrough",function(t){e.props.onCanPlayThrough(t)}),t.addEventListener("play",function(t){e.setListenTrack(),e.props.onPlay(t)}),t.addEventListener("abort",function(t){e.clearListenTrack(),e.props.onAbort(t)}),t.addEventListener("ended",function(t){e.clearListenTrack(),e.props.onEnded(t)}),t.addEventListener("pause",function(t){e.clearListenTrack(),e.props.onPause(t)}),t.addEventListener("seeked",function(t){e.props.onSeeked(t)}),t.addEventListener("loadedmetadata",function(t){e.props.onLoadedMetadata(t)})}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=setInterval(function(){e.props.onListen(e.audioEl.currentTime)},t)}}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),this.listenTracker=null)}},{key:"render",value:function(){var e=this,t=this.props.children||i.default.createElement("p",null,"Your browser does not support the ",i.default.createElement("code",null,"audio")," element."),n=!(this.props.controls===!1),o=this.props.title?this.props.title:this.props.src;return i.default.createElement("audio",{autoPlay:this.props.autoPlay,className:"react-audio-player "+this.props.className,controls:n,loop:this.props.loop,muted:this.props.muted,onPlay:this.onPlay,preload:this.props.preload,ref:function(t){e.audioEl=t},src:this.props.src,style:this.props.style,title:o},t)}}]),t}(l.Component);f.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onLoadedMetadata:function(){},preload:"metadata",src:null,style:{},title:""},f.propTypes={autoPlay:d.default.bool,children:d.default.element,className:d.default.string,controls:d.default.bool,listenInterval:d.default.number,loop:d.default.bool,muted:d.default.bool,onAbort:d.default.func,onCanPlay:d.default.func,onCanPlayThrough:d.default.func,onEnded:d.default.func,onError:d.default.func,onListen:d.default.func,onPause:d.default.func,onPlay:d.default.func,onSeeked:d.default.func,onLoadedMetadata:d.default.func,preload:d.default.oneOf(["","none","metadata","auto"]),src:d.default.string,style:d.default.objectOf(d.default.string),title:d.default.string};var p=f;t.default=p;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"ReactAudioPlayer","/Users/mccandj/Documents/Projects/react-audio-player/src/index.jsx"),__REACT_HOT_LOADER__.register(p,"default","/Users/mccandj/Documents/Projects/react-audio-player/src/index.jsx"))})()},function(e,t){e.exports=__webpack_require__(6)},function(e,t){e.exports=__webpack_require__(1)}]);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AudioAnalyser = __webpack_require__(424);

var _AudioAnalyser2 = _interopRequireDefault(_AudioAnalyser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AudioVisualiser = (_temp2 = _class = function (_PureComponent) {
  _inherits(AudioVisualiser, _PureComponent);

  function AudioVisualiser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AudioVisualiser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AudioVisualiser.__proto__ || Object.getPrototypeOf(AudioVisualiser)).call.apply(_ref, [this].concat(args))), _this), _this.state = { frequencyData: [] }, _this.onFrequencyData = function (frequencyData) {
      return _this.setState({ frequencyData: frequencyData });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AudioVisualiser, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AudioAnalyser2.default, { src: this.props.src,
          onFrequencyData: this.onFrequencyData,
          style: { width: '100%' }
        }),
        this.props.renderFrequencyData([].concat(_toConsumableArray(this.state.frequencyData)))
      );
    }
  }]);

  return AudioVisualiser;
}(_react.PureComponent), _class.propTypes = {
  renderFrequencyData: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = AudioVisualiser;

/***/ })

});