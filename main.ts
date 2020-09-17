enum RadioMessage {
    message1 = 49434
}
function Turn_Right () {
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # #
            . . # # .
            . . # . .
            `)
        for (let index = 0; index <= 5; index++) {
            Led = index + 6
            bitbot.setPixelColor(Led, 0xFFC000)
            basic.pause(200)
            bitbot.ledClear()
        }
        bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 300, 200)
    }
    basic.pause(1000)
    bitbot.stop(BBStopMode.Brake)
}
function Turn_Backwards_Right () {
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . . # .
            . . . . .
            `)
        for (let index = 0; index <= 5; index++) {
            Led = index + 0
            bitbot.setPixelColor(Led, 0xFFC000)
            basic.pause(200)
            bitbot.ledClear()
        }
        bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 200)
    }
    basic.pause(1000)
    bitbot.stop(BBStopMode.Brake)
}
function lights_6 () {
    bitbot.setPixelColor(5, 0x659900)
    bitbot.setPixelColor(11, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
radio.onReceivedNumber(function (receivedNumber) {
	
})
function lights_1 () {
    bitbot.setPixelColor(0, 0x659900)
    bitbot.setPixelColor(6, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
input.onGesture(Gesture.EightG, function () {
    radio.sendNumber(7)
    basic.pause(5000)
})
touchbit.on(touchbit.TouchPad.b, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(2)
})
function Lights_Backward () {
    for (let index = 0; index < 2; index++) {
        Lights2()
    }
}
function Lights_forward () {
    for (let index = 0; index < 2; index++) {
        Lights()
    }
}
function lights_4 () {
    bitbot.setPixelColor(3, 0x659900)
    bitbot.setPixelColor(9, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
function lights_3 () {
    bitbot.setPixelColor(2, 0x659900)
    bitbot.setPixelColor(8, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
    basic.pause(5000)
})
function Line_followers () {
    for (let index = 0; index < 1e+103; index++) {
        if (bitbot.readLine(BBLineSensor.Left) == 1) {
            bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 45)
            Lights_While_Line_folowers_on()
        } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 300, 45)
            Lights_While_Line_folowers_on()
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 == (bitbot.readLight(BBLightSensor.Left) == 0)) {
            bitbot.drive(400)
        }
    }
}
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
})
function Lights () {
    lights_1()
    lights_2()
    lights_3()
    lights_4()
    lights_5()
    lights_6()
}
function Turn_Left () {
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # . .
            . # # . .
            . . # . .
            `)
        for (let index = 0; index <= 5; index++) {
            Led = index + 0
            bitbot.setPixelColor(Led, 0xFFC000)
            basic.pause(200)
            bitbot.ledClear()
        }
        bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 200)
    }
    basic.pause(1000)
    bitbot.stop(BBStopMode.Brake)
}
touchbit.on(touchbit.TouchPad.d, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
function Lights2 () {
    lights_6()
    lights_5()
    lights_4()
    lights_3()
    lights_2()
    lights_1()
}
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(6)
    basic.pause(5000)
})
touchbit.on(touchbit.TouchPad.right, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(6)
})
touchbit.on(touchbit.TouchPad.left, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(5)
})
function radio2 (receivedNumber: number) {
	
}
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(5)
    basic.pause(5000)
})
touchbit.on(touchbit.TouchPad.c, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
})
function lights_2 () {
    bitbot.setPixelColor(1, 0x659900)
    bitbot.setPixelColor(7, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
    basic.pause(5000)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
function driveForward () {
    Lights_forward()
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    bitbot.go(BBDirection.Forward, Speed)
}
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(3)
})
function lights_5 () {
    bitbot.setPixelColor(4, 0x659900)
    bitbot.setPixelColor(10, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
touchbit.on(touchbit.TouchPad.a, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(1)
})
function Turn_Backwards_Left () {
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # . . .
            . . . . .
            `)
        for (let index = 0; index <= 5; index++) {
            Led = index + 0
            bitbot.setPixelColor(Led, 0xFFC000)
            basic.pause(200)
            bitbot.ledClear()
        }
        bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 200)
    }
    basic.pause(1000)
    bitbot.stop(BBStopMode.Brake)
}
function Stop () {
    for (let index3 = 0; index3 <= 11; index3++) {
        bitbot.setPixelColor(index3, 0xFF0000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    bitbot.stop(BBStopMode.Brake)
    bitbot.ledClear()
}
function Drive_Backwards () {
    Lights_Backward()
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    bitbot.go(BBDirection.Reverse, Speed)
}
function Lights_While_Line_folowers_on () {
    for (let index3 = 0; index3 <= 11; index3++) {
        bitbot.setPixelColor(index3, 0xFF0000)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
}
function Variables () {
    Drive_Backwards_Left = 0
    Backwards = 0
    Drive_Backwards_Rights = 0
    Drive_Forwords_Left = 0
    Drive_Forwords = 1
    Drive_Forwords_Rights = 0
    Halt = 0
    Speed = 10
    Fjärrstyr = 0
}
let Fjärrstyr = 0
let Halt = 0
let Drive_Forwords_Rights = 0
let Drive_Forwords = 0
let Drive_Forwords_Left = 0
let Drive_Backwards_Rights = 0
let Backwards = 0
let Drive_Backwards_Left = 0
let Speed = 0
let Led = 0
Variables()
basic.forever(function () {
    while (Fjärrstyr == 0) {
        if (bitbot.readLine(BBLineSensor.Left) == 1) {
            Line_followers()
        } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
            Line_followers()
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 == (bitbot.readLine(BBLineSensor.Right) == 0)) {
            driveForward()
        }
    }
})
basic.forever(function () {
    let mode = 0
    while (mode == 1) {
        if (Drive_Backwards_Left == 1) {
            Turn_Backwards_Left()
        } else if (Backwards == 1) {
            Drive_Backwards()
        } else if (Drive_Backwards_Rights == 1) {
            Turn_Backwards_Right()
        } else if (Halt == 1) {
            Stop()
        }
    }
    while (mode == 2) {
        if (Drive_Forwords_Left == 1) {
            Turn_Left()
        } else if (Drive_Forwords == 1) {
            driveForward()
        } else if (Drive_Forwords_Rights == 1) {
            Turn_Right()
        } else if (Halt == 1) {
            Stop()
        }
    }
    while (mode == 3) {
        if (Fjärrstyr == 0) {
        	
        } else if (Fjärrstyr == 1) {
        	
        }
    }
})
