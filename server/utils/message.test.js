var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate correct message object',()=>{
        var from = 'ammy';
        var text = 'test message';
        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct location message', ()=>{
        var from = 'Admin';
        var latitude = '15';
        var longitude = '23';

        var url = 'https://www.google.com/maps?q=15,23';
        var message = generateLocationMessage(from,latitude,longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,url});
    })
})