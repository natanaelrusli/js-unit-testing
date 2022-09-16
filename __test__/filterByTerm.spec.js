import filterByTerm from "../src/filterByTerm"

const input = [
    { id: 1, url: 'https://www.url1.dev' },
    { id: 2, url: 'https://www.url2.dev' },
    { id: 3, url: 'https://www.link3.dev' }
]

describe('Filter function', () => {
    test('it should filter by a search term (link)', () => {
        const output = [
            { id: 3, url: 'https://www.link3.dev' }
        ]

        expect(filterByTerm(input, 'link')).toEqual(output)
        expect(filterByTerm(input, 'Link')).toEqual(output)
    }),

    test('it should filter by a search term (url)', () => {
        const expected = [
            { id: 1, url: 'https://www.url1.dev' },
            { id: 2, url: 'https://www.url2.dev' }
        ]

        expect(filterByTerm(input, 'uRl')).toEqual(expected)
        expect(filterByTerm(input, 'URL')).toEqual(expected)
        expect(filterByTerm(input, 'url')).toEqual(expected)
    }),

    test('it should not return anything with an empty search term', () => {
        const expectedError = 'search term should not be empty'

        expect(() => {
            filterByTerm(input, null)
        }).toThrow(expectedError)

        expect(() => {
            filterByTerm(input, '')
        }).toThrow(expectedError)
    })
})