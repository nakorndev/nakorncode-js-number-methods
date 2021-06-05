const input1 = Number('Hello world' )
const input2 = Number('ABC123')
const input3 = Number('123')

console.log(Number.isNaN(input1)) // NaN
console.log(Number.isNaN(input2)) // NaN
console.log(Number.isNaN(input3))

const div1 = 5 / 0
const div2 = 5 / 2
console.log(Number.isFinite(div1)) // Infinity
console.log(Number.isFinite(div2))

console.log(Number.isInteger(2))
console.log(Number.isInteger(2.5))
console.log(Number.isInteger(2.0))
