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
    basic.showNumber(1)
    if (receivedNumber == 1) {
        basic.showNumber(4)
        radio2(receivedNumber)
    } else if (receivedNumber == 2) {
        radio2(receivedNumber)
    } else if (receivedNumber == 3) {
        radio2(receivedNumber)
    } else if (receivedNumber == 4) {
        radio2(receivedNumber)
    } else if (receivedNumber == 5) {
        radio2(receivedNumber)
    } else if (receivedNumber == 6) {
        radio2(receivedNumber)
    } else if (receivedNumber == 7) {
        radio2(receivedNumber)
    } else if (receivedNumber == 8) {
        basic.showNumber(2)
        Variables()
    }
})
function lights_1 () {
    bitbot.setPixelColor(0, 0x659900)
    bitbot.setPixelColor(6, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
function Snabbare () {
    mode = Speed + 10
}
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
function Line_followers () {
    for (let index = 0; index < 1e+103; index++) {
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
function Lights2 () {
    lights_6()
    lights_5()
    lights_4()
    lights_3()
    lights_2()
    lights_1()
}
function radio2 (receivedNumber: number) {
    while (lock == 1) {
        basic.showNumber(5)
        if (receivedNumber == 1) {
            if (mode == 1) {
                Turn_Left()
            } else if (mode == 2) {
                Turn_Backwards_Left()
            } else if (mode == 3) {
            	
            } else if (mode == 4) {
                basic.showNumber(6)
            }
        } else if (receivedNumber == 2) {
            if (mode == 1) {
                Drive_Forwords = 1
            } else if (mode == 2) {
                Backwards = 1
            } else if (mode == 3) {
                Halt = 1
            } else if (mode == 4) {
                mode = 1
            }
        } else if (receivedNumber == 3) {
            if (mode == 1) {
                Halt = 1
            } else if (mode == 2) {
                Halt = 1
            } else if (mode == 3) {
            	
            } else if (mode == 4) {
                mode = 2
            }
        } else if (receivedNumber == 4) {
            if (mode == 1) {
                Drive_Forwords_Rights = 1
            } else if (mode == 2) {
                Drive_Backwards_Rights = 1
            } else if (mode == 3) {
                Fjärrstyr = 0
            } else if (mode == 4) {
                mode = 3
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
                Speed = 1
            } else if (mode == 2) {
                Speed = 1
            } else if (mode == 3) {
                Speed = 1
            } else if (mode == 4) {
                control.reset()
            }
        }
    }
}
function I () {
    Drive_Backwards_Left = 0
    Backwards = 0
    Drive_Backwards_Rights = 0
    Drive_Forwords_Left = 0
    Drive_Forwords = 0
    Drive_Forwords_Rights = 0
    Halt = 0
    Speed = 0
    Fjärrstyr = 0
    lock = 0
    mode = 0
    Line = 0
}
function lights_2 () {
    bitbot.setPixelColor(1, 0x659900)
    bitbot.setPixelColor(7, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
function driveForward () {
    Lights_forward()
    basic.pause(100)
    bitbot.go(BBDirection.Forward, Speed)
}
function lights_5 () {
    bitbot.setPixelColor(4, 0x659900)
    bitbot.setPixelColor(10, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
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
function Variables () {
    basic.showNumber(3)
    Drive_Backwards_Left = 0
    Backwards = 0
    Drive_Backwards_Rights = 0
    Drive_Forwords_Left = 0
    Drive_Forwords = 0
    Drive_Forwords_Rights = 0
    Halt = 0
    Speed = 10
    Fjärrstyr = 0
    lock = 1
    mode = 4
    Line = 0
}
let Line = 0
let Drive_Forwords_Left = 0
let Drive_Backwards_Left = 0
let Fjärrstyr = 0
let Drive_Backwards_Rights = 0
let Drive_Forwords_Rights = 0
let Halt = 0
let Backwards = 0
let Drive_Forwords = 0
let lock = 0
let Speed = 0
let mode = 0
let Led = 0
radio.setGroup(1)
I()
basic.forever(function () {
    while (lock == 1) {
        while (mode == 2) {
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
        while (mode == 1) {
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
                Line = 0
            } else if (Fjärrstyr == 1) {
                Line = 1
            }
        }
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
