var totalBudget = document.getElementById("get-budget");
var totalBudgetButton = document.getElementById("get-budget-button");
var totalAmount = document.getElementById("total-budget");
var amount = 0;

// function getBudget() {
    amount = totalBudget.value;
    totalAmount.innerHTML = amount;
    // var enteredbudget = parseFloat(totalBudget.value);
    // document.getElementById("total-budget").innerText = enteredbudget;
// }