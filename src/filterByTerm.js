function filterByTerm(inputArr, searchTerm) {
    if (searchTerm === '' || null || undefined) {
       return [] 
    }
    const regex = new RegExp(searchTerm, "i") // case insensitive matching
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex)
    })
}

module.exports = filterByTerm