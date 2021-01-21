// tuple
// mảng mixed
let arr = ['Kha', 25, true];
arr[0] = false;
arr[1] = 'Cybersoft';
arr = [30, false, 'kha', 12];

let tup: [string, number, boolean] = ['kha', 25, true];
// tup[0]= 12;

// tup[1]=[];

let studentTup: [string, number] = ['kha', 21];
let studentObj = {name: 'Cyber', age: 25};

class student {
  constructor(public name: string, public age: number) {}
}
let std1 = new student('Tylor', 25);
let std2 = new student(studentObj.name, studentObj.age);
let std3 = new student(...studentTup);

console.log(std1, std2, std3);

// enum

enum Color {
  Red = 'màu đỏ',
  Green = 'màu Xanh',
  Blue = 'màu xanh dương',
  Yellow = 'màu vàng',
  Black = 'màu đen',
  White = 'màu trắng',
}
let c: Color = Color.Yellow;

console.log(c);

let user: {
  username: string;
  gender: number;
  position: number;
};
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

enum GenderEnum {
  Male = 1,
  Female = 2,
}
enum positionEnum {
  Admin = 0,
  HighManager = 1,
  Manager = 2,
  user = 3,
}

let user3 = {
  username: 'Trung',
  gender: GenderEnum.Male,
  position: positionEnum.HighManager,
};

console.log(user3);
