function simple(a, b, cb) {
    var x = a + b
    var y = a - b
    var z = cb(x, y)
    return z
}
//call nack function can use in a created function
function sum(a, b) {
    return a + b
}
var result = simple(5, 8, sum)
console.log(result)

//callback function can use in a anonimous function
var result2 = simple(5, 8, function(a, b) {
    return a - b
})
console.log(result2)

var result3 = simple(5, 8, function(a, b) {
    return a * b
})
console.log(result3)