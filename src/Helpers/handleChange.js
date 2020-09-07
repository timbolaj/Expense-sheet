function getTotal(setLocalTotal) {
  setTimeout(() => {
    const bills = document.getElementById('bills-total').value;
    const fluctuates = document.getElementById('fluctuates-total').value;
    const investment = document.getElementById('investment-total').value;
    const loans = document.getElementById('loan-total').value;
    const setTotal = Number(bills) + Number(fluctuates) + Number(investment) + Number(loans);
    setLocalTotal(setTotal);
  }, 100)
}

export default function handleChange(setTotal, setLocalTotal, expense, setProfit) {
  setLocalTotal(expense);
  getTotal(setTotal);
  let income = document.getElementById('income').value;
  if (!income) {
    income = 0;
  }
  setProfit(income - expense);
}