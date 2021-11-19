// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// const griglia = document.querySelector('.griglia');
// let numeroBombe =20;
// let campi = [];
// let haiPerso = false;

document.getElementById('play').addEventListener('click', function(){
    play();
});

function play() {
    document.querySelector('.container-square').innerHTML = '';

    const levelSelected = parseInt(document.getElementById('level').value);
    // console.log(levelSelected);

    let cellsNumber, cellForSide;
    const bombsNumber = 16;  

    switch(levelSelected){
        case 1:
            cellsNumber = 100;
            // cellForSide = 10;
            // oppure
            // cellForSide = 10;
            // cellsNumber = cellForSide * cellForSide;
            // // cellForSide = 10;          
            break;
        case 2: 
            cellsNumber = 81;
            break;
        case 3: 
            cellsNumber = 49;
    }


    const bombs = generateBoms();
    console.log(bombs);

    function generateBoms() {
        const arrayBombs = [];

        while(arrayBombs.length < bombsNumber){
            const numeroRandom = getRndInteger(1,cellsNumber);
            if(!arrayBombs.includes(numeroRandom)) {
                arrayBombs.push(numeroRandom);
            }
        }
        
        return arrayBombs;

    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }


    cellForSide = Math.sqrt(cellsNumber);
    // console.log(cellForSide);

    generatePlayground();

    function generatePlayground() {

        
        const box = document.querySelector('.container-square');

        for(let i = 1; i<= cellsNumber; i++){
            const grid = createItem(i);

            grid.addEventListener('click', function() {
                this.classList.add('selected');
            });

            // console.log(grid);
            box.appendChild(grid);
        }
        // console.log(size);        
    }

    function createItem(num) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        const size = `calc(100% / ${cellForSide})`;
        cell.style.width = size;
        cell.style.height = size;

        cell.innerHTML = num;

        return cell;

    }



    //soluzione che porta dopo ad un ragionamento più complesso
    // function generatePlayground() {
    //     const size = `calc(100% / ${cellForSide})`;
    //     // console.log(size);
    
    //     let items = "";
    //     for(let i = 1; i <= cellsNumber; i++){ 
    //         const item = `
    //         <div class="square" style="width:${size};height:${size}">${i}</div>`;
    //         console.log(item);
    //         items += item;
    //     }
        
    //     console.log(items);
    
    //     const box = document.querySelector('.container-square');
    //     box.innerHTML = items;
    // }
    

    
 
}
// document.getElementById('play').addEventListener('click', function(){
//     play();
// });

// function play() {
//     // document.querySelector('.container-square').innerHTML = '';

//     const levelSelected = parseInt(document.getElementById('level').value);
//     // console.log(levelSelected);

//     let cellsNumber = 0;  

//     switch(levelSelected){
//         case 1:
//             cellsNumber = 100;         
//             break;
//         case 2: 
//             cellsNumber = 81;
//             break;
//         case 3: 
//             cellsNumber = 49;
//             break;
//         case 4: 
//             cellsNumber = 30;

//     }

//     function creaGriglia(){

//         // array bombe casuale
    
//         // creo array bombe prendendo il numero delle bombe e creo le bombe da inserire con fill
//         const arrayBombe = Array(numeroBombe).fill('bomba');
//         // console.log(arrayBombe);
//         // creo array vuoto con la misura del campo per poi usarlo per piazzare univocamente le bombe
//         const arrayVuoto = Array(cellsNumber).fill('valid');
//         // console.log(arrayVuoto);
//         // creo l'array di gioco
//         const gameArray = arrayVuoto.concat(arrayBombe);
//         // console.log(gameArray);
//         // creo l'array di gioco con le bombe che cmabiano randomicamente
//         const randomArray = gameArray.sort(() => Math.random() -0.5);
//         // console.log(randomArray);
    
//         if(cellsNumber == 100){
//             for(let i = 0; i < 100; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 98 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 90 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 88 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <89 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }

//         }
//         else if(cellsNumber == 81){
//             for(let i = 0; i < 81; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 79 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 71 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 69 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <70 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }
//         }

//         else if(cellsNumber == 49){
//             for(let i = 0; i < 49; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 47 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 39 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 37 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <36 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }
//         }

//         else if(cellsNumber == 30){
//             for(let i = 0; i < 30; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 28 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 20 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 18 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <17 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }
//         }


        
//     }
//     creaGriglia();
    
//     function click(campo){
        
        
//         if(campo.classList.contains('bomba')){
//             haiPerso = true;
//             alert('Hai perso nabbetto');
//         }else{
//             let totale = campo.getAttribute('data');
//             if(totale !=0){
//                 campo.classList.add('clicked');
//                 campo.innerHTML = totale;
//                 return
//             }
//             checkCampo(campo, currentId);
//         }
//         campo.classList.add('clicked');
//     }

    
// }


// const griglia = document.querySelector('.griglia');
// let numeroBombe =20;
// let campi = [];
// let haiPerso = false;


// document.getElementById('play').addEventListener('click', function(){
//     play();
// });

// function play() {
//     // document.querySelector('.container-square').innerHTML = '';

//     const levelSelected = parseInt(document.getElementById('level').value);
//     // console.log(levelSelected);

//     let cellsNumber = 0;  

