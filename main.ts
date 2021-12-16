KY040.OnPinPressed(DigitalPin.P0, function () {
    Xcord = 2
})
KY040.onTurned(direction.clockwise, function () {
    Xcord = Xcord + 1
})
KY040.onTurned(direction.counterclockwise, function () {
    Xcord = Xcord - 1
})
let Xcord = 0
KY040.setKY040(DigitalPin.P15, DigitalPin.P1)
Xcord = 2
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    images.createBigImage(`
        . . . # . # . . . .
        . . # # # # # . . .
        . . # # # # # . . .
        . . . # # # . . . .
        . . . . # . . . . .
        `).showImage(Xcord, 400)
})