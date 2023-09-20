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
    for(i = 0; i < 5; i++){
        const userNumber = prompt('che numero era quello che stava in ' + (i+1) + '° posizione?');
        if(userNumber == arrayNumbers[i]){
            console.log('giusto');
        }else{
            console.log('sbagliato');
        }
    }
}
