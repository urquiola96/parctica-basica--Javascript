// codigo cuadrado
console.group("cuadrado")

function perimetroCuadrado(lado) { 
    return lado*4;
}

function areaCuadrado(lado) { 
    return Math.pow(lado , 2);
}
console.groupEnd()

//triangulo
console.group("triangulo")
function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return base*altura;   
}
console.groupEnd()
 
function validar(lado1, lado2, base) {
    let ladost = 0;
    let tipoT = "error";
    let altura = Math.sqrt(Math.pow(lado1 , 2) + Math.pow(base , 2));

    if (lado1==lado2) {
        ladost++
    }
    if (lado1 == base) {
       ladost++ 
    }
    if (lado2 == base) {
        ladost++ 
     }
     
     if (ladost==0) {
         tipoT="escaleno";
         
     } else if (ladost==1) {
        tipoT="isoseles";
        
    }
    else if (ladost>=2) {
        tipoT="equilatero";  
    }
    console.log("es un tirgulo " + tipoT + " con una altura de " +altura);
}

//circulo
console.group("circulo")
const pi = Math.PI;

function perimetroCirculo(radio) {
 return (radio*2)*pi;    
}

function areaCirculo(radio) {
    return Math.pow(radio, 2)*pi;
}
console.groupEnd()

//acciones cuadrado
function perimetroCua() {
    const input = document.getElementById("ladoC")
    const lado = input.value;

    perimetro = perimetroCuadrado(lado);
    alert("el area del perimetro es de " + perimetro + " cm")
}

function areacua() {
    const input = document.getElementById("ladoC")
    const lado = input.value;

    area = areaCuadrado(lado);
    alert("el area del cuadrado es de " + area + " cm^2")
}

//acciones triangulo

//acciones circulo
function perimetroC() {
    const input = document.getElementById("radio")
    const radio = input.value;

    perimetro = perimetroCirculo(radio)
    alert("el area del perimetro es de " + perimetro + " cm")
}

function areac() {
    const input = document.getElementById("radio")
    const radio = input.value;

    area = areaCirculo(radio)
    alert("el area del circulo es de " + area + " cm^2")
}