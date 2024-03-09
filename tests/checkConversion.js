import { numberToBase100, base100ToNumber } from '../dist/lib/operations'

describe('Check conversion', () => {
    it('should convert a number to base 100', () => {
        const result = numberToBase100(100)
        expect(result).toEqual('1.00')
    })

    it('should convert a base 100 to a number', () => {
        const result = base100ToNumber('1.00')
        expect(result).toEqual(100)
    })
})