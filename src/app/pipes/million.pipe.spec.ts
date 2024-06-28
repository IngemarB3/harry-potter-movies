import { MillionPipe } from './million.pipe';

describe('MillionPipe', () => {
    let pipe: MillionPipe;

    beforeEach(() => {
        pipe = new MillionPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should handle positive values"', () => {
        expect(pipe.transform('1')).toBe('$1 million');
        expect(pipe.transform('100')).toBe('$100 million');
        expect(pipe.transform('12345')).toBe('$12345 million');        
    });

    it('should handle zero"', () => {
        expect(pipe.transform('0')).toBe('$0');
    });

    it('should return empty string for invalid input', () => {
        expect(pipe.transform('')).toBe('');
        expect(pipe.transform('abc')).toBe('');
    });    
});
