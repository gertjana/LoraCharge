#include <Sodaq_RN2483.h>
#include <stdio.h>
#include <string.h>

#define debugSerial SerialUSB

#define rfidSerial Serial
#define loraSerial Serial1

byte devAddr[4]  = { 0x02, 0x01, 0x59, 0x00 };
const uint8_t appSKey[16] = { 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,  0xAB, 0xF7, 0x15, 0x88,  0x09, 0xCF, 0x4F, 0x3C };
const uint8_t nwkSKey[16] = { 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,  0xAB, 0xF7, 0x15, 0x88,  0x09, 0xCF, 0x4F, 0x3C };

long t = millis();

boolean charging = false;

const byte START = 0x00;
const byte STOP  = 0x01;

char buffer[64]; // buffer array for data receive over serial port
int count=0;

byte dur[2];
byte vol[2];
byte msg[15];

unsigned char charToHexDigit(char c) {
  if (c >= 'A')
    return (c - 'A' + 10);
  else
    return (c - '0');
}

unsigned char ascii2HexToByte(char *ptr) {
  return charToHexDigit( *ptr )*16 + charToHexDigit( *(ptr+1) );
}

int stringToBytes(char *string, char *result) {
  int k=0;
  int strLen = strlen(string);

  for(int i = 0; i < strLen; i = i + 2)
  {
      result[k] = ascii2HexToByte( &string[i] );
      k++;
  }
  return k; // number of bytes in the result array 
}

void setup() {
  digitalWrite(BEE_VCC, HIGH); // turn on lora module
  pinMode(13, OUTPUT);
  
  debugSerial.begin(57600);
  rfidSerial.begin(9600); 
  loraSerial.begin(LoRaBee.getDefaultBaudRate());

  LoRaBee.setDiag(debugSerial); // optional
  if (LoRaBee.initABP(loraSerial, devAddr, appSKey, nwkSKey, true)) {
    debugSerial.println("Connection to the network was successful.");
  }
  else {
    debugSerial.println("Connection to the network failed!");
  }
}

void loop() {
  while ((!SerialUSB) && (millis() < 5000)); // wait for usb serial monitor for 5 seconds

  debugSerial.println("Sleeping for 5 seconds");
  for (uint8_t i = 5; i > 0; i--) {
    debugSerial.println(i);
    delay(1000);
  }

  while (true) {    
    if (rfidSerial.available()) {              

      delay(200);
      // read rfid key
      while(rfidSerial.available()) {         
        buffer[count++]=rfidSerial.read();     
        if(count == 64)break;
      }

      char buf[6];
      
      int len = stringToBytes(buffer, buf);
      
      for(int i= 0; i < len; i++) {
        debugSerial.print((unsigned char)*(buf+i),HEX);
      }
      debugSerial.print( "\n");
      
      if (!charging) {
        // start charging
        charging = true;
        
        debugSerial.println("Starting charging");

        msg[0] = {START};
        memcpy(msg+1, buf, 6);
        memcpy(msg+7, devAddr, 4);

        t = millis();
        
        sendMessage(msg,11);

        clearMsg();
        
      } else {
        // stop charging
        charging = false;

        debugSerial.println("Stopping charging");

        int duration = (millis()-t)/1000;
        int volume = random(100);

        debugSerial.println(duration, DEC);
        debugSerial.println(volume, DEC);
        
        dur[0] = highByte(duration);
        dur[1] = lowByte(duration);
        vol[0] = highByte(volume);
        vol[1] = lowByte(volume);

        msg[0] = {STOP};        
        memcpy(msg+1, buf, 6);
        memcpy(msg+7, devAddr, 4);
        memcpy(msg+11, dur, 2);
        memcpy(msg+13, vol, 2);
         
        sendMessage(msg,15);

        clearVolumeAndDuration();
        clearMsg();
      }
      //debugSerial.write(buffer,count);

      clearBufferArray();              
      count = 0;
      delay(1000);
    }

    //turn led on/off whether or not we're charging
    if (charging) {
      digitalWrite(13,HIGH);      
    } else {
      digitalWrite(13,LOW);
    }
  }
}

void clearMsg() {
  for (int i=0; i<15;i++) { 
    msg[i]=NULL;
  }                    
}

void clearBufferArray() {
  for (int i=0; i<count;i++) { 
    buffer[i]=NULL;
  }                  
}

void clearVolumeAndDuration() {
  vol[0]=NULL;
  vol[1]=NULL;
  dur[0]=NULL;
  dur[1]=NULL;
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



