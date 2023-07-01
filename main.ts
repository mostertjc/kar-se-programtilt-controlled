enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message3 = 31126,
    message4 = 29926,
    message5 = 42976,
    message6 = 19755,
    mes7 = 14617,
    mes8 = 8286
}
function right () {
    pins.analogWritePin(AnalogPin.P3, 200)
    pins.analogWritePin(AnalogPin.P4, 0)
    pins.analogWritePin(AnalogPin.P12, 100)
    pins.analogWritePin(AnalogPin.P16, 0)
}
function back () {
    pins.analogWritePin(AnalogPin.P3, 0)
    pins.analogWritePin(AnalogPin.P4, 150)
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P16, 150)
}
function left () {
    pins.analogWritePin(AnalogPin.P3, 100)
    pins.analogWritePin(AnalogPin.P4, 0)
    pins.analogWritePin(AnalogPin.P12, 200)
    pins.analogWritePin(AnalogPin.P16, 0)
}
radio.onReceivedMessage(RadioMessage.message3, function () {
    stop()
})
function stop () {
    pins.analogWritePin(AnalogPin.P3, 0)
    pins.analogWritePin(AnalogPin.P4, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
radio.onReceivedMessage(RadioMessage.mes7, function () {
    forward()
})
radio.onReceivedMessage(RadioMessage.mes8, function () {
    back()
})
function forward () {
    pins.analogWritePin(AnalogPin.P3, 150)
    pins.analogWritePin(AnalogPin.P4, 0)
    pins.analogWritePin(AnalogPin.P12, 150)
    pins.analogWritePin(AnalogPin.P16, 0)
}
radio.onReceivedMessage(RadioMessage.message2, function () {
    right()
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    left()
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
