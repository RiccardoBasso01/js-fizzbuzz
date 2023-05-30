console.log('JS OK')

//variabili
// x è il contatore delle volte in cui si inserisce un valore ad una cella, una volta arrivato al numero massimo si completa il gioco
let x = 0;


// Recuperare gli elementi dal DOM
const element = document.getElementById('element');
console.log(element);
const wrapper = document.getElementById('wrapper');


//Generare numeri da 1 a 100 assegnando la giusta classe in base alle casistiche
for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
        console.log('FizzBuzz')
        element.innerHTML += `<div class="cells fb"></div>`
       
    } else if (!(i % 3)) {
        console.log('Fizz')
        element.innerHTML += `<div class="cells f"></div>`

    
    } else if (!(i % 5)) {
        console.log('Buzz')
        element.innerHTML += `<div class="cells b"></div>`

    } else {
        console.log(i)
        element.innerHTML += `<div>${i}</div>`
    }
}

//Assegno ad una variabile tutte le classi="cells" create nel passaggio precedente
const cell = document.querySelectorAll("div.cells");
console.log(cell.length) //Numero di celle da "indovinare". Da qui il valore di x (47)

//Creo un ciclo che comprende tutte le "cell"
for (let i = 0; i < cell.length; i++) {
    cell[i].style.border = "5px solid red";

    //Quando viene cliccata una cella:
    cell[i].addEventListener('click', function () {
        //Viene chiesto di scegliere tra le tre possibilità
        const question = prompt('Fizz, Buzz o FizzBuzz?').trim().toUpperCase();

        //!Veridica che le risposte siano corrette
        // tenendo in considerazione il maiusc 
        if (question === 'FIZZ' || question === 'BUZZ' || question === 'FIZZBUZZ') {
            //Se la risposta coincide con la classe indicativa (f per fizz, b per buzz e fb per fizzbuzz), esce un messaggio di conferma e viene assegnata la classe  
            if ((cell[i].classList.contains('f')) && question === "FIZZ") {
                alert('GIUSTO, questo è un FIZZ!!');
                cell[i].classList.add('Fizz', 'disable');
                x += 1; //Incrementa il valore per contare quante caselle sono state "indovinate"
            } else if ((cell[i].classList.contains('b')) && question === "BUZZ") {
                alert('GIUSTO, questo è un BUZZ!!');
                cell[i].classList.add('Buzz', 'disable');
                x += 1;

            } else if ((cell[i].classList.contains('fb')) && !(i % 3) || question === "FIZZBUZZ") {
                alert('GIUSTO, questo è un FIZZBUZZ!!');
                cell[i].classList.add('FizzBuzz', 'disable');
                x += 1;

            //Se il valore inserito è sbagliato esce l' alert di avviso
            }else{
                alert('SBAGLIATO!')
            }

            //Quando il contatore arriva al massimo finisce il gioco
            if(x === 47){
                alert('CONGRATULAZIONI')
                element.classList.add('cup');
                wrapper.classList.add('winner');
            }
        console.log(x) //Visualizza il contatore in console
        
        //!Se non passa la verifica esce un alert di errore
        } else {
            alert('Valore non valido')
            return
        }
    })
}
