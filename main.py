def on_button_pressed_a():
    bitbot.bb_bias(BBRobotDirection.RIGHT, 45)
    for index in range(4):
        for index2 in range(6):
            bitbot.set_pixel_color(index2, 0xFFFF00)
            bitbot.led_clear()
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # . .
        . . # . .
        . . # . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    bitbot.stop(BBStopMode.BRAKE)
    for index3 in range(12):
        bitbot.set_pixel_color(index3, 0xFF0000)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    bitbot.bb_bias(BBRobotDirection.LEFT, 45)
    for index4 in range(4):
        index5 = 6
        while index5 <= 11:
            bitbot.set_pixel_color(index5, 0xFFFF00)
            bitbot.led_clear()
            index5 += 1
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

bitbot.go(BBDirection.FORWARD, 5)
basic.show_leds("""
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    """)