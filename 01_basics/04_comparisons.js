console.log("comparisons of same datatypes");
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 != 1); 
console.log(2 == 1);

console.log("comparisons of different datatypes");
console.log("2" > 1);  //not good to compare as js convert the string into the number to compare them 
console.log("02" > 1);

console.log("comparisons with string");
let str1 ="abc"
let str2 = "def"
console.log(str1 == str2)
console.log(str1 != str2);

console.log("comparisons with null");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// comparisons convert the null to number , and compare it thats why true 
// cpmparisions and equality check work in diffent ways

console.log("comparisons with undefined");
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === (strict check)
console.log("2" === 2);