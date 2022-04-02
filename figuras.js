// codigo cuadrado

let ladoCuadrado= 0;

function perimetroCuadrado(lado) { 
    return lado*4;
}

function areaCuadrado(lado) { 
    return Math.pow(lado , 2);
}

//triangulo

function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return base*altura;   
}

//circulo

const pi = Math.PI;

function perimetroCirculo(radio) {
 return (radio*2)*pi;    
}

function areaCirculo(radio) {
    return Math.pow(radio, 2)*pi;
}