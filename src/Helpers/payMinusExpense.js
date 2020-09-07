export default function payMinusExpense(totalExpense, setProfit) {
  const income = document.getElementById('income').value;
  setProfit(income - totalExpense);
}