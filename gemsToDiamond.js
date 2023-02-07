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
