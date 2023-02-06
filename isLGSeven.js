// isLGSeven()

function isLGSeven(number) {

    if (typeof number !== 'number') {
        return 'Please enter valid number';
    }
    let numberSeven = 7;
    let numberTow = 2;
    if (number < numberSeven) {
        return number - numberSeven;
    } else {
        return number * numberTow;
    }

}
const re = isLGSeven('name');
console.log(re);
