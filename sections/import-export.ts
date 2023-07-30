/*export function saludo(nombre:string = "...") {
    console.log("hola "+ nombre);
}
let primerNombre = 'martin'
let segundoNombre= 'balasteguy'
saludo(primerNombre +' '+ segundoNombre);*/

import {addTwoNumbers, substractTwoNumbers, 
timesTwoNumbers,divideTwoNumbers} from '../helpers/math-helpers';


let num1=128
let num2=76


let total1: number = addTwoNumbers (num1,num2)
let total2: number = substractTwoNumbers (num1,num2)
let total3: number = timesTwoNumbers (num1,num2)
let total4: number = divideTwoNumbers (num1,num2)


console.log('add',total1);
console.log('substract',total2);
console.log('times',total3);
console.log('divide',total4);








