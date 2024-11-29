"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsMap = exports.student = void 0;
exports.registerStudent = registerStudent;
var main_ts_1 = require("./main.ts");
var readlineSync = require("readline-sync");
var student = /** @class */ (function () {
    function student(name, age, nacionality, magicClass) {
        this.name = name;
        this.age = age;
        this.nacionality = nacionality;
        this.magicClass = magicClass;
    }
    ;
    student.prototype.getName = function () {
        return this.name;
    };
    ;
    student.prototype.setName = function (name) {
        this.name = name;
    };
    ;
    student.prototype.getAge = function () {
        return this.age;
    };
    ;
    student.prototype.setAge = function (age) {
        this.age = age;
    };
    ;
    student.prototype.getNacionality = function () {
        return this.nacionality;
    };
    ;
    student.prototype.setNacionality = function (nacionality) {
        this.nacionality = nacionality;
    };
    ;
    student.prototype.getHouse = function () {
        return this.house;
    };
    ;
    student.prototype.setHouse = function (house) {
        this.house = house;
    };
    ;
    student.prototype.getMagicClass = function () {
        return this.magicClass;
    };
    ;
    student.prototype.setMagicClass = function (magicClass) {
        this.magicClass = magicClass;
    };
    ;
    student.prototype.draftHouse = function (studentName) {
        var a = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        switch (a) {
            case 1:
                studentName.house = 'Griffindor';
                break;
            case 2:
                studentName.house = 'Hufflepuff';
                break;
            case 3:
                studentName.house = 'Revenclaw';
                break;
            case 4:
                studentName.house = 'Slytherin';
                break;
        }
        ;
    };
    ;
    return student;
}());
exports.student = student;
;
exports.studentsMap = new Map();
function registerStudent() {
    var name = readlineSync.question('Type the student is name: ');
    var age = Number(readlineSync.question('Type the student is age: '));
    var nacionality = readlineSync.question('Type the student is nacionality: ');
    var magicClass = readlineSync.question('Type the student is magic class: ');
    var newStudent = new student(name, age, nacionality, magicClass);
    exports.studentsMap.set(name, newStudent);
    main_ts_1.arrayOfStudents.push(newStudent);
}
;
