let key = 0
piano.RGB_Program_Close()
basic.forever(function () {
    key = piano.Touch()
    if (key == piano.TouchButton(piano.touch.C)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        piano.RGB_Program().setBrightness(10)
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.D)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.E)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        music.playTone(165, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.F)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.G)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        music.playTone(196, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.A)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        music.playTone(220, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.A)) {
        piano.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        music.playTone(247, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.A)) {
        piano.RGB_Program().showRainbow(1, 360)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.B)) {
        piano.RGB_Program().showRainbow(45, 360)
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.CD)) {
        piano.RGB_Program().showRainbow(45, 89)
        music.playTone(466, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.DE)) {
        piano.RGB_Program().showColor(59)
        music.playTone(277, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.FG)) {
        piano.RGB_Program().showColor(34)
        music.playTone(622, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.GA)) {
        piano.RGB_Program().showColor(90)
        music.playTone(831, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.AB)) {
        piano.RGB_Program().showColor(230)
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.L)) {
        piano.RGB_Program().showColor(350)
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.M)) {
        piano.RGB_Program().showColor(20)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (key == piano.TouchButton(piano.touch.H)) {
        piano.RGB_Program().showColor(59)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
