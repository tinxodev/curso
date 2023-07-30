import { error } from "console";

let weekday = 1

if (weekday <=0 ) {
    
    throw new Error('el dia de la semana no esta permitido')
}


switch (weekday) {
    case 1:
        console.log('es lunes');
        
        break;

    case 2:
        console.log('es martes');
        
        break;

    case 3:
        console.log('es miercoles');
        
        break;


    default:
        console.log('no es lunes, martes ni miercoles');
        
        break;
}

















































