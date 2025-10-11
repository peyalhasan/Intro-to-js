
function even(num) {
    let evens = []
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            evens.push(i)
        }
    }
    return evens
}
console.log(even(10))

function odd(num) {
    let odds = []
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            odds.push(i)
        }
    }
    return odds
}
console.log(odd(10))

