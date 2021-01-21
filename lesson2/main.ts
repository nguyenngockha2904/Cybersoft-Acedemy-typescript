let username = 'Kha';
let age = 22;
let trangThai = true;

// username=12;
username = '';
// string
let str: string;
str = username;

// number
let num: number;
num = age;

// boolean
let bool: boolean;
bool = trangThai;

// Array
let strings = ['A', 'B', 'C', 'D'];

// strings.push(1);
strings.push('E');

// cú pháp 1
let arrStr: Array<string> = strings;
// cú pháp 2
let arrStr2: string[] = strings;

let numbers = [1, 2, 3, 4];
// numbers.push('A');
// numbers[1]='';
numbers.push(6);

// cú pháp 1
let arrNums: Array<number> = numbers;
// cú pháp 2
let arrNums2: number[] = numbers;

// mang mixed union type
let mixed = [1, 'A', 2, 'D'];
mixed.push(1);
mixed.push('E');
// mixed.push(true);
mixed[0] = 'A';
mixed[1] = 5;

// cú pháp 1
let arrayMixed: Array<number | string> = mixed;
let arrayMixed2: (number | string)[] = mixed;

// object

let product = {
  id: 1,
  name: 'Máy giặt',
  price: 1000,
  isSold: false,
};

product.name = 'tủ lạnh';
product.price = 2500;
// product.isSold='asd';
// product.weight=159;

product = {
  id: 1,
  name: 'tivi',
  price: 12,
  isSold: false,
};
let newProduct: {
  id: number;
  name: string;
  price: number;
  isSold: boolean;
};

newProduct = product;
