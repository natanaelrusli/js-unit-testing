function arraySum(array) {
    let sum = 0
    array.forEach(value => {
        sum += value
    });

    return sum
}

module.exports = arraySum