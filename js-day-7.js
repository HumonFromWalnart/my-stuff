// const dog = {
//     name:"black",
//     legs: 3,
//     color: "black",
//     age: 8,
//     noise : "dog noises",
//     bark: function(){
//         return this.noise;
//     },
// }
// const Doginfo=Object.assign(dog);
// console.log(Doginfo);
// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }
// // console.log(users.Paul.skills.length)
// let data = Object.keys(users)
// let max = Object.keys(users[0]);
// for (let i = 0; i < data.length; i++) {
//    if(data[i][1] > max){
//     max = data[i];
//    }


// }
// console.log(users[data[i]].skills.length)

// const dog = {
//     name:"black",
//     legs: 3,
//     color: "black",
//     age: 8,
//     noise : "dog noises",
//     bark: function(){
//         return this.noise;
//     },
// }
// const Doginfo=Object.assign(dog);
// console.log(Doginfo);
// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }
// // console.log(users.Paul.skills.length)
// let data = Object.keys(users)
// let max = Object.keys(users[0]);
// for (let i = 0; i < data.length; i++) {
//    if()


// }
// console.log(users[data[i]].skills.length)
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    Asab: {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    Paul: {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  };
  
  // many skills
  
//   const data = Object.entries(users);
  
//   let max = data[0][1].skills.length;
//   let check = 0;
//   for (let i = 1; i < data.length; i++) {
//     if (data[i][1].skills.length > max) {
//       max = data[i][1].skills.length;
//       check = i;
//     }
//   }
//   console.log(max, check);
//   console.log(data[check][0], data[check][1]);

// who logged in and has 50 points

// for (let i = 0; i < users.length; i++) {
//     const element = array[i];
    
// }

const data = Object.entries(users);
let loggedData;
for(let i = 0; i < data.length; i++){
    if(data[i][3]){   v
     let loggedData = loggedData.length + data[i];
    }
}
console.log(loggedData)