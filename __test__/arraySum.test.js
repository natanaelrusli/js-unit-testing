import arraySum from '../src/arraySum'

test('should return 5 when the input are [1, 2, 2]', () => {
    const input = [1, 2, 3]
    const expected = 6

    const result = arraySum(input)

    expect(result).toBe(expected)
})