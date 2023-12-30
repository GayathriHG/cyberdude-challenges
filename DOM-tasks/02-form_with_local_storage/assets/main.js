// import validation requirements
import JustValidate from "just-validate";

// get form by Id
const formEl = document.getElementById("book-appointment-form");

const validateForm = new JustValidate(formEl);

// validation of form elements
validateForm.addField("#name", [
  {
    rule: "required",
    errorMessage: "Name is required",
  },
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 15,
  },
]);

validateForm.addField("#gender", [
  {
    rule: "required",
    errorMessage: "Choose an option",
  },
]);

validateForm.addField("#type", [
  {
    rule: "required",
    errorMessage: "Choose an option",
  },
]);

validateForm.addField("#age", [
  {
    rule: "required",
    errorMessage: "Age is required",
  },
  {
    rule: "minLength",
    value: 1,
  },
  {
    rule: "maxLength",
    value: 2,
  },
]);

validateForm.addField("#mobile", [
  {
    rule: "required",
    errorMessage: "Mobile number is required",
  },
  {
    rule: "minLength",
    value: 10,
  },
  {
    rule: "maxLength",
    value: 10,
  },
]);
validateForm.addField("#date", [
  {
    rule: "required",
    errorMessage: "Select a date and time",
  },
]);

validateForm.onSuccess(() => {
  const formData = new FormData(formEl);

  const formObj = Object.fromEntries(formData.entries());

  // get value from local storage
  const storedPetData = localStorage.getItem("petData");

  const newPetData = [];

  // parse the value into JS value

  const storedPetArray = JSON.parse(storedPetData);

  if (storedPetArray) {
    storedPetArray.push(formObj);

    localStorage.setItem("petData", JSON.stringify(storedPetArray));
  } else {
    newPetData.push(formObj);

    localStorage.setItem("petData", JSON.stringify(newPetData));
  }

  alert("Appointment scheduled successfully");
  formEl.reset();
});

function getAllDatas(){
  const storedData=localStorage.getItem("petData");

 const storedDataArr= JSON.parse(storedData);

 if(storedData){

 

const tableEl= document.getElementById('petTable');


const finalData=storedDataArr.map(storedData=>{
  return`
  <tr>
  <td class="px-2 py-2 border ">${storedData.name}</td>
  <td class="px-2 py-2 border ">${storedData.gender}</td>
  <td class="px-2 py-2 border ">${storedData.type}</td>
  <td class="px-2 py-2 border ">${storedData.age}</td>
  <td class="px-2 py-2 border ">${storedData.mobile}</td>
  <td class="px-2 py-2 border ">${storedData.date}</td>
  
  
  <td class="px-2 py-2 border "><button class="px-6 py-2 bg-fuchsia-600 rounded">
  Edit
  </button>
  </td>
  
  <td class="px-2 py-2 border "><button class="px-6 py-2 rounded bg-red-600">Cancel</button>
  </td>
  </tr>
  
  `;
})
.join(" ");





tableEl.innerHTML+=finalData;

}else{
  console.log("No appointments yet!");
}
}
getAllDatas();






