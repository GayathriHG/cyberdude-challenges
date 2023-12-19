const personDetails = [
  {
    id: 1,
    name: "Annie",
    place: "Bangalore",
    age: 20,
    hobbies: ["painting", "reading", "music"],
  },

  {
    id: 2,
    name: "Sasha",
    place: "Mangalore",
    age: 23,
    hobbies: ["killig", "eating"],
  },
  {
    id: 3,
    name: "Laxmi",
    place: "Gulbarga",
    age: 26,
    hobbies: ["cooking", "movies"],
  },
];

//array iteration
//for-of

// for (const details of personDetails) {
//   console.log(details.age, details.name);
// }

//for-in

// for (const details in personDetails) {
//   console.log(personDetails[details].hobbies,);
// }

//for-each
// personDetails.forEach( (details, detailsIndex)=> {
//   console.log(detailsIndex,details.place);
// });

//looping
// while loop
// const numbers = [1, 2, 3, 4, 5];
// let i = 0;
// while (i <= numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

//for loop
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//do-while
// let i = 20;
// do {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i--;
// } while (i > 1);
