//declaraciones
let preciodescuento = 0;
function calcularDescuento(precio, descuento){
    return preciodescuento = precio * ((100-descuento))/100
}

//interacciones

function buttonCalcularDescuento() {
    const inputp = document.getElementById("inputPrice");
    const price = inputp.value;

    const inputc = document.getElementById("cupon");
    const cupon = inputc.value;

    let descuento = 0;
    let tdescuento = "error"

    const parrafoR = document.getElementById("result");

    switch (cupon) {
        case "cliente-VIP":
            descuento = 20;
            tdescuento = "de cliente VIP";
            break;
    
        case "cliente-regular":
            descuento = 10;
            tdescuento = "de cliente regular";
            break;
            
        case "#1ra-compra":
            descuento = 15;
            tdescuento = "de primera compra";
            break;

        default:
            descuento = 0;
            tdescuento = "nulo"
            break;
            
    }

    calcularDescuento(price, descuento)

    parrafoR.innerText = "tienes un descuento de " + descuento + "% y pagaras un total de : $" +  preciodescuento;
}