const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // output => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
// console.log(marvel_heros[3][1]) // output => flash


// concat operator

// marvel_heros.concat(dc_heros) // output => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);

// to concat need one more variable 
const allHeros = marvel_heros.concat(dc_heros) // output => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros); 


// spread operator (...)

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);


// flat

const anotherArray = [1, 2, 3, 4, [3, 5, 7], 6, 8, 54, [34, 65, [12, 43, 654, 8675, 342], 23, 65, 97]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("vineet"))
console.log(Array.from("vineet"))
console.log(Array.from({name: "vineet"}));  // output => [] // interesting

let score1 = 100
let score2 = 200
let score3 = 300 
console.log(Array.of(score1, score2, score3)); // output => [ 100, 200, 300 ]