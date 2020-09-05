export default function handleChange(setTotal, setLocalTotal, getTotal, val) {
  setLocalTotal(val);
  getTotal(setTotal);
}