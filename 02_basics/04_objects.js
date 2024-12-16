// singleton object using constructor

// const vineet = new Object()  // created an object vineet using constructor 
const student = {} // created an object named student 
student.id = 2110992494
student.name = "vineet"
student.isLoggedIn = false

// console.table(student);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullname: {
            firstName: "vineet",
            lastName: "chahal",
        }
    }
}

// console.log(regularUser.fullname.userFullname.middlenameName?.name); // here question mark is used coz we are not sure if middle name exist or not
                                                                     // it will only go forward if it exist 


const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
// console.log(obj3);                           // output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);                           // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
/**
 * here in Object.assign(target , source)
 * we add {} to make it taget as to copy all sources in it 
 * theres is no need to do it as we can make one of the object the target and others the sources 
 * but its a good practice so do it and easy for other to find how to and why
 */

// though we will be using the spread proto as it is easy and latest, hehe
const obj3 = {...obj1, ...obj2}
// console.log(obj3);                               // output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// when values comes from database eg users comes from the database as arrays of object

const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 2,
        email: "a@gmail.com",
    },
    {
        id: 3,
        email: "bc@gmail.com",
    },
    {
        id: 4,
        email: "c@gmail.com",
    },
    {
        id: 5,
        email: "ac@gmail.com",
    }
]

users[1].email
// console.log(student);
// console.log(Object.keys(student));                   // output => [ 'id', 'name', 'isLoggedIn' ] comes as an array
// console.log(Object.values(student));                 // output => [ 2110992494, 'vineet', false ]
// console.log(Object.entries(student));                // output => [ [ 'id', 2110992494 ], [ 'name', 'vineet' ], [ 'isLoggedIn', false ] ]

// console.log(student.hasOwnProperty("isLoggedIn"));   // output => true
// console.log("------------------------------------------------------------------------------------------------------");
//-------------------------------------------- de-structuring -----------------------------------------------------

const course = {
    courseName: "javascript",
    price: 999,
    courseInstructor: "hitesh"
}
// console.log(course.courseName);

const {courseInstructor: instructor} = course   // syntax to get value from an object
// above i renamed courseInstructor as instructor
console.log(instructor);                        // output => hitesh

//------------------------------------------------- API ----------------------------------------------------------

/**
 * values are in JSON FORMAT ie just basically OBJECT HEHE
 * 
 * {
 *   "name": "vineet",
 *   "id": "12",
 *   "sub": "javascript"
 * }
 * 
 * above is an example of json i.e an object with no-name. here both the values and keys are in STRING FORMAT
 */

