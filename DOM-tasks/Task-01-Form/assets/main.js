
//get from by name
const formEl=document.forms.feedback;

// get button by queryselector
const btnEl=document.querySelector("form button")



 //get elements by object destructing

const{fullName,email,subject,type,message}=formEl.elements;
if(radioButton.checked) {
    subject.value = labelName
  }

formEl.addEventListener ("submit",(event)=>{
    event.preventDefault();

    const formData=new FormData(formEl);
    const{fullName,email,subject,type,message}=formEl.elements;
  
    console.log("form has been submitted");
});

