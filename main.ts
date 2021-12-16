KY040.OnPinPressed(DigitalPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
})
KY040.onTurned(direction.clockwise, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.clearScreen()
})
KY040.onTurned(direction.counterclockwise, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.clearScreen()
})
KY040.setKY040(DigitalPin.P15, DigitalPin.P1)
basic.forever(function () {
	
})
