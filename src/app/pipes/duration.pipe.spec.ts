import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
    let pipe: DurationPipe;

    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should handle positive values"', () => {
        expect(pipe.transform('90')).toBe('1h 30min');
        expect(pipe.transform('120')).toBe('2h 0min');
        expect(pipe.transform('59')).toBe('0h 59min');
        expect(pipe.transform('60')).toBe('1h 0min');
    });

    it('should handle 0', () => {
        expect(pipe.transform('0')).toBe('0h 0min');
    });
    
    it('should return empty string for invalid input', () => {
        
        expect(pipe.transform('')).toBe('');        
        expect(pipe.transform('abc')).toBe('');
        expect(pipe.transform('-30')).toBe('');
    });    
});