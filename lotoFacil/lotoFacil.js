let numeros = [];
let incluir = [];
let excluir = [];


function pegaIncluidos () {
    limpaBolasInclui()
    let numeroincluido = Number(document.querySelector('.incluidos').value);
    
    if (incluir.includes(numeroincluido) === false && numeroincluido < 26 && numeroincluido > 0 && excluir.includes(numeroincluido) === false && incluir.length < 5) {
        incluir.push(numeroincluido)
    }

    limpaCampoIncluir()
    criaBolaIncluida(incluir)
}

function pegaExcluidos () {
    limpaBolasExclui()
    let numeroexcluido = Number(document.querySelector('.excluidos').value);
    
    if (excluir.includes(numeroexcluido) === false && numeroexcluido < 26 && numeroexcluido > 0 && incluir.includes(numeroexcluido) === false && excluir.length < 5) {
        excluir.push(numeroexcluido)
    }

    limpaCampoExcluir()
    criaBolaExcluida(excluir)
    console.log(excluir)
}

function horaDoJogo() {
    limpaListaResultado()
    limpaBolasJogo()

    for (let i = 0; i < incluir.length; i++) {
        numeros.push(incluir[i])
    }
    
    while (numeros.length < 15) {
        const n = Math.floor(Math.random() * 26);
        if (numeros.includes(n) === false && excluir.includes(n) === false) {
            if (n > 0) {
                numeros.push(n)
            } 
        }
    }
    numeros.sort(ordenar)
    criandoBolas(numeros)
}

function ordenar(a, b) {
    if (a == b) {
        return 0
    }
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
}

function criaBolaIncluida(array) {
    var c = document.getElementById('circuloIncluido');
    var i;

    for ( i = 0; i < array.length; i++ ) {
        s = document.createElement('span');
        s.innerText = array[i];
        c.appendChild( s );
    }
}

function criaBolaExcluida(array) {
    var c = document.getElementById('circuloExcluido');
    var i;

    for ( i = 0; i < array.length; i++ ) {
        s = document.createElement('span');
        s.innerText = array[i];
        c.appendChild( s );
    }
}

function criandoBolas(array) {
    var c = document.getElementById('circulos');
    var i;

    for ( i = 0; i < array.length; i++ ) {
        (function(i){
            setTimeout(function(){
                s = document.createElement('span');
                s.innerText = array[i];
                c.appendChild( s );
            }, i*300);
         }(i));
    }
}

function reset() {
    limpaCampoIncluir()
    limpaCampoExcluir()
    limpaBolasInclui()
    limpaBolasExclui()
    limpaListaExcluidos()
    limpaListaIncluidos()
}

function limpaCampoIncluir() {
    document.querySelector('.incluidos').value = ''
}

function limpaCampoExcluir() {
    document.querySelector('.excluidos').value = ''
}

function limpaListaResultado() {
    while (numeros.length > 0) {
        numeros.pop()
    }
}

function limpaListaExcluidos() {
    while (excluir.length > 0) {
        excluir.pop()
    }
}

function limpaListaIncluidos() {
    while (incluir.length > 0) {
        incluir.pop()
    }
}

function limpaBolasJogo() {
    const bolas = document.querySelectorAll('#circulos span')
    for (let i = 0; i < bolas.length; i++) {
        bolas[i].remove()
    }
}

function limpaBolasInclui() {
    const bolas = document.querySelectorAll('#circuloIncluido span')
    for (let i = 0; i < bolas.length; i++) {
        bolas[i].remove()
    }
}

function limpaBolasExclui() {
    const bolas = document.querySelectorAll('#circuloExcluido span')
    for (let i = 0; i < bolas.length; i++) {
        bolas[i].remove()
    }
}