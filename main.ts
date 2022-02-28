KY040.onPressEvent(function () {
    Xcord = 2
})
KY040.onTurned(direction.clockwise, function () {
    Xcord = Xcord + 1
})
KY040.onTurned(direction.counterclockwise, function () {
    Xcord = Xcord - 1
})
let Xcord = 0
KY040.setKY040(DigitalPin.P1, DigitalPin.P15, DigitalPin.P14)
Xcord = 2
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    images.createBigImage(`
        . . . # . # . . . .
        . . # # # # # . . .
        . . # # # # # . . .
        . . . # # # . . . .
        . . . . # . . . . .
        `).showImage(Xcord, 100)
})
