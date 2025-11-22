/**
 * This program shows the basic steps of:
 * 
 * 1. connecting the microbit and voice module 
 * 
 * 2. making the microbit do something in response to a voice command. 
 * 
 * Make sure you have it connected to the row of pins that say G V CL DA.
 * 
 * G - black wire
 * 
 * V - red wire
 * 
 * CL - blue wire
 * 
 * DA - green wire
 * 
 * On the voice module, sliders should be on I2C and SPK1. 
 * 
 * Don't plug a battery into the other port; it's for an external speaker, not a battery. 
 * 
 * What all the code does:
 * 
 * ON START BLOCK:
 * 
 * - voice recognition setup I2C mode address 0x64: tells micro:bit where the voice module is connected, and connects to it
 * 
 * - set volume - sets volume
 * 
 * - set mute mode - mutes the voice from the voice module if set to "on"
 * 
 * - set wake time - how long in seconds to go back into sleep mode after the last voice command. If it goes into sleep mode you have to say "hello robot" to wake it up again.
 * 
 * - play wake-up words - tells it to respond to "hello robot" or whatever it is set to
 * 
 * - added an icon to make sure the "on start" block is working
 * 
 * FOREVER BLOCK:
 * 
 * - identify once and save the results: identifies the voice command and saves it temporarily as "get the result"
 * 
 * - recognize it: true/false whether it recognizes the command
 * 
 * - if the result, stored as "get the result" is equal to one of our command words, do something. in this case, show an icon or clear the screen. You can check for multiple matches here.
 */
voiceRecognition.init()
voiceRecognition.setVolume(4)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(30)
voiceRecognition.playByCMDID(voiceRecognition.checkWord1(voiceRecognition.WakeupWords.W2))
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W128)) {
            basic.showIcon(IconNames.Fabulous)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W45)) {
            basic.clearScreen()
        }
    }
})
