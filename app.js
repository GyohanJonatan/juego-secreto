// let titulo = document.querySelector('h1')
// titulo.innerHTML= 'Juego del número secreto'

// let parrafo = document.querySelector('p')
// parrafo.innerHTML='Indica un número del 1 al 10'

let numeroMaximo = 10;
let intentos = 1;
let listaNumerosSorteados = [];


// console.log(numeroSecreto)
condicionesIniciales();



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor')
        } else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCajas();
    }
    return;
}

function limpiarCajas(){
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros')
    } else{
    //Si el numero geenrado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego(){
    limpiarCajas();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

