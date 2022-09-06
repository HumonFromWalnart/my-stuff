
const checkAge = (age) => {
    if(age >= 18){
    return ("adult")
    }else if(age >= 13 && age < 18) {
     return ("teenager")
    }else{
       return ("child")
    }
}
console.log(checkAge(15))

// let a =12;
// let b = 12;

// a > b? console.log(a) : console.log(b);

// console.log(a> b? a : b)s