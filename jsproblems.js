const reverseString = str => str.split('').reverse().join('')

console.log(reverseString('hello'))

const capitalize = str => {
    const reverse = str.split(' ')
    let string = ''
    for (let st of reverse) {
        let uppar = st[0].toUpperCase() + st.slice(1)
        string += uppar + ' '
    }
    return string
}
console.log(capitalize('hello world'));

const capatalizeWords = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

console.log(capatalizeWords('hello world'))

const reverseEachword = word => word.split(' ').map(str => str.split('').reverse().join('')
).join(' ')
console.log(reverseEachword('hello world'));

const ar = [10, 20, 30, 40, 50]
console.log(ar.slice(0, 2));
const fruits = ['Apple', 'Banana', 'Mango'];

const replace = [10, 20, 30, 40, 50];
const rep = replace.splice(2, 3, 99, 300, 100)  // splice modidy original array
console.log(replace)

const js = ['JS', 'love', 'I']
console.log(replace.slice(2, 4))
const number = [1, 2, 3, 4, 5, 6, 7]
const copy = number.copyWithin(1, 0, 3) // copy start form 0 and end at 3 and it will replace index 4, 5,6
console.log(copy)