// Lecture 2
// Creating Objects: Function Constructors

// Former way of creating one object
/* var john = {
      name: 'John',
      yearOfBirth: 1990,
      job: 'teacher'
};

// Function Constructors, implies that we use a function
// Capital letter
var Person = function (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
      // this.calculateAge = function () {
      //       console.log(2018 - this.yearOfBirth);
      // }
}

// Adds method to prototype
Person.prototype.calculateAge = function () {
      console.log(2018 - this.yearOfBirth);
}

// Adds properties to prototype
Person.prototype.lastName = 'Smith';

var john = new Person ('John', 1990, 'teacher');
var jane = new Person ('Jane', 1969, 'designer');
var mark = new Person ('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName); */



// Lecture 3
// The Prototype Chain in the Console

// All in browser console
// hasOwnProperty
// instanceof => john instanceof Person === true



// Lecture 4
// Creating Objects: object.create

// Using object prototype to create new object
// Allows us to directly specify which object should be a prototype

/* var personProto = {
      calculateAge: function () {
            console.log(2016 - this.yearOfBirth);
      }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
      name: { value: 'Jane' },
      yearOfBirth: { value: 1969 },
      job: { value: 'designer' }
}); */



// Lecture 5
// Primitives vs Objects

// Primitives
/* var a = 23;
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
console.log(obj.city); */



// Lecture 6
// First Class Functions: Passing Functions As Arguments

// See notes from Lesson-6.md

/* var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
      var arrRes = [];
      for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
      }
      return arrRes;
}

// Callback function
function calculateAge (el) {
      return 2018 - el;
}

function isFullAge (el) {
      return el >= 18;
}

function maxHeartRate (el) {
      if (el >= 18 && el <= 81) {
            return Math.round(206.9 - (0.67 * el));
      } else {
            return -1;
      }

}

// Callback functions don't get a parentheses
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates); */



// Lecture 7
// First Class Functions: Functions Returning Functions

// Anonymous function doesn't have a name
/* function interviewQuestion (job) {
      if (job === 'designer') {
            return function (name) {
                  console.log(name + ', can you please explain what UX design is?');
            }
      } else if (job === 'teacher') {
            return function (name) {
                  console.log('What subject do you teach, ' + name + '?');
            }
      } else {
            return function (name) {
                  console.log('Hello ' + name + ', what do you do?');
            }
      }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

// Another simpler way of calling the functions
interviewQuestion('teacher')('Mark'); */



// Lecture 8
// Immediately Invoked Function Expressions (IIFE)

// One way to do it
// function game () {
//       var score = Math.random () * 10;
//       console.log(score >= 5);
// }
// game();
// game();

// Better way, IIFE
// Data privacy => can't access outside of function, not going to reuse code
// Safely use variables, don't interfere with other variables

/*(function () {
      var score = Math.random () * 10;
      console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
      var score = Math.random () * 10;
      console.log(score >= 5 - goodLuck);
})(5);*/



// Lecture 9
// Closures

// Write a function that returns a function that calculates how many years til retirement

// Closures are functions that preserve data

// An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned. Variable object still stays in memory. Scope chain is a pointer to variable objects. Scope chain always stays intact.

// Start a task and you want to specify something that happens when that task is done with stuff that is available to you when you start the task.

/* function retirement (retirementAge) {
      var a = ' years left until retirement.';
      return function (yearOfBirth) {
            var age = 2018 - yearOfBirth;
            console.log((retirementAge - age) + a);
      }
}

var retirementUS = retirement(66);
retirementUS(1990);
// Same but easier to write
retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion (job) {
      return function (name) {
            if (job === 'designer') {
                  console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                  console.log('What subject do you teach, ' + name + '?');
            } else {
                  console.log('Hello ' + name + ', what do you do?');
            }
      }
}

interviewQuestion('teacher')('John'); */



// Lecture 10
// Bind, Call, Apply

/* var john = {
      name: 'John',
      age: 26,
      job: 'teacher',
      presentation: function (style, timeOfDay) {
            if (style === 'formal') {
                  console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
            } else if (style === 'friendly') {
                  console.log('Hey! What\'s up? I\'m ' + this.name + ', and I\'m a ' +  this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
            }
      }
};

var emily = {
      name: 'Emily',
      age: 35,
      job: 'designer'
};

john.presentation('formal', 'morning');

// Method borrowing
// Call lets us call the this variable on another object. Accepts the this object and the other parameters
// Apply accepts the this variable and an array. This example won't work because the initial john isn't built as an array

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// Bind method uses a function
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
      var arrRes = [];
      for (var i = 0; i < arr.length; i++) {
            arrRes.push(fn(arr[i]));
      }
      return arrRes;
}

function calculateAge (el) {
      return 2018 - el;
}

function isFullAge (limit, el) {
      return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan); */



// Lecture 11
// Coding Challenge
(function() {
      function Question(question, answers, correct) {
              this.question = question;
              this.answers = answers;
              this.correct = correct;
      }
      Question.prototype.displayQuestion = function() {
            console.log(this.question);
            for (var i = 0; i < this.answers.length; i++) {
                  console.log(i + ': ' + this.answers[i]);
            }
      }
      Question.prototype.checkAnswer = function(answer, callback) {
            var sc;
            if (answer === this.correct) {
                  console.log('Correct answer!');
                  sc = callback(true);
            } else {
                  console.log('Wrong answer. Try again!');
                  score = callback(false);
            }
            this.displayScore(sc);
      }
      Question.prototype.displayScore = function (score) {
            console.log('Your current score is ' + score);
            console.log('-------------------------------');
      }

      var q1 = new Question ('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
      var q2 = new Question ('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
      var q3 = new Question ('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

      var questions = [q1, q2, q3];

      function score () {
            var sc = 0;
            return function (correct) {
                  if (correct) {
                        sc++;
                  }
                  return sc;
            }
      }

      var keepScore = score();

      function nextQuestion () {
            var n = Math.floor(Math.random() * questions.length);
            questions[n].displayQuestion();
            var answer = prompt('Please select the correct answer.');
            if (answer !== 'exit') {
                  questions[n].checkAnswer(parseInt(answer), keepScore);
                  nextQuestion();
            }
      }

      nextQuestion();
})();
