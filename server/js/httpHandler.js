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
  if (req.method === 'GET') {
    // if (req.is('text')) {
    //   console.log('Successful type pass')
    // }
    console.log(req.headers);
    res.writeHead(200, headers);
    var commands = ['left', 'right', 'up', 'down'];
    var index = Math.round(Math.random() * 3);
    res.end(messages.dequeue());
  } else {
    res.end();
  }




  // if (req.method === 'POST') {
  //   console.log('POST made it to server!!!');
  //   res.end()

  //we need to figure out whether the picture (from the client)
  //exists within our server folder
  //how do we capture the piece of data from the client to determine
  //whether exists
  //chunk

  //if picture doesn't exist
  //return 404 -> to the client or just to the server?
  // }
};