document.addEventListener("DOMContentLoaded", function () {
    const initialBalance = 3000.0;
    let remainingBalance = initialBalance;

    const expenses = [
        "salão 100 reais",
        "plano de saude 400 reais",
        "supermercado 1000 reais",
        "restaurante 100 reais",
        "passagem de avião 200 reais"
    ];

    const expensesList = document.getElementById("expensesList");
    expenses.forEach(expense => {
        const listItem = document.createElement("li");
        listItem.textContent = expense;
        expensesList.appendChild(listItem);

        const amount = extractAmount(expense);
        remainingBalance -= amount;
    });

    const remainingBalanceSpan = document.getElementById("remainingBalance");
    remainingBalanceSpan.textContent = remainingBalance.toFixed(2);

    // Função para extrair o valor numérico do gasto usando regex
    function extractAmount(expense) {
        const amountStr = expense.match(/\d+(\.\d+)?/)[0];
        return parseFloat(amountStr);
    }
});
