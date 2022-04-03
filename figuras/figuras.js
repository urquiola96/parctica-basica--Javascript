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

//acttiones cuadrado
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