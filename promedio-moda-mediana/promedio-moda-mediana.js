let numeros = [];

const acumular = (acumulable,element) => acumulable + element;

function extraerArray(){
    const input = document.getElementById("cadenaP")
    const entrada = input.value;

    let cadenat = entrada.split(" ");
    
    return numeros = cadenat.map( numero => parseFloat(numero) );
}


function esPar(entero) {
    if (entero%2 === 0) {
        return true;
    } else {
        return false;
    }
    
}

function calcularPromedio() {

    extraerArray();

    let acumulador = numeros.reduce(acumular,0);

    let promedio = acumulador/numeros.length;

    promedioT.innerText = "el promedio de la serie introducida es: " + promedio;
    console.log(numeros);
    numeros = []
}


function calcularMediana() {

    extraerArray();

    let mitadLista = (numeros.length)/2;
    let val2 = (parseInt(mitadLista) -1);
    let val1 = parseInt(mitadLista);
    let mediana;

    if (esPar(numeros.length)) {
        mediana = ( numeros[val1] + numeros[val2] )/2;
        
    } else {
        mediana = numeros[val1];
    }

    medianaT.innerText = "la mediana de la serie introducida es: " + mediana;

     
    console.log(numeros);
    numeros = [];
}

function calcularModa() {

    extraerArray();

    let listaCount = {};

    numeros.map(
        (elemento) => {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    
    console.log(listaCount);

    const listaArray = Object.entries(listaCount)

    listaArray.sort( (a, b) => b[1] - a[1] ) 

    const moda = listaArray[0][0]

    modaT.innerText = "la moda de la serie introducida es: " + moda;
    
    numeros = [];
}