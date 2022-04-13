//helpers
const salarioscol = colombia.map( persona => persona.salary)

 const salarioscolSorted = salarioscol.sort( (a,b) => a-b)

 function espar(numero) {
     return numero%2 === 0
    } 
//mediana general
function medianaSalarios(salarios) {

    const mitad = parseInt(salarios.length/2)
    let mediana;

    if (espar(salarios.length)) {
        mediana = (salarios[mitad] + salarios[mitad -1]) / 2;
    } else {
        mediana + salarios[mitad];
    }
    return mediana
}

//calculadora del top % del pais
function calcularTop(array, top) {
    const spliceStart = ((100-top) / 100) * array.length;
    
    const spliceEnd = array.length - spliceStart;

    return  result = array.splice(spliceStart , spliceEnd)
}

console.log( "la la media del salario del pais es " + medianaSalarios(salarioscolSorted) );
console.log( "la la media del salario del pais es " + medianaSalarios(calcularTop(salarioscolSorted,10)) );