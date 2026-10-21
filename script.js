const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

//Capturando o evento de input para formatar o valor.
amount.oninput = () => {
  //Tratando o campo, recebendo só números.
  let value = amount.value.replace(/\D/g, "");
  value = Number(value / 100);
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    const expeseItem = document.createElement("li");
    expeseItem.classList.add("expense");
  } catch (error) {
    alert("Não foi possivel atualizar a lista de despesas.");
    console.log(error);
  }
}
