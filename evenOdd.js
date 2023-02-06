// evenOdd()

function evenOdd(stringValue) {

    if (typeof stringValue === "string") {

        let strLength = stringValue.length;
        if (strLength % 2 === 0) {
            return 'Even';

        } else {
            return 'Odd';
        }
    } else {
        return 'Please enter valid value';
    }

}
const result = evenOdd('');
console.log(result);
