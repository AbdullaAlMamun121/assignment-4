/**
 * The isLGSeven() function performas a specific task that's met if the number is greater or less than seven. 
 */

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
const re = isLGSeven(15);
console.log(re);
