import JustValidate from "just-validate";

const formEl = document.getElementById("bill-split-form");
// const calculateEl = document.getElementById("calculate");

const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField("#amount", [
  {
    rule: "required",
    errorMessage: "Enter the total amount.",
  },
]),
  validateForm.addField("#people", [
    {
      rule: "required",
      errorMessage: "Enter the total no. of people.",
    },
  ]);
validateForm.addField("#currency", [
  {
    rule: "required",
    errorMessage: "select a currency.",
  },
]);

validateForm.onSuccess(() => {
  const formData = new FormData(formEl);

  const formValueObj = Object.fromEntries(formData.entries());

  const newBillSplitData = [];

  const storedBillData = localStorage.getItem("splitBillData");

  const storedBillArr = JSON.parse(storedBillData);

  if (storedBillArr) {
    storedBillArr.push(formValueObj);

    localStorage.setItem("splitBillData", JSON.stringify(storedBillArr));
  } else {
    newBillSplitData.push(formValueObj);
    localStorage.setItem("splitBillData", JSON.stringify(newBillSplitData));
  }

  // console.log(storedBillArr);

  //   const splitBillObj = [];

  //   splitBillObj.push(formValueObj);

  //   localStorage.setItem("splitBillData", JSON.stringify(splitBillObj));

  //   alert("Bill split successfully");
  //   formEl.reset();
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const amountEl = document.getElementById("amount").value;
  // console.log(amountEl);
  const peopleEl = document.getElementById("people").value;
  // console.log(peopleEl);
  const splitEl = amountEl / peopleEl;
  console.log(splitEl);
  const shareEl = document.getElementById("share");
  shareEl.innerHTML = `Your Share is:${splitEl}`;
});

function getAllBills() {
  const splitBills = localStorage.getItem("splitBillData");
  const splitBillsArr = JSON.parse(splitBills);

  const historyEl = document.getElementById("history");
  if (splitBillsArr && splitBillsArr.length > 0) {
    historyEl.classList.remove("hidden");
    const billTableEl = document.getElementById("billTable");
    const finalBill = splitBillsArr
      .map((splitBills) => {
        return `
            <tr class="rounded">
            
            <td class="px-2 py-1 border">${splitBills.amount}</td>
            <td class="px-2 py-1 border">${splitBills.people}</td>
            <td class="px-2 py-1 border">${splitBills.currency}</td>

           
        </tr>
            
            `;
      })
      .join(" ");
    billTableEl.innerHTML += finalBill;
  } else {
    historyEl.classList.add("hidden");
  }

  // console.log(splitBillsArr);
}
getAllBills();
