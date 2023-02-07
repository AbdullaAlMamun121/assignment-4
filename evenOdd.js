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
const result = evenOdd('chatgpt');
console.log(result);
