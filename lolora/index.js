var Express = require('express');
var BodyParser = require('body-parser');
var Polling = require('polling');
var SerialPort = require('serialport');
var Config = require('package.json').config;

var chargepointSerial;

var port = new SerialPort(Config.serialPort, {baudRate:config.baudRate});

port.on('open', function() { console.log("Serial port opened"); });
port.on('close', function() { console.log("Serial port closed"); });

port.on('data', function(data) {
    if (chargepointSerial) {
      polling.emit(chargepointSerial, data);
    }
})

var app = express();

app.use(bodyParser.raw({ type: 'application/x-protobuf' }))

// open long polling connection to send commands to cp
app.get('/chargepoint/:serial/poll', function (req, res) {
  var chargepointSerial = req.params.serial;
  polling.on(req.params.serial, res);
});

// receive messages from cp
app.post('/chargepoint/:s/:c/:t', function(req,res) {
	var serial = req.params.s;
  var connector = req.params.c;
  var msgType = req.params.t == 'auth' ? 0x00 : 0x01;
  console.log(msgType);
  var typeByte = Buffer.from([msgType]);
  console.log(req.body);
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

