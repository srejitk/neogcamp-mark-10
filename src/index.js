import "./styles.css";

var billAmount = document.querySelector("#bill-amount");
var paidAmount = document.querySelector("#paid-amount");
var nxtBtn = document.querySelector("#next");
var chkBtn = document.querySelector("#check");
var output = document.querySelector("#output-id");
var bill_label = document.querySelector("#bill-label");
var denom = [2000, 500, 100, 20, 10, 5, 1];
var no_Of_Notes = document.querySelectorAll(".no-of-notes");
var table = document.querySelector("#result-table");

nxtBtn.addEventListener("click", nextValidation);
chkBtn.addEventListener("click", clickHandler);

function nextValidation() {
  if (billAmount.value > 0) {
    chkBtn.style.display = "block";
    paidAmount.style.display = "block";
    bill_label.style.display = "block";
  } else {
    output.innerText = "Please enter valid values";
  }
}

function clickHandler() {
  if (paidAmount.value > 0) {
    var bill = billAmount.value;
    var paid = paidAmount.value;
    if (paid > bill) {
      calculateChange(bill, paid);
      table.style.display = "block";
    } else if (paid === bill) {
      output.innerText = "No Change to be lended! Return a smile!";
      table.style.display = "none";
    }
  } else {
    output.innerText = "Please enter valid values";
  }
}

function calculateChange(bill, paid) {
  var balance = paid - bill;
  for (var i = 0; i < denom.length; i++) {
    let numberOfNotes = Math.trunc(balance / denom[i]);
    balance %= denom[i];
    console.log(balance);
    no_Of_Notes[i].innerText = numberOfNotes;
  }
}
