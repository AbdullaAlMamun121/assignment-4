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

/**
 * This evenOdd() function will verify if the string contains an even or odd number?.   
 *
 */
function evenOdd(stringValue) {

    if (typeof stringValue === "string") {

        let strLength = stringValue.length;
        if (strLength % 2 === 0) {
            return 'even';

        } else {
            return 'odd';
        }
    } else {
        return 'Please enter valid value';
    }

}

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


/**
 * This findingBadData() will try to catch invalid ages or negative numbers. 
 */
function findingBadData(arrayNumber) {
    if (typeof arrayNumber !== 'object') {
        return 'Please enter valid number';
    }
    let badValueList=0;
    for (let i = 0; i < arrayNumber.length; i++) {
        let element = arrayNumber[i];
        if (element < 0) {
            badValueList++; 
        }
    }
    return badValueList; 
}


 /* Diamond calculator function that helps calculate three friends' diamonds Is it greater than 2000 or not?
 */
 function gemsToDiamond(gams1, gams2, gams3) {
    
    if (typeof gams1 !== 'number' || typeof gams2 !== 'number' || typeof gams3 !== 'number') {
        return 'Please enter valid number';
    }
    const gamsPower1F = 21;
    const gamsPower2F = 32;
    const gamsPower3F = 43;
    const fixedValue = 2000;

    let totalDiamond = gamsPower1F * gams1 + gamsPower2F * gams2 + gamsPower3F * gams3;

    if (totalDiamond >= fixedValue) {
        return totalDiamond - fixedValue;
    } else {
        return totalDiamond;
    }

}
