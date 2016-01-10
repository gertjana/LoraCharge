#include <Sodaq_RN2483.h>

#define debugSerial SerialUSB

#define loraSerial Serial1

const uint8_t devAddr[4] = { 0x02, 0x01, 0x59, 0x00 };
const uint8_t appSKey[16] = { 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,  0xAB, 0xF7, 0x15, 0x88,  0x09, 0xCF, 0x4F, 0x3C };
const uint8_t nwkSKey[16] = { 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,  0xAB, 0xF7, 0x15, 0x88,  0x09, 0xCF, 0x4F, 0x3C };

const int led = 12;
const int startButton = 11;
const int stopButton = 10;

long t = millis();

boolean charging = false;

String startMessage = "{'charge':'start'}";
String stopMessage = "{'charge':'stop', 'duration':'%DUR%', 'volume':'???'}";

void setup()
{
  debugSerial.begin(57600);

  digitalWrite(BEE_VCC, HIGH);

  pinMode(led, OUTPUT);
  pinMode(startButton, INPUT);
  pinMode(stopButton, INPUT);

  
  loraSerial.begin(LoRaBee.getDefaultBaudRate());

  LoRaBee.setDiag(debugSerial); // optional
  if (LoRaBee.initABP(loraSerial, devAddr, appSKey, nwkSKey, true))
  {
    debugSerial.println("Connection to the network was successful.");
  }
  else
  {
    debugSerial.println("Connection to the network failed!");
  }
}

void loop()
{
  debugSerial.println("Sleeping for 5 seconds before starting sending out test packets.");
  for (uint8_t i = 5; i > 0; i--)
  {
    debugSerial.println(i);
    delay(1000);
  }

  while (true)
  {
    int startPressed = ! digitalRead(startButton);
    int stopPressed = ! digitalRead(stopButton);
    
    if (startPressed && !charging) {
      charging=true;
      digitalWrite(12,HIGH);
      sendMessage(startMessage);
      debugSerial.println("Starting Charging");
    }

    if (stopPressed && charging) {
      charging=false;
      digitalWrite(12,LOW);
      stopMessage.replace("%DUR%",String((millis()-t)/1000));
      sendMessage(stopMessage);
      debugSerial.println("Stopped Charging");
    }
    
    delay(100);
  }
}

void blinkLed(int times, int len) {
  for (uint8_t i = times; i > 0; i--) {
    digitalWrite(13, HIGH);
    delay(len/2);   
    digitalWrite(13, LOW);  
    delay(len/2);
  }
}

void sendMessage(String data) {
  byte buf[data.length()+1];
  data.getBytes(buf, data.length()+1);

 switch (LoRaBee.send(1, buf, data.length())) {
  case NoError:
    debugSerial.println("Successful transmission.");
    break;
  case NoResponse:
    debugSerial.println("There was no response from the device.");
    break;
  case Timeout:
    debugSerial.println("Connection timed-out. Check your serial connection to the device! Sleeping for 20sec.");
    delay(20000);
    break;
  case PayloadSizeError:
    debugSerial.println("The size of the payload is greater than allowed. Transmission failed!");
    break;
  case InternalError:
    debugSerial.println("Oh No! This shouldn't happen. Something is really wrong! Try restarting the device!\r\nThe program will now halt.");
    while (1) {};
    break;
  case Busy:
    debugSerial.println("The device is busy. Sleeping for 10 extra seconds.");
    delay(10000);
    break;
  case NetworkFatalError:
    debugSerial.println("There is a non-recoverable error with the network connection. You should re-connect.\r\nThe program will now halt.");
    while (1) {};
    break;
  case NotConnected:
    debugSerial.println("The device is not connected to the network. Please connect to the network before attempting to send data.\r\nThe program will now halt.");
    while (1) {};
    break;
  case NoAcknowledgment:
    debugSerial.println("There was no acknowledgment sent back!");
    break;
  default:
    break;
  } 
}


