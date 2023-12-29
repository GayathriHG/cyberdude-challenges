// import validation requirements
import JustValidate from "just-validate";

// get form by Id
const formEl = document.getElementById("book-appointment-form");

const localStorageKey = "appointmentData";
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

validateForm.onSuccess((e) => {
  const formData = new FormData(formEl);

  const formValueObj = Object.fromEntries(formData.entries());

  //get existing values fron local storage
  const existingAppointmentData = localStorage.getItem(localStorageKey);

  //parse the string into JS vlaue
  const existingAppointmentArray = JSON.parse(existingAppointmentData);
  const newAppointmentData = [];
  console.log(existingAppointmentArray);

  if (existingAppointmentArray) {
    // create new array and push existing value to it
    existingAppointmentArray.push(formValueObj);

    localStorage.setItem(
      localStorageKey,
      JSON.stringify(existingAppointmentArray)
    );
  } else {
    newAppointmentData.push(formValueObj);

    localStorage.setItem(localStorageKey, JSON.stringify(newAppointmentData));
  }

  alert("Appointment scheduled successfully");
  formEl.reset();
});

function getAllDatas(){
  const existingData=localStorage.getItem(localStorageKey);
 const existingArray= JSON.parse(existingData);

const tableEl=document.getElementById("appointments");
if(existingArray && existingArray.length >0){
  tableEl.classList.remove("hidden");
  const outPutEl=document.getElementById("appointmentList");
  outPutEl.innerHTML="";
  const finalValues=[];

existingArray.map(function(value){
  const trEl=document.createElement("tr");
  const td1El=document.createElement("td");
  const td2El=document.createElement("td");
  const td3El=document.createElement("td");
  const td4El=document.createElement("td");
  const td5El=document.createElement("td");
  const td6El=document.createElement("td");
  const td7El=document.createElement("td");
  const td8El=document.createElement("td");


const delBtnEl=document.createElement("button");

const editBtnEl=document.createElement("button")

td1El.classList.add("px-2", "py-1", "border");
td1El.textContent=value.petsName;

td2El.classList.add("px-2", "py-1", "border");
td2El.textContent=value.gender;

td3El.classList.add("px-2", "py-1", "border");
td3El.textContent=value.type;

td4El.classList.add("px-2", "py-1", "border");
td4El.textContent=value.age;

td5El.classList.add("px-2", "py-1", "border");
td5El.textContent=value.contactNo;

td6El.classList.add("px-2", "py-1", "border");
td6El.textContent=value.timeDate;

td7El.classList.add("px-2", "py-1","bg-violet-400", "border");
td7El.append(editBtnEl);
editBtnEl.textContent="Edit";

td8El.classList.add("px-2", "py-1","bg-red-400", "border");
td8El.append(delBtnEl);
delBtnEl.textContent="Cancel";

delBtnEl.addEventListener("click",(e)=>{
  cancelAppointment(value);
});

trEl.append(
  td1El,
  td2El,
  td3El,
  td4El,
  td5El,
  td6El,
  td7El,
  td8El,

);

finalValues.push(trEl);




});










}




}

