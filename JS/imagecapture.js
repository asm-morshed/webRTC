'use strict';


var options = {

  audio: false,
  video: true
}


var videoStream = document.getElementById('videoStream');
//var captureBtn = document.getElementsById('captureBtn');

var canvas = window.canvas = document.querySelector('canvas');

canvas.width = 100;
canvas.height == 100;

captureBtn.onclick = function () {
  canvas.width = videoStream.videoWidth;
  canvas.height = videoStream.videoHeight;

  canvas.getContext('2d').drawImage(videoStream, 0,0,canvas.width,canvas.height);

};

function streaming(stream) {
  videoStream.src = window.URL.createObjectURL(stream);
}

function error(err) {
  console.log(err);
}

navigator.mediaDevices.getUserMedia(options)
.then(streaming)
.catch(error);