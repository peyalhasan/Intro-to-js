// Array is a collection of data

let sectionA = ['Karim', 'Rahim', 'Jabbar', 'Abdul'];
let sectionB = ['Taleb', 'Rahima', 'Kader', 'Tutul'];

for (const data of sectionA) {
    // console.log(data)
}
for (let i = 0; i <= sectionA.length - 1; i++) {
    // console.log(sectionA[i])
}
for (let i = 0; i < sectionB.length; i++) {
    // console.log(sectionB[i]);

}

let sum = 0;
let marks = [85, 97, 44, 37, 76, 60]
for (const mark of marks) {
    sum += mark;
}
let total = marks.length;
let avarage = sum / total;
// console.log(avarage)


const names = 'W3Schools';
let letter = names.at(30);
let leter = names.charAt(30)
// console.log(letter)
// console.log(leter)

let prices = [250, 645, 300, 900, 50]
let av = 0;
let as = 0
for (let i = 0; i < prices.length; i++) {
    av += prices[i];
    let off = prices[i] - prices[i] * 0.1;
    prices[i] = off;
    as += off;
}
const tl = prices.length;
console.log('Avarage before OFF', av / tl)
console.log('Avarage after OFF', as / tl)

console.log(prices)
