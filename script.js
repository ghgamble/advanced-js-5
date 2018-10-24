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
