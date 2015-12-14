# audiobuffer-to-wav

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Encodes the contents of an [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer) from the WebAudio API as WAVE. Supports 16-bit PCM and 32-bit float data.

The code for this has been adapted from the export feature of [Recorder.js](https://github.com/mattdiamond/Recorderjs).

PRs welcome.

## Install

```sh
npm install audiobuffer-to-wav --save
```

## Example

```js
var toWav = require('audiobuffer-to-wav')
var xhr = require('xhr')
var context = new AudioContext()

// request the MP3 as binary
xhr({
  uri: 'audio/track.mp3',
  responseType: 'arraybuffer'
}, function (err, body, resp) {
  if (err) throw err
  // decode the MP3 into an AudioBuffer
  audioContext.decodeAudioData(resp, function (buffer) {
    // encode AudioBuffer to WAV
    var wav = toWav(buffer)
    
    // do something with the WAV ArrayBuffer ...
  })
})
```

See [the demo](./demo/index.js) for an example of loading MP3, decoding it, and triggering a download of the encoded WAV file.

A more advanced example might be to write the file using Node and Electron or [hihat](https://www.npmjs.com/package/hihat), i.e. an easy way to convert MP3/OGG/etc to WAV.

## Usage

[![NPM](https://nodei.co/npm/audiobuffer-to-wav.png)](https://www.npmjs.com/package/audiobuffer-to-wav)

#### `arrayBuffer = encodeWAV(audioBuffer, [opt])`

Encodes the [AudioBuffer](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer) instance as WAV, returning a new array buffer. Interleaves multi-channel data, if necessary.

By default, exports with 16-bit PCM (format: 1). You can specify `opt.float32` instead, which will write format 3 with 32-bit float data.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/audiobuffer-to-wav/blob/master/LICENSE.md) for details.
