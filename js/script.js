// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


const container = document.querySelector('.container');

let items = '';

// soluzione con createElement

function addCourt() {
    const node = document.createElement('div');
    node.className = 'campoEasy';

    return node;
}

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');


easy.addEventListener('click',function(){

    function addCourt() {
        const node = document.createElement('div');
        node.className = 'campoEasy';
    
        return node;
    }

    let N=64;
    for(let i = 0; i < N; i++){

    const divEl = addCourt();
    container.appendChild(divEl);

    divEl.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked-true');
    });
    }
})

medium.addEventListener('click',function(){

    function addCourt() {
        const node = document.createElement('div');
        node.className = 'campoMedium ';
    
        return node;
    }

    let N=81;
    for(let i = 0; i < N; i++){

    const divEl = addCourt();
    container.appendChild(divEl);

    divEl.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked-true');
    });
    }
})

hard.addEventListener('click',function(){

    function addCourt() {
        const node = document.createElement('div');
        node.className = 'campoHard';
    
        return node;
    }

    let N=100;
    for(let i = 0; i < N; i++){

    const divEl = addCourt();
    container.appendChild(divEl);

    divEl.addEventListener('click', function() {
        console.log(this);
        this.classList.add('clicked-true');
    });
    }
})
 





