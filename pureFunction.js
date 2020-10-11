// a pure function always return same result for same argument
// it doesn't cause any side effect
function sqr(n) {
    return n*n
}
console.log(sqr(3))
console.log(sqr(3))

var n = 100
console.log(n)

// Not a pure function
var x = 20
function change() {
     x = 15
}
change()
console.log(x)

// not a pure function
var point = {
    a : 120,
    b : 220
}
function printpoint(point) {
    point.a = 150
    point.b = 155
    console.log(point)
}
printpoint(point)
console.log(point)