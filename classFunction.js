// 1. a function can be stored in a variable
function add(a, b) {
    return a + b
}
var sum = add
console.log(sum(5, 6))

// 2. a function can be store in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 7))

// 3. a function can be stored an Object
var obj = {
    s: add
}
console.log(obj)
console.log(obj.s(20, 21))

// 4. we can create a function
setTimeout(function() {
    console.log('Hi, I am execute after 2 sec')
}, 2000);
// this all are including in first class function