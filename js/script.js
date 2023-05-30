console.log('JS OK')


// Recupero l'elemento dal DOM
const element = document.getElementById('element');
console.log(element);

//Generare umeri da 1 a 100 assegnandoli il giusto valore
for(let i = 1; i <= 100; i++){
    if(!(i % 3) && !(i % 5)){
        console.log('FizzBuzz')
        element.innerHTML += `<div class="FizzBuzz">FizzBuzz</div>`
    }else if(!(i % 3)){
        console.log('Fizz')
        element.innerHTML += `<div class="Fizz">Fizz</div>`
    }else if(!(i % 5)){
        console.log('Buzz')
        element.innerHTML += `<div class="Buzz">Buzz</div>`
    }else{
        console.log(i)
        element.innerHTML += `<div>${i}</div>`
    }
}

