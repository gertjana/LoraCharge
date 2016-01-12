#include <Sodaq_RN2483.h>

#define DEBUG

#define debugSerial SerialUSB

#define loraSerial Serial1

const uint8_t devAddr[4]  = { 0x02, 0x01, 0x59, 0x00 };
const uint8_t appSKey[16] = { 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,  0xAB, 0xF7, 0x15, 0x88,  0x09, 0xCF, 0x4F, 0x3C };
const uint8_t nwkSKey[16] = { 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,  0xAB, 0xF7, 0x15, 0x88,  0x09, 0xCF, 0x4F, 0x3C };

// GPIO Ports
const int led = 12;
const int startButton = 11;
const int stopButton = 10;

long t = millis();

boolean charging = false;

const byte START = 0x00;
const byte STOP  = 0x01;

// get from rifd reader
const uint8_t RFID[4] = {0xAE, 0x9C, 0x39, 0x12};

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
      t = millis();
      uint8_t startMsg[] = { START, RFID[3], RFID[2], RFID[1], RFID[0] };
      sendMessage(startMsg, 5);
      debugSerial.println("Starting Charging");
    }

    if (stopPressed) {
      charging=false;
      int duration = (millis()-t)/1000;
      int volume = random(100);
      debugSerial.println("Charged " + String(volume) + " kWh in: " + String(duration) + " seconds");
      uint8_t stopMsg[] = { STOP, RFID[3], RFID[2], RFID[1], RFID[0], lowByte(duration), highByte(duration), lowByte(volume), highByte(volume) }; //last 2 bytes is volume
      sendMessage(stopMsg, 9);
      debugSerial.println("Stopped Charging");
    }

    if (charging) {
      digitalWrite(12,HIGH);      
    } else {
      digitalWrite(12,LOW);
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

void sendMessage(uint8_t* data, int size) {
 switch (LoRaBee.send(1, data, size)) {
  case NoError:
    debugSerial.println("Successful transmission.");
    break;
  case NoResponse:
    debugSerial.println("There was no response from the device.");
    charging = false;
    break;
  case Timeout:
    debugSerial.println("Connection timed-out. Check your serial connection to the device! Sleeping for 20sec.");
    delay(20000);
    charging = false;
    break;
  case PayloadSizeError:
    debugSerial.println("The size of the payload is greater than allowed. Transmission failed!");
    charging = false;
    break;
  case InternalError:
    debugSerial.println("Oh No! This shouldn't happen. Something is really wrong! Try restarting the device!\r\nThe program will now halt.");
    charging = false;
    while (1) {};
    break;
  case Busy:
    debugSerial.println("The device is busy. Sleeping for 10 extra seconds.");
    charging = false;
    delay(10000);
    break;
  case NetworkFatalError:
    debugSerial.println("There is a non-recoverable error with the network connection. You should re-connect.\r\nThe program will now halt.");
    charging = false;
    while (1) {};
    break;
  case NotConnected:
    debugSerial.println("The device is not connected to the network. Please connect to the network before attempting to send data.\r\nThe program will now halt.");
    charging = false;
    while (1) {};
    break;
  case NoAcknowledgment:
    debugSerial.println("There was no acknowledgment sent back!");
    break;
  default:
    break;
  } 
}


