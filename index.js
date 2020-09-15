const _ = require("underscore")

let count = 0

const strArr = ["it's", "a", "small", "world", "after", "all"]
const reduceArr = _.reduce(
  strArr,
  function (memo, num) {
    return `${memo} ${num}`
  },
  "hello"
) // takes in an array an reduces it to a single value and need the middle function to do so

const strConcat = (str) => {
  return str.concat(` -----${count++} is the the index----- `)
}

console.log(_.map(strArr, strConcat)) // returns a copy of given array state and can also invoke a function on each element in that array
console.log(reduceArr)
