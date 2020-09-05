export default function getTotal(setTotal) {
  setTimeout(() => {
    const bills = document.getElementById('bills-total').value;
    const fluctuates = document.getElementById('fluctuates-total').value;
    const investment = document.getElementById('investment-total').value;
    const loans = document.getElementById('loan-total').value;
    const newTotal = Number(bills) + Number(fluctuates) + Number(investment) + Number(loans);
    setTotal(newTotal);
    console.log(newTotal)
  }, 100)
}