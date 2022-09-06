// Problem 1

// If grade is greater than 100, or lower than 0 then give error message

const checkGrade = (grade) => {
 if(grade > 100){
   return ("error")
 }else( grade < 0 );{
 return ("error")
}
}
console.log(checkGrade(104))

//Problem 2 

// If grade is 100, return "You scored perfect!" message

const checkGrade2 = (grade) => {
   if(grade == 90){
      return ("You scored perfect!")

   }else{
      return grade
   }
  }
  console.log(checkGrade2(90))

// Problem 3

// If grade is greater or equal to 90 then log "You got a grade of a A"


const checkGrade3 = (grade) => {
    if(grade == 90){
       return ("You got a A")

    }else{
       return grade
    }
   }
   console.log(checkGrade3(90))

