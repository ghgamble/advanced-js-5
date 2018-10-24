## Lecture 1

# Everything is an object. Primitives aren't but everything else is. Arrays, functions, objects, dates, wrappers, etc are objects.

# Object-Oriented Programming

Heavy use of objects to create applications to store data, structure applications into modules, and keeping code clean. Objects operate with one another to run the programs.

Blueprint. Other languages call it a class, but JavaScript calls it a constructor/prototype. An instance is an example of the object.

# Inheritance

An athlete is also a person, but their are particular properties and methods for that one type of person. Don't need to repeat same information from person constructor.

# Prototype chain

Each object has a prototype property which makes inheritance possible. Person is constructor, and John is an instance. calculateAge() will be passed down to an instance of the Person object. Moves through all parent objects til it finds the prototype method. 
