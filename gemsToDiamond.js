// called gemsToDiamond().

function gemsToDiamond(gams1, gams2, gams3) {
    
    if (typeof gams1 !== 'number' || typeof gams2 !== 'number' || typeof gams3 !== 'number') {
        return 'Please enter valid number';
    }
    const gamsPower1F = 21;
    const gamsPower2F = 32;
    const gamsPower3F = 43;
    const fixedValue = 2000;

    let totaldiamond = gamsPower1F * gams1 + gamsPower2F * gams2 + gamsPower3F * gams3;
    if (totaldiamond > fixedValue) {
        return totaldiamond - fixedValue;
    } else {
        return totaldiamond;
    }

}
const re = gemsToDiamond(100, 5, 1);
console.log(re);