Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; ++i) {
        const obj = this[i]
        callback(obj, i, this)
    }
}

enemies.forEach(function (enemy, i, arr) {
    enemy.x += enemy.vx
})

function someEnemy (enemy, i, arr) {
    ...
}

(enemy, i, arr) => { ... }
enemy => { ... }