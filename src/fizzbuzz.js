
function fizzbuzz(n) {
    let result = ""
    if((n % 3) === 0) {
      result += "Fizz"
    }
    if ((n % 5) === 0) {
      result += "Buzz"
    }
    console.log(result)
}

module.exports = { fizzbuzz }
