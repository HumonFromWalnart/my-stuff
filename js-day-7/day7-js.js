// 1. Find the person who has many skills in the users object.

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
// ----------------------------------------
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// has many skills

// const data = Object.entries(users)
// let max = data[0][1].skills;
// for(let i = 1; i < data.length; i++){
//   if(data[i][1].skills > max){
//     max = data[i][1];
//   }
// }
// console.log(max)

// logged in & has 50 points

// const data = Object.entries(users);
// let loggedCounter = 0;
// let pointCounter = 0;
// for (let i = 0; i < data.length; i++) {
//   if (data[i][1].isLoggedIn == true) {
//     loggedCounter += 1;
//   }
//   if (data[i][1].points == 50) {
//     pointCounter += 1;
//   }
// }
// console.log(`${loggedCounter} users logged in`);
// console.log(`${pointCounter} users have equal points that equal to 50 points`);

// --------------------------------
// 3. Find people who are MERN stack developer from the users object

// const data = Object.entries(users);

// for (let i = 0; i < data.length; i++) {
//   if (data[i][1].skills.length == 4 || data[i][1].skills.length > 4) {
//     console.log(data[i]);
//   }
// }

// 4. Set your name in the users object without modifying the original users object
// const pushThis = {
//   Tengis: {
//     email: 'tlmuunulzii@gmail.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 14,
//     isLoggedIn: true,
//     points: 30
//   },
// }
// const data = Object.entries(users);
// data.push(pushThis);
// const secondData = Object.entries(data);
// console.log(secondData[7])

// 5. Get all keys or properties of users object

const data = Object.entries(users)

// 6. Get all the values of users object