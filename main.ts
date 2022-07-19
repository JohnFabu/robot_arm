let index = 0
let step = 5
basic.forever(function () {
    if (index + step > 180) {
        step = -5
    }
    if (index + step < 0) {
        step = 5
    }
    index += step
    for (let i = 0; i <= 15; i++) {
        Servo.Servo(i, index)
    }
    basic.pause(100)
})
