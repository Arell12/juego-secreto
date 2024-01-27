let numeroScreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElmento( elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario == numeroScreto){
        asignarTextoElmento("p",`Acertaste el numero en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else{
        // el ususario no acerto
        if(numeroDeUsuario > numeroScreto){
            asignarTextoElmento('p','El numero secreto es menor');

        }
            else{
                asignarTextoElmento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
    }
    return;
}
function condicionesIniciales(){
    asignarTextoElmento("h1","Juego del numero secreto");
    asignarTextoElmento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroScreto = generarNumeroSecreto();
    console.log(numeroScreto);
    intentos = 1;
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio 
    condicionesIniciales();    
    //Deshabilitar boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo + 1);   
    //si el numero generado esta incluido en la lista hacemos una operacion
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElmento('p','Ya se sortearon todos los numeros posibles')
    }
   else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    } 
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}
}
condicionesIniciales();