const numersContainer = document.querySelector('.random-numbers');
const btnStart = document.querySelector('.btn');
const arrayNumbers = [];

btnStart.addEventListener('click', function(){
    reset();
    genRandomNum();
    printNumbers();
    setTimeout(reset, 5000);
    setTimeout(guessNumbers, 6000);
})




// -------FUNCTION----------
function genRandomNum(){
    for(i = 0; i < 5; i++){
        const number = Math.floor((Math.random() * 100) + 1);
        arrayNumbers.push(number);
    }
    return arrayNumbers;
}

function printNumbers(){
    const numbers = arrayNumbers.join(' ');
    numersContainer.innerHTML= numbers;
}

function reset(){
    numersContainer.innerHTML= '';
    return numersContainer;
}

function guessNumbers(numbers){
    let numbersRight = 0;
    for(i = 0; i < 5; i++){
        const userNumber = prompt('che numero era quello che stava in ' + (i+1) + '° posizione?');
        if(userNumber == arrayNumbers[i]){
            numbersRight++
            numersContainer.innerHTML += `
            <h3>Esatto! Il ${i+1}° numero era ${userNumber}!</h3>
            `
        }else{
            numersContainer.innerHTML += `
            <h3>Sbagliato. Il ${i+1}° numero era ${arrayNumbers[i]}...</h3>
            `
        }
    }
    numersContainer.innerHTML += `
    <h2>Hai indovinato ${numbersRight} numeri su ${i}</h2>
    `
}
