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
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 2) {
    	
    } else if (receivedNumber == 3) {
    	
    } else if (receivedNumber == 4) {
        Fjärrstyr = 1
    } else if (receivedNumber == 5) {
    	
    } else if (receivedNumber == 6) {
    	
    } else if (receivedNumber == 7) {
    	
    } else if (receivedNumber == 8) {
    	
    } else if (receivedNumber == 9) {
    	
    } else if (receivedNumber == 10) {
        Fjärrstyr = 0
    }
})
function lights_1 () {
    bitbot.setPixelColor(0, 0x659900)
    bitbot.setPixelColor(6, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
input.onGesture(Gesture.TiltRight, function () {
	
})
function Lights_Backward () {
    for (let index = 0; index < 2; index++) {
        Lights2()
    }
}
function Acelation () {
    Speed = Speed + 10
}
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
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
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
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
input.onGesture(Gesture.Shake, function () {
	
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
function Lights2 () {
    lights_6()
    lights_5()
    lights_4()
    lights_3()
    lights_2()
    lights_1()
}
input.onGesture(Gesture.FreeFall, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onGesture(Gesture.LogoDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
function lights_2 () {
    bitbot.setPixelColor(1, 0x659900)
    bitbot.setPixelColor(7, 0x659900)
    basic.pause(200)
    bitbot.ledClear()
}
input.onButtonPressed(Button.B, function () {
	
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
let Led = 0
let Speed = 0
let Fjärrstyr = 0
Fjärrstyr += 1
Speed = 10
radio.sendNumber(6)
basic.forever(function () {
    let Drive_Forwords_Rights = 0
    let Drive_Forwords = 0
    let Drive_Forwords_Left = 0
    let Drive_Backwards_Rights = 0
    let Backwards = 0
    let Drive_Backwards_Left = 0
    while (Drive_Backwards_Left == 1) {
    	
    }
    while (Backwards == 1) {
    	
    }
    while (Drive_Backwards_Rights == 1) {
    	
    }
    while (Drive_Forwords_Left == 1) {
    	
    }
    while (Drive_Forwords == 1) {
    	
    }
    while (Drive_Forwords_Rights == 1) {
    	
    }
    while (0 == 1) {
    	
    }
    while (0 == 1) {
    	
    }
    while (0 == 1) {
    	
    }
    while (0 == 1) {
    	
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    while (0 == 1) {
        Speed += 10
    }
})
basic.forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
