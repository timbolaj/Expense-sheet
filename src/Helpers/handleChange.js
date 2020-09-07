function getTotal(setTotal, setProfit, income) {
  setTimeout(() => {
    const bills = document.getElementById('bills-total').value;
    const fluctuates = document.getElementById('fluctuates-total').value;
    const investment = document.getElementById('investment-total').value;
    const loans = document.getElementById('loan-total').value;
    const total = Number(bills) + Number(fluctuates) + Number(investment) + Number(loans);
    setTotal(total);
    setProfit(income - total);
  }, 100)
}

export default function handleChange(setTotal, setLocalTotal, expense, setProfit, totalExpense) {
  let income = document.getElementById('income').value;
  if (!income) {
    income = 0;
  }
  setLocalTotal(expense);
  getTotal(setTotal, setProfit, income);
}