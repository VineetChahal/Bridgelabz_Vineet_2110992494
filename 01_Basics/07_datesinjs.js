// Dates

let myDate = new Date()                     // object or instance
console.log(myDate)                         // output => 2024-02-27T08:12:16.497Z
console.log(myDate.toString())              // output =>  Tue Feb 27 2024 08:15:24 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString())           // output => 2024-02-27T08:15:24.254Z
console.log(myDate.toUTCString())           // output =>  Tue, 27 Feb 2024 08:15:24 GMT
console.log(myDate.toLocaleString())        // output => 2/27/2024, 8:15:24 AM
console.log(myDate.toLocaleDateString())    // output  =>  2/27/2024
console.log(myDate.toLocaleTimeString())    // output  =>  8:15:24 AM

console.log(typeof myDate);                 // output => object 

let myCreateDate =  new Date(2023, 0, 23, 5, 3)     // months start form 0 in js 
console.log(myCreateDate.toDateString());           // output => Mon Jan 23 2023
console.log(myCreateDate.toLocaleString());         // output => 1/23/2023, 5:03:00 AM

// let anotherDate  = new Date("2003-01-30")
let anotherDate  = new Date("01-30-2003")
console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));   //convert to seconds

let oneMoreDate = new Date()
console.log(oneMoreDate)
console.log(oneMoreDate.getMonth() + 1)
console.log(oneMoreDate.getFullYear())
console.log(oneMoreDate.getDay())

// console.log(`${oneMoreDate.getFullYear()} is the current year.`)

newDate.toLocaleString('default',{
    weekday: "long"
});