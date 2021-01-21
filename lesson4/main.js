"use strict";
// tuple
// mảng mixed
let arr = ['Kha', 25, true];
arr[0] = false;
arr[1] = 'Cybersoft';
arr = [30, false, 'kha', 12];
let tup = ['kha', 25, true];
// tup[0]= 12;
// tup[1]=[];
let studentTup = ['kha', 21];
let studentObj = { name: 'Cyber', age: 25 };
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let std1 = new student('Tylor', 25);
let std2 = new student(studentObj.name, studentObj.age);
let std3 = new student(...studentTup);
console.log(std1, std2, std3);
// enum
var Color;
(function (Color) {
    Color["Red"] = "m\u00E0u \u0111\u1ECF";
    Color["Green"] = "m\u00E0u Xanh";
    Color["Blue"] = "m\u00E0u xanh d\u01B0\u01A1ng";
    Color["Yellow"] = "m\u00E0u v\u00E0ng";
    Color["Black"] = "m\u00E0u \u0111en";
    Color["White"] = "m\u00E0u tr\u1EAFng";
})(Color || (Color = {}));
let c = Color.Yellow;
console.log(c);
let user;
// male =1  female =2
// admin=0 highManger:1 manager:2 user:3
user = {
    username: 'Linh',
    gender: 2,
    position: 1,
};
let user2 = {
    username: 'Trung',
    gender: 1,
    position: 3,
};
console.log(user, user2);
var GenderEnum;
(function (GenderEnum) {
    GenderEnum[GenderEnum["Male"] = 1] = "Male";
    GenderEnum[GenderEnum["Female"] = 2] = "Female";
})(GenderEnum || (GenderEnum = {}));
var positionEnum;
(function (positionEnum) {
    positionEnum[positionEnum["Admin"] = 0] = "Admin";
    positionEnum[positionEnum["HighManager"] = 1] = "HighManager";
    positionEnum[positionEnum["Manager"] = 2] = "Manager";
    positionEnum[positionEnum["user"] = 3] = "user";
})(positionEnum || (positionEnum = {}));
let user3 = {
    username: 'Trung',
    gender: GenderEnum.Male,
    position: positionEnum.HighManager,
};
console.log(user3);
