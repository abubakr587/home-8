
let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let nBor = [];
let nYoq = [];

for (let word of letterSearch) {
  if (word.includes('n')) {
    nBor.push(word);
  } else {
    nYoq.push(word);
  }
}

console.log("n harfi bor sozlar:", nBor);
console.log("n harfi yoq sozlar:", nYoq);