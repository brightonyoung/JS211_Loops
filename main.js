//Problem 1
// const thousand = () => {
//     let number = 0;

//     do {
//         number += 1;
//         console.log(number)
//     } while (number < 1000)
// }
// thousand();


//Problem 2
// person = [
//  {firstName: "Jane",
//   lastName: "Doe",
//   birthDate: "Jan 5, 1925",
//   gender: "female" }
// ]

//Problem 3
// for(let key in person) {
//     if (key === "birthDate") {
//       let birthDate = person[key];
//     if(person[key] % 2 != 0) {
//       value = birthDate[key];
//       let year = /\d\d\d\d/
//     }
//   }
// }


//Problem 4
// const arrayOfPersons = [
//   {firstName: "Jane",
//   lastName: "Doe",
//   birthDate: "Jan 5, 1925",
//   gender: "female"
//   },
// {
//   firstName: "Don",
//   lastName: "Hon",
//   birthDate: "Nov 16, 1965",
//   gender: "male"
// },
// {
//   firstName: "Mandy",
//   lastName: "Moore",
//   birthDate: "Sep 17, 1996",
//   gender: "female"
// },
// {
//   firstName: "Roger",
//   lastName: "Rabbit",
//   birthDate: "Mar 18, 1776",
//   gender: "male"
// }]

//Problem 5
// const newArray = arrayOfPersons.map(elem=> elem.firstName)
// console.log(newArray)

//Problem 6
// const genderMale = arrayOfPersons.filter(boy => boy.gender === "male");
// console.log(genderMale)

//Problem 7
// const newArrayBirth = arrayOfPersons.filter(function(elem){
//   let birthDate = elem.birthDate;
//   let search = /\d\d\d\d/g;
//   let year = birthDate.match(search);
//   if (year < 1990) {
//     console.log(arrayOfPersons.firstName)
//   }
// })
// console.log(newArrayBirth)




// arrayOfPersons.filter((person) => {
//   let birthYear = '';
//   for (let i = person.birthDate.length - 4; i < person.birthDate.length; i++) {
//     birthYear += person.birthDate[i];
//   }
//   if (Number(birthYear) < 1990) {
//     console.log(person);
//   }
// })




// const filteredBirthDate = arrayOfPersons.filter(birthYear =>
// birthYear["birthDate"].match((/\d\d\d\d/g) < "1990"));
// console.log(filteredBirthDate)