# Object (Javascript Challenge)

This challenge is given as a part of free internship program (Fullstack Engineer) offered by[CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com).You can find the source code and live links below.

- Task 1 
### Create an Object and apply CRUD opreations to it.

- JS code

/*Create to task to display your details using objects and perform CRUD opreations on it. */

//basic details//
const myData = {
  myName: "Gayathri",
  myGender: "female",
  myCity: "Bangalore",
  DOB: 1997,
  isAlive: "Yes",
  //family//
  siblings: {
    sister: "Yes",
    noOfSisters: 2,
  },

  //hobbies//
  hobbies: {
    readingBooks: {
      favBook1: "The Harry Potter Series",
      favBook2: "Ten Thousand miles without a cloud",
      favBook3: "Pride and Prejudice",
      favBook4: "The Immortals of Meluha",
      favBook5: "I am Death",
      favBook6: "Murder in a Minute",
      favBook7: "Rich Dad Poor Dad",
    },
    gardening: {
      noteToSelf: "Please dont let them die",
    },
  },
};
//CRUD opreations//

//Read
 console.log(myData.hobbies.readingBooks.favBook3);

//update name
myData.name = "GayathriHG";

//delete
 delete myData.DOB;

console.log(myData);



### Live Link



## Acknowledgements
- This challenge was made possible to acheive , thanks to my mentor AnbuSelvan [@anburocky3](https://github.com/anburocky3) | GitHub Profile



## References:
- Thanks to [CyberDude Networks JavaScript Playlist ](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa),without these videos i would not understand the conepts and code by myself.