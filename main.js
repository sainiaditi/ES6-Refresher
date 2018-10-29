// CONST & LET
var name = "john";

let sname;
sname = "Jack";
console.log(sname);

const person = {
  name: "john",
  age: 33
};
person.name = "jack";

const nums = [1, 2, 3, 4];
nums.push(5);
console.log(nums);

// ARROW FUNCTIONS

function sayHello() {
  console.log("hello");
}
sayHello();

const sayHi = () => {
  console.log("hey!!");
};
sayHi();

const func = name => console.log(`hello ${name}`);
func("john");

const fruits = ["Apples", "Oranges", "Grapes"];

// FOREACH

fruits.forEach((fruit, index) => console.log(fruit));

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));
console.log(singleFruit);

// FILTER

const people2 = [
  { id: 1, name: "Emma" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Elley" }
];

const people3 = people2.filter(people => people.id !== 3);
console.log(people3);

// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(array => array !== 2)]; // combination of spread and filter
console.log(arr2);

const personField = {
  name: "Brad",
  age: 33
};

const newPersonField = {
  ...personField,
  email: "brad@gmail.com"
};

console.log(newPersonField);

// DESTRUCTURING

const profile = {
  profileName: "John Doe",
  address: {
    street: "40 main street",
    city: "Bangalore"
  },
  hobbies: ["movies", "music"]
};

const { profileName, address, hobbies } = profile;
const { city } = profile.address;
console.log(profileName, address.street, hobbies[0], city);

// CLASSES

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person("John", 33);
const person2 = new Person("Sara", 25);

console.log(person1.greet());

// SUBCLASSES

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer("Kevin", 33, 300);
console.log(customer1.info());

// MODULES

// file 1 (file1.js)
export const nn = "Jeff";
export const num = 1;
export default Person;

// file 2 (file2.js)
import { nn, num } from "./file1";
import Person from "./file1";
