import Calc from "./functions";

describe('Calc', () => {
    let calc;

    beforeEach(() => {
        calc = new Calc();
    });

    describe('add', () => {
        it('should add 1 and 1 and return 2', () => {
            const result = calc.add(1,1);
            expect(result).toBe(2);
        })

        it('should throw an error', () => {
            expect(calc.add('1', 1)).toThrow();
        })
    })
})