//     switch(levelSelected){
//         case 1:
//             cellsNumber = 100;         
//             break;
//         case 2: 
//             cellsNumber = 81;
//             break;
//         case 3: 
//             cellsNumber = 49;
//             break;
//         case 4: 
//             cellsNumber = 30;

//     }

//     function creaGriglia(){

//         // array bombe casuale
    
//         // creo array bombe prendendo il numero delle bombe e creo le bombe da inserire con fill
//         const arrayBombe = Array(numeroBombe).fill('bomba');
//         // console.log(arrayBombe);
//         // creo array vuoto con la misura del campo per poi usarlo per piazzare univocamente le bombe
//         const arrayVuoto = Array(cellsNumber).fill('valid');
//         // console.log(arrayVuoto);
//         // creo l'array di gioco
//         const gameArray = arrayVuoto.concat(arrayBombe);
//         // console.log(gameArray);
//         // creo l'array di gioco con le bombe che cmabiano randomicamente
//         const randomArray = gameArray.sort(() => Math.random() -0.5);
//         // console.log(randomArray);
    
//         if(cellsNumber == 100){
//             for(let i = 0; i < 100; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 98 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 90 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 88 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <89 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }

//         }
//         else if(cellsNumber == 81){
//             for(let i = 0; i < 81; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 79 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 71 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 69 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <70 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }
//         }

//         else if(cellsNumber == 49){
//             for(let i = 0; i < 49; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 47 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 39 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 37 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <36 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }
//         }

//         else if(cellsNumber == 30){
//             for(let i = 0; i < 30; i++){
//                 // creo il numero di div necessario col ciclo
//                 const campo = document.createElement('div');
//                 // Creo un id univoco per ogniuno
//                 campo.setAttribute('id',i)
//                 campo.classList.add(randomArray[i]);
//                 griglia.appendChild(campo);
//                 campi.push(campo);
        
//                 campo.addEventListener('click',function(a){
//                     click(campo);
//                 })
//             }
               
            
        
//             for(let i = 0; i< campi.length;i++){
//                 let totale = 0;
//                 const bordoSin = i % cellsNumber === 0;
//                 const bordoDes = i % cellsNumber === cellsNumber -1;
                
//                 if(campi[i].classList.contains('valid')){
//                     if(i > 0 && !bordoSin && campi[i-1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 9 && !bordoDes && campi[i+1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 10 && campi[i - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i > 11 && !bordoSin && campi[i-1 - cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 28 && !bordoDes && campi[i+1].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 20 && !bordoSin && campi[i-1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i < 18 && !bordoDes && campi[i+1 + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     if(i <17 && campi[i + cellsNumber].classList.contains('bomba')){
//                         totale++;
//                     }
//                     campi[i].setAttribute('data',totale);
//                     console.log(campi[i]);
//                 }
//             }
//         }


        
//     }
//     creaGriglia();
    
//     function click(campo){
        
        
//         if(campo.classList.contains('bomba')){
//             haiPerso = true;
//             alert('Hai perso nabbetto');
//         }else{
//             let totale = campo.getAttribute('data');
//             if(totale !=0){
//                 campo.classList.add('clicked');
//                 campo.innerHTML = totale;
//                 return
//             }
//             checkCampo(campo, currentId);
//         }
//         campo.classList.add('clicked');
//     }

    
// }























    // const size = `calc(100% / ${boxLung})`;

    // let items = "";
    // for(let i=1; i <= boxNumber; i++){

    //     items +=`
    //     <div class="campo" style='width:${size};height:${size}'>${i}</div>`;
    // }
    // console.log(items);

    // const box= document.querySelector('container-court');
    // box.innerHTML = items;

// }

// const container = document.querySelector('.container');

// let items = '';

// // soluzione con createElement

// // function addCourt() {
// //     const node = document.createElement('div');
// //     node.className = 'campoEasy';

// //     return node;
// // }




// const easy = document.querySelector('.easy');
// const medium = document.querySelector('.medium');
// const hard = document.querySelector('.hard');
// // const campEasy = querySelector('.campoEasy');

// easy.addEventListener('click',function(){

//     // campEasy.classList.add('active');

//     function addCourt() {
//         const node = document.createElement('div');
//         node.className = 'campoEasy';
    
//         return node;
//     }

//     let N=64;
//     for(let i = 0; i < N; i++){

//     const divEl = addCourt();
//     container.appendChild(divEl);
    
//     divEl.addEventListener('click', function() {
//         console.log(this);
//         this.classList.add('clicked-true');
//     });
//     }
// })

// medium.addEventListener('click',function(){

//     function addCourt() {
//         const node = document.createElement('div');
//         node.className = 'campoMedium ';
    
//         return node;
//     }

//     let N=81;
//     for(let i = 0; i < N; i++){

//     const divEl = addCourt();
//     container.appendChild(divEl);

//     divEl.addEventListener('click', function() {
//         console.log(this);
//         this.classList.add('clicked-true');
//     });
//     }
// })

// hard.addEventListener('click',function(){

//     function addCourt() {
//         const node = document.createElement('div');
//         node.className = 'campoHard';
    
//         return node;
//     }

//     let N=100;
//     for(let i = 0; i < N; i++){

//     const divEl = addCourt();
//     container.appendChild(divEl);

//     divEl.addEventListener('click', function() {
//         console.log(this);
//         this.classList.add('clicked-true');
//     });
//     }
// })
 





