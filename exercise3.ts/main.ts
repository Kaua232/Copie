import * as readlineSync from 'readline-sync';
import { registerStudent } from "./student.ts";
import { student } from "./student.ts";

export let arrayOfStudents: Array<student> = []

let continueSystem: boolean = true