input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 255)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
input.onPinPressed(TouchPin.P1, function () {
	
})
let 모터_구동_중 = false
basic.forever(function () {
    if (모터_구동_중 == true) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(200)
    } else {
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
basic.forever(function () {
    if (input.soundLevel() >= 255) {
        모터_구동_중 = 모터_구동_중 == false
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.A)) {
        모터_구동_중 = 모터_구동_중 == false
        basic.pause(500)
    }
})
