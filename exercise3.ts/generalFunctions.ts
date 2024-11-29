import { studentsMap } from "./student.ts";
import { student } from "./student.ts";
import { arrayOfStudents } from "./main.ts";
import * as readlineSync from 'readline-sync';

export function showInformations(): void{
    for (const a of arrayOfStudents) {
        console.log(`
            Name: ${a.getName()}
            Age: ${a.getAge()}
            Nacionality: ${a.getNacionality()}
            House: ${a.getHouse()}
            Magic Class: ${a.getMagicClass()}
            
            `);
    };
       
    };

export function deleteStudent(){
    let name = readlineSync.question('Type the name of the student you want to delete: ');

    if(studentsMap.has(name)){
        studentsMap.delete(name);
    }else{
        readlineSync.question(`
Student name was not found

press anything to continue: `);
    };
};

function editStudent(){
    let name: string = readlineSync.question('What student do you want to edit?')
    switch(studentsMap.has(name)){
        case true:
            let whatToEdit:number = Number(readlineSync.question(`
                [1] Change the name
                [2] Change the age
                [3] Change the nacionality
                [4] Change the house
                [5] Change the magic class
                
                Select a number: `));
            if(whatToEdit === 1){
                let newName: string = readlineSync.question('Type the new name: ');

                studentsMap.get(name)?.setName(name)
            }else if(whatToEdit === 2){
                let newaAge: number = Number(readlineSync.question('Type the new age: '))

                studentsMap.get(name)?.setName(name)
            }else if(whatToEdit === 3){
                let newNacionality: string = readlineSync.question('Type the new nacionality: ')

                studentsMap.get(name)?.setName(name)
            }else if(whatToEdit === 4){
                let newHouse: string = readlineSync.question('')
            };
                
                  
    };
};