'use strict';

function Person1(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person1.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
};

function Student1(studentId, firstName, lastName) {
  this._super(firstName, lastName);
  this.studentId = studentId;
}

Student1.prototype = Object.create(Person1.prototype);
Student1.prototype.constructor = Student1;
Student1.prototype._super = Person1;

Student1.prototype.getRecordInfo = function() {
  return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
};

var student1 = new Student1(1, 'Bob', 'Smith');
console.log(student1.getFullName());
console.log(student1.getRecordInfo());

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student2 extends Person2 {
  constructor(studentId, firstName, lastName) {
    super(firstName, lastName);
    this.studentId = studentId;
  }

  getRecordInfo() {
    return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
  }
}

var student2 = new Student2(2, 'Jane', 'Smith');
console.log(student2.getFullName());
console.log(student2.getRecordInfo());


