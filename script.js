


// Lecture 2
// Creating Objects: Function Constructors

// Former way of creating one object
// var john = {
//       name: 'John',
//       yearOfBirth: 1990,
//       job: 'teacher'
// };

// Function Constructors, implies that we use a function
// Capital letter
// var Person = function (name, yearOfBirth, job) {
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;
      // this.calculateAge = function () {
      //       console.log(2018 - this.yearOfBirth);
      // }
// }

// Adds method to prototype
// Person.prototype.calculateAge = function () {
//       console.log(2018 - this.yearOfBirth);
// }

// Adds properties to prototype
// Person.prototype.lastName = 'Smith';
//
// var john = new Person ('John', 1990, 'teacher');
// var jane = new Person ('Jane', 1969, 'designer');
// var mark = new Person ('Mark', 1948, 'retired');
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);



// Lecture 3
// The Prototype Chain in the Console

// All in browser console
// hasOwnProperty
// instanceof => john instanceof Person === true



// Lecture 4
// Creating Objects: object.create

// Using object prototype to create new object
// Allows us to directly specify which object should be a prototype

// var personProto = {
//       calculateAge: function () {
//             console.log(2016 - this.yearOfBirth);
//       }
// };
//
// var john = Object.create(personProto);
// john.name = 'john';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// var jane = Object.create(personProto, {
//       name: { value: 'Jane' },
//       yearOfBirth: { value: 1969 },
//       job: { value: 'designer' }
// });



// Lecture 5
// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Each of the variables hold their own copy of the data, they don't reference anything

// Objects
var obj1 = {
      name: 'John',
      age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Then why did this happen? We did not create a new object, we just created a reference that points to the first object.

// Functions
var age = 27;
var obj = {
      name: 'Jonas',
      city: 'Lisbon'
};
function change (a, b) {
      a = 30;
      b.city = 'San Francisco';
}
change(age, obj);
console.log(age);
console.log(obj.city);
