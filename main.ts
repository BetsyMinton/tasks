controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 0
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
function checkChoice () {
    if (choice == arrowList.shift()) {
        console.log(arrowList)
        if (arrowList.length == 0) {
            Level_Over()
            console.log(arrowList)
        }
    } else {
        points += -1
        console.log(arrowList)
        if (arrowList.length == 0) {
            Level_Over()
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (whichLevel == 1) {
        taskSprite.setFlag(SpriteFlag.Invisible, true)
        ducks += 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 3
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 1
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
function Level_Over () {
    answerOn = 0
    music.stopAllSounds()
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Timer = (game.runtime() - Start_time) / 1000
    list.push(points)
    game.splash("" + points + " " + "correct answers")
    game.splash("" + Timer + " " + "seconds")
    game.splash("" + Math.round((points + ducks) / Timer * 100) + " " + "points")
    game.reset()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (answerOn == 1) {
        choice = 2
        mySprite.setImage(arrows[choice])
        checkChoice()
    }
})
function tasks () {
    game.showLongText("Carefully watch the arrows, remember the order in which they appear.  Push B when you see a duck.", DialogLayout.Center)
    for (let index = 0; index < 2; index++) {
        ChooseArrow = Math.randomRange(0, 3)
        mySprite.setImage(arrows[ChooseArrow])
        arrowList.push(ChooseArrow)
        pause(1000)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        pause(100)
    }
    whichLevel = 1
    ducks += -1
    taskSprite.setPosition(10, 10)
    taskSprite.setFlag(SpriteFlag.Invisible, false)
    taskSprite.setVelocity(50, 50)
    for (let index = 0; index < 3; index++) {
        ChooseArrow = Math.randomRange(0, 3)
        mySprite.setImage(arrows[ChooseArrow])
        arrowList.push(ChooseArrow)
        pause(1000)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        pause(100)
    }
    whichLevel = 1
    ducks += -1
    taskSprite.setPosition(10, 10)
    taskSprite.setFlag(SpriteFlag.Invisible, false)
    taskSprite.setVelocity(50, 50)
    for (let index = 0; index < 2; index++) {
        ChooseArrow = Math.randomRange(0, 3)
        mySprite.setImage(arrows[ChooseArrow])
        arrowList.push(ChooseArrow)
        pause(1000)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        pause(100)
    }
    console.log(arrowList)
    taskSprite.setFlag(SpriteFlag.Invisible, true)
    whichLevel = 0
    game.showLongText("Use the keypad to recreate the pattern", DialogLayout.Center)
    answerOn = 1
    Start_time = game.runtime()
}
let ChooseArrow = 0
let Start_time = 0
let ducks = 0
let choice = 0
let answerOn = 0
let whichLevel = 0
let Timer = 0
let points = 0
let arrowList: number[] = []
let list: number[] = []
let arrows: Image[] = []
let taskSprite: Sprite = null
let mySprite: Sprite = null
let Score = 0
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
taskSprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Projectile)
taskSprite.setFlag(SpriteFlag.Invisible, true)
taskSprite.setFlag(SpriteFlag.StayInScreen, true)
taskSprite.setFlag(SpriteFlag.BounceOnWall, true)
arrows = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . f f f f f f f f f f f . . . 
. . f f f . f f f . f f f . . . 
. . f f f . f f f . f f f . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . f f f . . . . . . . 
. . f f f . f f f . f f f . . . 
. . f f f . f f f . f f f . . . 
. . f f f f f f f f f f f . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . . . f f f . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . . . . . . . . . . f f f . . 
. . . . . . . . . f f f f f . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. . f f f . . . . . . . . . . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . f f f . . . . . . . . . . . 
. . f f f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
list = []
arrowList = []
points = 7
Timer = 0
whichLevel = 0
answerOn = 0
tasks()
