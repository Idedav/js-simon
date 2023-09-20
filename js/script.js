const numersContainer = document.querySelector('.random-numbers');
const numbers = [];






// -------FUNCTION----------
function genRandomNum(){
    for(i = 0; i < 5; i++){
        const number = Math.floor((Math.random() * 100) + 1);
        numbers.push(number);
    }
    return numbers;
}

console.log(genRandomNum());