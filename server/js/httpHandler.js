const http = require('http')
const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = () => { }) => {
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    //dequere from the queue and return to client
    var commands = ['left', 'right', 'up', 'down'];
    var index = Math.round(Math.random() * 3);
    res.end(messages.dequeue());
  } else {
    res.end();
  }
};