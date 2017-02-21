var expect = require('expect');

var {Users} = require('./users');

describe('Users',()=>{
    var users;

    beforeEach (()=>{
        users = new Users();
        users.users = [{
            id:'1',
            name:'Amm',
            room:'NC'
        },{
            id:'2',
            name:'jenny',
            room:'NOP'
        },{
            id:'3',
            name:'Armaan',
            room:'NC'
        }];
    });


    it('should add new user',()=>{
        var users = new Users();
        var user = {
            id:'1131',
            name:'Ammy',
            room:'OfficeFans'
        };
        var reUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
    });
    
    it('should return names for node course',()=>{
        var userList = users.getUserList('NC');

        expect(userList).toEqual(['Amm','Armaan']);
    });
});