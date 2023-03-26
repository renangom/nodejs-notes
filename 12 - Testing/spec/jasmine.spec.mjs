import {} from 'jasmine'

describe('Buffer', () => {
    it('should return the string representation if toString is called', () => {
        const myBuffer = Buffer.from('Hello World');
        const result = myBuffer.toString();

        expect(result).toEqual('Hello World');
    })
})

describe('Negattion', function () {
    it('should work in positive case', function() {
        expect('Node.js').toEqual('Node.js')
    })

    it('should work in negative case', function() {
        expect('Node.js').not.toEqual('React')
    })
})