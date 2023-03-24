import {} from 'jasmine'

describe('Buffer', () => {
    it('should return the string representation if toString is called', () => {
        const myBuffer = Buffer.from('Hello World');
        const result = myBuffer.toString();

        expect(result).toEqual('Hello World');
    })
})