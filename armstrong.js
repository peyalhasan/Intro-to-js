// program to check an Armstrong number of three digits

let sum = 0;
const number = 153

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    //     console.log(`${number} is an Armstrong number`);
    // }
    // else {
    //     console.log(`${number} is not an Armstrong number.`);
}


const countVowels = (string) => {
    let count = 0;
    for (const i of string) {
        if ('aeiouAEIOU'.includes(i)) {
            count++
        }
    }
    return count;
}
console.log(countVowels('Arrow functions do not allow duplicate parameter names'))