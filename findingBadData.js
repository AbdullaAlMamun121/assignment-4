// findingBadData()
let arrayList = [-4, -9, -5, -33, -55];

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
const re = findingBadData(arrayList);
console.log(re);