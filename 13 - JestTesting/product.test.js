import product from "./product";
import jest from 'jest';
import countLines from "./countLines";

describe('Product', () => {
    describe('getCategories', () => {
        it('should get categories from JSON', () => {
            const input = [
                {
                    id: '800001',
                    name: 'Papier A4',
                    category: {id: 1, name: 'Paper', position: '3'},
                },
                {
                    id: '90273',
                    name: 'Ball pens',
                    category: {id: 3, name: 'Stationery', position: '1'},
                },
            ];

            const output = product.getCategories(JSON.stringify(input));
            expect(output).toStrictEqual(['Stationery', 'Paper']);
        });

        it('should get other categories from JSON', () => {
            const input = [
                {
                    id: '600320',
                    name: 'Eraser',
                    category: {id: 1, name: 'Accessories', position: '4'},
                },
                {
                    id: '90273',
                    name: 'Ball pens',
                    category: {id: 3, name: 'Stationery', position: '1'},
                },
            ]

            const output = product.getCategories(JSON.stringify(input));
            expect(output).toStrictEqual(['Stationery', 'Accessories'])
        })
    })
})




describe('countLines', () => {
    it('should count the lines of a 3-lined file correctly', async () => {
        const lines = await countLines('input.txt');
        expect(lines).toBe(3);
    });
});

