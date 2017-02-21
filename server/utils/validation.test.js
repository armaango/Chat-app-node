var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString',()=>{
    it('should reject non-string values',() =>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('should reject string with only spaces',() =>{
        var res = isRealString('    ');
        expect(res).toBe(false);
    });
    it('should allow non-space values',() =>{
        var res = isRealString('Amm     ');
        expect(res).toBe(true);
    });
})
