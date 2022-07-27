
function fizzbuzz(n) {
    if((n % 3) === 0) {
      console.log("Fizz")
    }
    else if ((n % 5) === 0) {
      console.log("Buzz")
    }
}

module.exports = { fizzbuzz }
