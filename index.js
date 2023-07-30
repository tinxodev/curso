const readline = require("readline")
const { setDefaultHighWaterMark } = require("stream")

const linea = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//aqui creao una variable de tipo lista con corchetes y esta vacia
const contactos = []
//agrego a la variable contactos un metdo push 



function menu() {
    console.log("==================================================")
    console.log("menu v1.1")
    console.log("==================================================")
    console.log("1.-  listar contactos")
    console.log("--------------------------------------------------")
    console.log("2.-  agregar contacto");
    console.log("--------------------------------------------------")
    console.log("3.-  buscar contacto por nombre")
    console.log("--------------------------------------------------")
    conole.log("4.-  buscar contacto por numero telefonico")
    console.log("--------------------------------------------------")
    console.log("5.-  eliminar contacto por numero telefonico")
    console.log("--------------------------------------------------")
    console.log("6.-  editar contacto por numero telefonico")
    console.log("--------------------------------------------------")
    console.log("7.-  exit")
    console.log("==================================================")

    linea.question('elige una opcion:', (opcion) => {
        seleccionarOpciones(parseInt(opcion))
    })



}

function listarContactos() {
    
    console.log("==================================================")
    console.log("1.-  listar contactos")
    console.log("==================================================")
    for (let index = 0; index < contactos.length; index++) {
        const contacto = contactos[index];

        console.log("nombre: ", contacto.nombre);
        console.log("..............................................")
        console.log("numero: ", contacto.numero);
    }
}

function agregarContacto() {
    console.log("==================================================")
    console.log("2.-  agregar contacto")
    console.log("==================================================")

    linea.question('ingresa el nombre:', (nombre) => {
        linea.question('ingresa el numero:', (numero) => {
            contactos.push({
                nombre: nombre,
                numero: numero
            })
            console.log("El contacto se creo correctamente");
            listarContactos()
            menu()
        })
    })

}


function buscarContactoPorNombre() {
    console.log("==================================================")
    console.log("2.-  buscar contacto por nombre")
    console.log("==================================================")
    linea.question('ingresa el nombre a buscar:', (nombre) => {
        console.log(contactos.find((data) => {
            return data.nombre === nombre
        }));
        menu()
    })
}


function buscarContactoPorNumeroTelefonico() {
    console.log("==================================================")
    console.log("3.-  buscar contacto por numero telefonico")
    console.log("==================================================")
    linea.question('ingresa el numero:', (numero) => {
        console.log(contactos.find((data) => {
            return data.numero === numero
        }));
        menu()
    })



}


function eliminarContactoPorNumeroTelefonico() {
    console.log("==================================================")
    console.log("4.-  eliminar contacto por numero telefonico")
    console.log("==================================================")
    linea.question('ingresa el numero:', (numero) => {
        const contactoAEliminar = contactos.find((data) => {
            return data.numero === numero
        });
        const pocisionDelContacto = contactos.indexOf(contactoAEliminar)
        contactos.splice(pocisionDelContacto, 1);

        console.log("el contacto ha sido eliminado");
        listarContactos()
        menu()
    })


}


function editarContactoPorNumeroTelefonico() {
    console.log("==================================================")
    console.log("5.-  editar contacto por numero telefonico")
    console.log("==================================================")
    /*linea.question('ingresa el numero:', (numero) => {    
        linea.question('ingresa el nombre:', (nombre) => {
            linea.question('ingresa el numero:', (numeroEditar) => {
                
                contactos = contactos.map(contcato =>
                    contcato.id === numero
                      ? { ...contcato, name: nombre, numero: numeroEditar }
                      : contcato
                  );


                console.log("el contacto ha sido modificado");
                menu()
                
                })
        
            })   
    
    })
 */

    linea.question('ingresa el numero:', (numero) => {
        linea.question('ingresa el nombre:', (nombre) => {
            linea.question('ingresa el numero:', (numeroEditar) => {

                //busco el contacto
                const contactABuscar = contactos.find((contacto) => {
                    return contacto.numero === numero
                })

                //encontrar el indice
                const posisionDeContacto = contactos.indexOf(contactABuscar)
                contactos.splice(posisionDeContacto,1,{nombre:nombre,numero:numeroEditar})


                console.log("el contacto ha sido modificado");
                listarContactos()
                menu()

            })

        })

    })


}



function exit() {
    console.log("==================================================")
    console.log("6.-  exit")
    console.log("==================================================")
}
function seleccionarOpciones(opcion) {

    switch (opcion) {
        case 1:
            console.clear() 
            listarContactos();
            menu()
            break;
        case 2:
            console.clear()
            agregarContacto();
            menu()
            break;
        case 3:
            console.clear()
            buscarContactoPorNombre();
            menu()
            break;
        case 4:
            console.clear()
            buscarContactoPorNumeroTelefonico();
            menu()
            break;
        case 5:
            console.clear()
            eliminarContactoPorNumeroTelefonico();
            menu()
            break;
        case 6:
            console.clear()
            editarContactoPorNumeroTelefonico();
            menu()
            break;
        case 7:
            console.clear()
            exit();
            break;



        default:
            break;
    }
}

menu()

// creame una lista de paises que tanga 10 paises
// y en el pais de la pocision 4 muestrame Japon
// listame los 10 paises
/*let paises = []

paises.push("chile")
paises.push("españa")
paises.push("china")
paises.push("argntina")
paises.push("japon")
paises.push("uruguay")
paises.push("paraguay")
paises.push("guatemala")
paises.push("honduras")
paises.push("colombia")

for (let index = 0; index < paises.length; index++) {
    const pais = paises[index];
    console.log(index ,pais);
}
console.log(paises[4]);*/

/*let numberOfLines = 1;

function printLineNumber() {
    numberOfLines ++;
    console.log("Linea", numberOfLines );

}
printLineNumber()
printLineNumber()
printLineNumber()
printLineNumber()*/


/*months= ["enero","febrero","marzo","abril","junio"];

removeJunio= months.splice(4,1, "pepito mes");
console.log(months);
console.log(removeJunio);*/


/*const osArray = [
    { id: 0, name: "Windows" },
    { id: 1, name: "Linux" },
    { id: 2, name: "MacOS" },
];

const updatedOSArray = osArray.map(p =>
    p.id === 1
        ? { ...p, name: 'Ubuntu' }
        : p
);

console.log("After update: ", updatedOSArray);*/





