var totalBudget = document.getElementById("get");
var balance = document.getElementById("balance");
var balanceOutput = parseFloat(balance.value);
var expenseOutput = document.getElementById("expenses");

const getBudget = () =>{ 
    var total = parseFloat(totalBudget.value);
    if (total <= 0) {
        alert("Please enter value greater than 0")
        
    } else {
        let totalAmount = document.getElementById("total-budget").innerText = total;
        balance.innerText = total;
        // totalBudget.value = '';
    }
}

var addExpenseButton = document.getElementById("add-expense-button");
var expenseTableBody = document.getElementById("expense-table-body");
var allExpenses = [];

addExpenseButton.addEventListener("click", function() {
    var category = document.getElementById("category");
    var description = document.getElementById("description");
    var amount = document.getElementById("amount");
    var date = document.getElementById("date");

    var expense = {
        categoryprop: category.value,
        descriptionprop: description.value,
        amountprop: parseFloat(amount.value),
        dateprop: date.value
    }

    allExpenses.push(expense);

    createExpensesRow(expense);
    
    const inputs = document.querySelectorAll('#category, #description, #amount, #date');
    inputs.forEach(input => {
    input.value = '';
    }); 

    var sum = allExpenses.reduce(function(total, expenses) {
        return total + expenses.amountprop;
    }, 0);
    var total = parseFloat(totalBudget.value);
    console.log(total)
    expenseOutput.innerText = sum; 
    balanceOutput = total - sum;
    balance.innerText = balanceOutput;

})

function createExpensesRow(expense) {
    var row = document.createElement("tr");

    var categoryCell = document.createElement("td");
    categoryCell.textContent = expense.categoryprop;
    row.appendChild(categoryCell);

    var descriptionCell = document.createElement("td");
    descriptionCell.textContent = expense.descriptionprop;
    row.appendChild(descriptionCell);

    var amountCell = document.createElement("td");
    amountCell.textContent = expense.amountprop;
    row.appendChild(amountCell);

    var dateCell = document.createElement("td");
    dateCell.textContent = expense.dateprop;
    row.appendChild(dateCell);
    
    var editDeleteCell = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        console.log("Edit expense:", expense);
    });
    editDeleteCell.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Detele";
    deleteButton.addEventListener("click", function() {
        // console.log("delete expenses:", expenses);
        balance.innerText = balanceOutput + expense.amountprop;
        expenseOutput.innerText = parseFloat(expenseOutput.innerText) - expense.amountprop;
        
        row.remove();

    });
    editDeleteCell.appendChild(deleteButton);

    row.appendChild(editDeleteCell);

    expenseTableBody.appendChild(row);
}
