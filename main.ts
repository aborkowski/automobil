enum RadioMessage {
    message1 = 49434
}
function Turn_Right () {
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        turtle.setPosition(2, 4)
        turtle.forward(2)
        turtle.turnRight()
        turtle.forward(2)
        turtle.turnLeft()
        basic.clearScreen()
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
        turtle.setPosition(2, 0)
        turtle.back(2)
        turtle.turnRight()
        turtle.forward(2)
        turtle.turnLeft()
        basic.clearScreen()
        for (let index = 0; index <= 5; index++) {
            Led = index - 0
            bitbot.setPixelColor(Led, 0xFFC000)
            basic.pause(200)
            bitbot.ledClear()
        }
        bitbot.driveTurnMilliseconds(BBRobotDirection.Right, 300, 200)
    }
    basic.pause(1000)
    bitbot.stop(BBStopMode.Brake)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (lock == 1) {
        basic.clearScreen()
        bitbot.ledClear()
        if (receivedNumber == 1) {
            if (mode == 1) {
                Turn_Left()
            } else if (mode == 2) {
                Turn_Backwards_Left()
            } else if (mode == 3) {
                Fjärrstyr = 1
            } else if (mode == 4) {
                mode = 1
            }
        } else if (receivedNumber == 2) {
            if (mode == 1) {
                driveForward()
            } else if (mode == 2) {
                Drive_Backwards()
            } else if (mode == 3) {
                driveForward()
            } else if (mode == 4) {
                mode = 2
            }
        } else if (receivedNumber == 3) {
            if (mode == 1) {
                Stop()
            } else if (mode == 2) {
                Stop()
            } else if (mode == 3) {
                Stop()
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
                Speed = Speed - 10
            } else if (mode == 3) {
                Speed = Speed + 10
            } else if (mode == 4) {
                Start()
                I()
            }
        }
    }
    if (receivedNumber == 8 && lock == 0) {
        Start()
        lock = 1
    }
})
function Lights_Backward () {
    for (let index = 0; index < 2; index++) {
        bitbot.setPixelColor(5, 0x18E600)
        bitbot.setPixelColor(11, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(4, 0x18E600)
        bitbot.setPixelColor(10, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(3, 0x18E600)
        bitbot.setPixelColor(9, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(2, 0x18E600)
        bitbot.setPixelColor(8, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(1, 0x18E600)
        bitbot.setPixelColor(7, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(0, 0x18E600)
        bitbot.setPixelColor(6, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
    }
}
function Lights_forward () {
    for (let index = 0; index < 2; index++) {
        bitbot.setPixelColor(0, 0x18E600)
        bitbot.setPixelColor(6, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(1, 0x18E600)
        bitbot.setPixelColor(7, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(2, 0x18E600)
        bitbot.setPixelColor(8, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(3, 0x18E600)
        bitbot.setPixelColor(9, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(4, 0x18E600)
        bitbot.setPixelColor(10, 0x18E600)
        basic.pause(200)
        bitbot.ledClear()
        bitbot.setPixelColor(5, 0x18E600)
        bitbot.setPixelColor(11, 0x18E600)
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
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        turtle.setPosition(2, 4)
        turtle.forward(2)
        turtle.turnLeft()
        turtle.forward(2)
        turtle.turnRight()
        basic.clearScreen()
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
    Speed = 30
    Fjärrstyr = 0
    lock = 0
    mode = 4
    Line = 0
}
function driveForward () {
    Lights_forward()
    basic.pause(100)
    bitbot.go(BBDirection.Forward, Speed)
    bitbot.setLedColor(0xFFFFFF)
}
function Start () {
    bitbot.ledRainbow()
    bitbot.buzz(true)
    basic.pause(100)
    bitbot.buzz(false)
    basic.pause(100)
    bitbot.ledClear()
    basic.pause(100)
    bitbot.ledRainbow()
    bitbot.buzz(true)
    basic.pause(100)
    bitbot.buzz(false)
    basic.pause(100)
    bitbot.ledClear()
}
function Turn_Backwards_Left () {
    bitbot.stop(BBStopMode.Brake)
    for (let index = 0; index < 2; index++) {
        turtle.setPosition(2, 0)
        turtle.back(2)
        turtle.turnLeft()
        turtle.forward(2)
        turtle.turnRight()
        basic.clearScreen()
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
}
function Drive_Backwards () {
    Lights_Backward()
    basic.pause(100)
    bitbot.go(BBDirection.Reverse, Speed)
    bitbot.setLedColor(0xFFFFFF)
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
let Speed = 0
let Fjärrstyr = 0
let mode = 0
let lock = 0
let Led = 0
basic.clearScreen()
radio.setGroup(1)
I()
bitbot.ledBrightness(255)
led.setBrightness(255)
control.inBackground(function () {
    while (lock == 1) {
        while (Line == 1) {
            if (bitbot.readLine(BBLineSensor.Left) == 1) {
                Line_followers()
            } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
                Line_followers()
            } else if (bitbot.readLine(BBLineSensor.Left) == 0 == (bitbot.readLine(BBLineSensor.Right) == 0)) {
                Line_followers()
            }
        }
    }
})
