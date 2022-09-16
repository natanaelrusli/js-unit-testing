function filterByTerm(inputArr, searchTerm) {
    if (searchTerm === '' || !searchTerm) {
       throw new Error('search term should not be empty')
    }
    const regex = new RegExp(searchTerm, "i") // case insensitive matching
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex)
    })
}

module.exports = filterByTerm