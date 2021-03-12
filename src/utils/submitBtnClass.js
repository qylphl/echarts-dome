const gravityConfetti = 0.3,
    gravitySequins = 0.55,
    dragConfetti = 0.075,
    dragSequins = 0.02,
    terminalVelocity = 3,
    // colors, back side is darker for confetti flipping
    colors = [
        { front: '#7b5cff', back: '#6245e0' }, // Purple
        { front: '#b3c7ff', back: '#8fa5e5' }, // Light Blue
        { front: '#5c86ff', back: '#345dd1' }  // Darker Blue
    ];
var randomRange = (min, max) => Math.random() * (max - min) + min

// helper function to get initial velocities for confetti
// this weighted spread helps the confetti look more realistic
var initConfettoVelocity = (xRange, yRange) => {
    const x = randomRange(xRange[0], xRange[1])
    const range = yRange[1] - yRange[0] + 1
    let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range)
    if (y >= yRange[1] - 1) {
        // Occasional confetto goes higher than the max
        y += (Math.random() < .25) ? randomRange(1, 3) : 0
    }
    return { x: x, y: -y }
}
// Confetto Class
function Confetto() {
    this.randomModifier = randomRange(0, 99)
    this.color = colors[Math.floor(randomRange(0, colors.length))]
    this.dimensions = {
        x: randomRange(5, 9),
        y: randomRange(8, 15),
    }
    this.position = {
        x: randomRange(canvas.width / 2 - button.offsetWidth / 4, canvas.width / 2 + button.offsetWidth / 4),
        y: randomRange(canvas.height / 2 + button.offsetHeight / 2 + 8, canvas.height / 2 + (1.5 * button.offsetHeight) - 8),
    }
    this.rotation = randomRange(0, 2 * Math.PI)
    this.scale = {
        x: 1,
        y: 1,
    }
    this.velocity = initConfettoVelocity([-9, 9], [6, 11])
}
Confetto.prototype.update = function () {
    // apply forces to velocity
    this.velocity.x -= this.velocity.x * dragConfetti
    this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity)
    this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random()

    // set position
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // spin confetto by scaling y and set the color, .09 just slows cosine frequency
    this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09)
}

// Sequin Class
function Sequin() {
    this.color = colors[Math.floor(randomRange(0, colors.length))].back,
        this.radius = randomRange(1, 2),
        this.position = {
            x: randomRange(canvas.width / 2 - button.offsetWidth / 3, canvas.width / 2 + button.offsetWidth / 3),
            y: randomRange(canvas.height / 2 + button.offsetHeight / 2 + 8, canvas.height / 2 + (1.5 * button.offsetHeight) - 8),
        },
        this.velocity = {
            x: randomRange(-6, 6),
            y: randomRange(-8, -12)
        }
}
Sequin.prototype.update = function () {
    // apply forces to velocity
    this.velocity.x -= this.velocity.x * dragSequins
    this.velocity.y = this.velocity.y + gravitySequins

    // set position
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
}
export {
    Confetto, Sequin
}