// Sterowanie swiatlami drogowymi
// Przejscie dla pieszych
// By Filip & Jaroslaw


input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000000; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendNumber(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        radio.sendNumber(3)
        pins.digitalWritePin(DigitalPin.P2, 0)
        radio.sendNumber(6)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        radio.sendNumber(4)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    radio.sendNumber(3)
    radio.sendNumber(6)
    basic.pause(2000)
    radio.sendNumber(1)
    radio.sendNumber(4)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(10000)
    // miga zielone
    for (let index = 0; index < 12; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
    }
    // wlacz zolte
    pins.digitalWritePin(DigitalPin.P1, 1)
    // wylacz zielone
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(2000)
    // wlacz czerwone
    pins.digitalWritePin(DigitalPin.P0, 1)
    // wylacz zolte
    pins.digitalWritePin(DigitalPin.P1, 0)
    // wlacz zdalne zolte
    radio.sendNumber(3)
    // wylacz zdalne czerwone
    radio.sendNumber(2)
    basic.pause(1000)
    // wlacz zdalne zielone
    radio.sendNumber(5)
    // wylacz zdalne zolte
    radio.sendNumber(4)
    basic.pause(500)
})
radio.onReceivedNumber(function (receivedNumber) {
    // basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (receivedNumber == 4) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (receivedNumber == 5) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (receivedNumber == 6) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
radio.setGroup(1)
radio.sendNumber(2)
radio.sendNumber(4)
radio.sendNumber(5)
basic.showNumber(0)
if (true) {
    pins.digitalWritePin(DigitalPin.P0, 1)
} else if (false) {
    pins.digitalWritePin(DigitalPin.P2, 1)
} else {

}
 