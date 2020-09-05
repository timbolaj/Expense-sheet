export default function getTotal(setLocalTotal) {
  setTimeout(() => {
    const bills = document.getElementById('bills-total').value;
    const fluctuates = document.getElementById('fluctuates-total').value;
    const investment = document.getElementById('investment-total').value;
    const loans = document.getElementById('loan-total').value;
    const setTotal = Number(bills) + Number(fluctuates) + Number(investment) + Number(loans);
    setLocalTotal(setTotal);
    console.log(setTotal)
  }, 100)
}