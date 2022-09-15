import { sum } from "../src/sum"

it("should return 3 when the input is 1 and 2", () => {
    const result = sum(1, 2)

    expect(result).toBe(3)
})

it("should return -5 when the input is 0 and -5", () => {
    const result = sum(0, -5)

    expect(result).toBe(-5)
})