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
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (mode == 1) {
            basic.showNumber(2)
            Turn_Left()
        } else if (mode == 2) {
            Turn_Backwards_Left()
        } else if (mode == 3) {
        	
        } else if (mode == 4) {
            basic.showNumber(1)
            mode = 1
        }
    } else if (receivedNumber == 2) {
        if (mode == 1) {
            driveForward()
        } else if (mode == 2) {
            Drive_Backwards()
        } else if (mode == 3) {
            Stop()
        } else if (mode == 4) {
            mode = 2
        }
    } else if (receivedNumber == 3) {
        if (mode == 1) {
            Stop()
        } else if (mode == 2) {
            Stop()
        } else if (mode == 3) {
        	
        } else if (mode == 4) {
            mode = 3
        }
    } else if (receivedNumber == 4) {
        if (mode == 1) {
            Turn_Right()
        } else if (mode == 2) {
            Turn_Backwards_Right()
        } else if (mode == 3) {
            Fjärrstyr = 0
        } else if (mode == 4) {
            mode = 4
        }
    } else if (receivedNumber == 5) {
        if (mode == 1) {
            mode = 4
        } else if (mode == 2) {
            mode = 1
        } else if (mode == 3) {
            mode = 2
        } else if (mode == 4) {
            mode = 3
        }
    } else if (receivedNumber == 6) {
        if (mode == 1) {
            mode = 2
        } else if (mode == 2) {
            mode = 3
        } else if (mode == 3) {
            mode = 4
        } else if (mode == 4) {
            mode = 1
        }
    } else if (receivedNumber == 7) {
        if (mode == 1) {
            Speed = Speed + 10
        } else if (mode == 2) {
            Speed = Speed + 10
        } else if (mode == 3) {
            Speed = Speed + 10
        } else if (mode == 4) {
            control.reset()
        }
    }
    basic.showNumber(1)
    if (receivedNumber == 8 && lock == 0) {
        lock = 1
    }
})
function Lights_Backward () {
    for (let index = 0; index < 2; index++) {
        bitbot.setPixelColor(5, 0xFF0000)
        bitbot.setPixelColor(11, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(4, 0xFF0000)
        bitbot.setPixelColor(10, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(3, 0xFF0000)
        bitbot.setPixelColor(9, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(2, 0xFF0000)
        bitbot.setPixelColor(8, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(1, 0xFF0000)
        bitbot.setPixelColor(7, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(0, 0xFF0000)
        bitbot.setPixelColor(6, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
    }
}
function Lights_forward () {
    for (let index = 0; index < 2; index++) {
        bitbot.setPixelColor(0, 0xFF0000)
        bitbot.setPixelColor(6, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(1, 0xFF0000)
        bitbot.setPixelColor(7, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(2, 0xFF0000)
        bitbot.setPixelColor(8, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(3, 0xFF0000)
        bitbot.setPixelColor(9, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(4, 0xFF0000)
        bitbot.setPixelColor(10, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(5, 0xFF0000)
        bitbot.setPixelColor(11, 0xFF0000)
        basic.pause(200)
        bitbot.ledClear()
    }
}
function Line_followers () {
    while (true) {
        if (bitbot.readLine(BBLineSensor.Left) == 1) {
            bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 300, 45)
            Lights_While_Line_folowers_on()
        } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 300, 45)
            Lights_While_Line_folowers_on()
        } else if (bitbot.readLine(BBLineSensor.Left) == 0 == (bitbot.readLight(BBLightSensor.Left) == 0)) {
            bitbot.drive(Speed)
        }
    }
}
function Turn_Left () {
    basic.showNumber(3)
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
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
function I () {
    Drive_Backwards_Left = 0
    Backwards = 0
    Drive_Backwards_Rights = 0
    Drive_Forwords_Left = 0
    Drive_Forwords = 0
    Drive_Forwords_Rights = 0
    Halt = 0
    Speed = 10
    Fjärrstyr = 0
    lock = 0
    mode = 4
    Line = 0
}
function driveForward () {
    Lights_forward()
    basic.pause(100)
    bitbot.go(BBDirection.Forward, Speed)
}
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
let Line = 0
let Halt = 0
let Drive_Forwords_Rights = 0
let Drive_Forwords = 0
let Drive_Forwords_Left = 0
let Drive_Backwards_Rights = 0
let Backwards = 0
let Drive_Backwards_Left = 0
let lock = 0
let Speed = 0
let Fjärrstyr = 0
let mode = 0
let Led = 0
radio.setGroup(1)
I()
control.inBackground(function () {
    while (lock == 1) {
        while (Line == 1) {
            if (bitbot.readLine(BBLineSensor.Left) == 1) {
                Line_followers()
            } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
                Line_followers()
            } else if (bitbot.readLine(BBLineSensor.Left) == 0 == (bitbot.readLine(BBLineSensor.Right) == 0)) {
                driveForward()
            }
        }
    }
})
