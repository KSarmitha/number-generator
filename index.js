module.exports = {
    getRandomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    getRandomFloat: (min, max) => Math.random() * (max - min) + min
}