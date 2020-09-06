export default function payMinusExpense(event, setDifference, total) {
  console.log('paragraph changes')
  const pay = event.target.value;
  if (isNaN(Number(pay))) {
    return;
  }
  setDifference(pay - total);
}