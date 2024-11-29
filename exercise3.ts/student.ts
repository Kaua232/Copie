import { arrayOfStudents } from "./main.ts";
import * as readlineSync from 'readline-sync';

export class student{
    private name: string;
    private age: number;
    private nacionality: string;
    private house: string | null;
    private magicClass: string;

    constructor(name: string, age: number, nacionality: string, magicClass: string){
        this.name = name;
        this.age = age;
        this.nacionality = nacionality;
        this.magicClass = magicClass;
    };

    getName(): string{
        return this.name;
    };

    setName(name: string): void{
        this.name = name;
    };

    getAge(): number{
        return this.age;
    };

    setAge(age: number): void{
        this.age = age;
    };

    getNacionality(): string{
        return this.nacionality;
    };

    setNacionality(nacionality: string): void{
        this.nacionality = nacionality;
    };

    getHouse(): string | null{
        return this.house;
    };

    setHouse(house: string | null): void{
        this.house = house;
    };

    getMagicClass(): string{
        return this.magicClass;
    };

    setMagicClass(magicClass: string): void{
        this.magicClass = magicClass;
    };

    draftHouse(): void{
        let name = readlineSync.question('Type the student is name: ')
        let a = Math.floor(Math.random() * (4 - 1) + 1);
        switch(a){
            case 1:
                studentsMap.get(name)?.setHouse('Griffindor');
                break;
            case 2:
                studentsMap.get(name)?.setHouse('Hufflepuff');
                break;
            case 3:
                studentsMap.get(name)?.setNacionality('Revenclaw');
                break;
            case 4:
                studentsMap.get(name)?.setMagicClass('Slytherin');
                break;
        };
    };

};

export const studentsMap = new Map<string, student>();

export function registerStudent(){
    let name: string = readlineSync.question('Type the student is name: ');
    let age: number = Number(readlineSync.question('Type the student is age: '));
    let nacionality: string = readlineSync.question('Type the student is nacionality: ');
    let magicClass: string = readlineSync.question('Type the student is magic class: ');

    let newStudent = new student(name, age, nacionality, magicClass);
    studentsMap.set(name, newStudent);
    arrayOfStudents.push(newStudent);
};