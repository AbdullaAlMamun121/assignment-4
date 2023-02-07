/*
In this function => mindGame(), we tried to find out a specific value using arithmetic operatr.
*/
function mindGame(number) {
    let numberTow = 2;
    let numberThree = 3;
    let numberFive = 5;
    let numberTen = 10;
    if (typeof number !== 'number') {
        return 'Please enter valid number';
    }
    let multiplyByThree = number * numberThree;
    let addedTen = multiplyByThree + numberTen;
    let dividedByTow = (addedTen / numberTow);
    let substractionByFive = dividedByTow - numberFive;
    return substractionByFive;
}
const result = mindGame(33);
console.log(result);
