var Express = require('express');
var BodyParser = require('body-parser');
var Polling = require('polling');
var SerialPort = require('serialport');
var Config = require('./package.json').config;

var chargepointSerial;

var app = Express();
app.use(BodyParser.raw({ type: 'application/x-protobuf' }))

var port = new SerialPort(Config.serialPort, {baudRate:Config.baudRate});
port.on('open', function() { console.log("Serial port opened"); });
port.on('close', function() { console.log("Serial port closed"); });

//send returned data to the connected longpolling cp
port.on('data', function(data) {
    if (chargepointSerial) {
      Polling.emit(chargepointSerial, data);
    }
});

// open long polling connection to send commands to cp
app.get('/chargepoint/:s/poll', function (req, res) {
  chargepointSerial = req.params.s;
  Polling.on(req.params.s, res);
});

// receive messages from cp and send over serial
app.post('/chargepoint/*/*/:t', function(req,res) {
  var typeByte = Buffer.from([req.params.t == 'auth' ? 0x00 : 0x01]);
  var payload = Buffer.concat([typeByte,req.body],req.body.length+1);

  if (port.isOpen()) {
    port.write(payload, function(err) {console.log(err);});
  } else {
    console.log('Serial port not open, not writing message')
  }
  res.send();
});

app.listen(3000, function () {
  console.log('Lolora listening on port 3000!');
});

