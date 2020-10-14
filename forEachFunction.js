 var arr = [1,2,3,4,5]
// var sum = 0
// arr.forEach(function(value,index,arr){
//     console.log(value,index,arr)
//     sum += value
// })
// console.log('sum of the array '+sum)

function forEach(arr,cb) {
    for(var i = 0; i < arr.length; i++) {
        // console.log(array[i])
        cb(arr[i],i, arr)
    }
}
var sum = 0
forEach(arr,function(value,index,arr) {
    console.log(value,index,arr)
    sum += value
})
console.log('sum of this array : ' + sum)
