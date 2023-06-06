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

    var total = +document.getElementById("get").value
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var date = document.getElementById("date").value;

    if (total<=0) {
        alert("Please enter a total budget");
        return
    }

    if (!category || !description || !amount || !date ) {
       alert("Please enter complete information");
       return
    }

    if (amount > total || amount > balanceOutput) {
        alert("Your cannot spend more than your budget");
        return
    }
    if (amount <= 0) {
        alert("Please enter amount greater than 0");
        return
    }

    var expense = {
        categoryprop: category,
        descriptionprop: description,
        amountprop: parseFloat(amount),
        dateprop: date
    }

    allExpenses.push(expense);
    
    const inputs = document.querySelectorAll('#category, #description, #amount, #date');
    inputs.forEach(input => {
    input.value = '';
    }); 

    var sum = allExpenses.reduce(function(total2, expenses) {
        return total2 + expenses.amountprop;
    }, 0);
    var total = parseFloat(totalBudget.value);
    expenseOutput.innerText = sum; 
    balanceOutput = total - sum;
    balance.innerText = balanceOutput;
    addExpenseButton.innerText = "Add Expense"

    createExpensesRow(expense);
    

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
    editButton.classList.add("edit");

    editButton.addEventListener("click", function() {
    
    var expenseIndex = allExpenses.findIndex(exp => exp === expense);
    
    var category = document.getElementById("category").value = expense.categoryprop;
    var description = document.getElementById("description").value = expense.descriptionprop;
    var amount = document.getElementById("amount").value = expense.amountprop;
    var date = document.getElementById("date").value = expense.dateprop;

    expenseOutput.innerText = parseFloat(expenseOutput.innerText) - expense.amountprop;
    balanceOutput += expense.amountprop;
    balance.innerText = balanceOutput;
    allExpenses.splice(expenseIndex, 1)
    addExpenseButton.innerText = "Update Expense"
    row.remove();

    });

    editDeleteCell.appendChild(editButton);

    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Detele";
    deleteButton.addEventListener("click", function() {
        
        var expenseIndex = allExpenses.findIndex(exp => exp === expense);

        balanceOutput += expense.amountprop;
        balance.innerText = balanceOutput;
        expenseOutput.innerText = parseFloat(expenseOutput.innerText) - expense.amountprop;
        allExpenses.splice(expenseIndex, 1)
        row.remove();

    });
    editDeleteCell.appendChild(deleteButton);

    row.appendChild(editDeleteCell);

    expenseTableBody.appendChild(row);
}
